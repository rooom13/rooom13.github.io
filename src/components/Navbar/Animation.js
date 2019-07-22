import React, { Component } from 'react';
import styled from 'styled-components'
import media from '../../media'

class Navbar extends Component {



    componentDidMount() {
        // Canvas variables
        const canvas = document.querySelector(`#${this.props.id}`)
        this.ctx = canvas.getContext('2d')

        this.canvasLeft = document.querySelector(`#left`)


        this.CWIDTH = canvas.width
        this.CHEIGHT = canvas.height

        this.t = 0

        this.cumulativeValue = {0:0,1:0}

        requestAnimationFrame(this.animate)

    }
    animate = () => {
        this.draw()
    }


    draw3DHelix = (ctx, t, CWIDTH, CHEIGHT) => {

        const size = 2
        const gap = 5
        const angularSpeed = 0.015
        const amplitude = 1

        for (let i = 0; i < 50; ++i) {


            ctx.fillStyle = 'white';
            let y = this.cosineY(amplitude * i, t, angularSpeed, i * Math.PI / 8)
            ctx.fillRect(i * gap, CHEIGHT / 2 + y, size, size)

            y = this.cosineY(amplitude * i, t, angularSpeed, (i + 3) * Math.PI / 8)
            ctx.fillRect(i * gap, CHEIGHT / 2 + y, size, size)
        }
    }
    drawCosineHelix = (ctx, t, CWIDTH, CHEIGHT) => {

        const size = 2
        const gap = 2
        const angularSpeed = 0.015
        const amplitude = 0.3

        for (let i = 0; i < 200; ++i) {

            const color = i % 2 ? 'white' : 'blue';
            ctx.fillStyle = color
            let y = this.cosineY(amplitude * i, t, angularSpeed, i)
            ctx.fillRect(i * gap, CHEIGHT / 2 + y, size, size)

        }
    }

    drawCosineBar = (ctx, t, CWIDTH, CHEIGHT) => {

        const size = 2
        const gap = 5
        const angularSpeed = 0.015
        const amplitude = 1

        for (let i = 0; i < 50; ++i) {
            ctx.fillStyle = 'white';
            const y1 = this.cosineY(amplitude * i, t, angularSpeed, i)
            const y2 = this.cosineY(amplitude * i, t, angularSpeed, i + 4)
            ctx.fillRect(i * gap, CHEIGHT / 2 + y1, size, y2)
        }
    }

    drawNew = (ctx, t, CWIDTH, CHEIGHT) => {

        if (t > CWIDTH) return;

       const size = 2
 

        const color = 'white';
        ctx.fillStyle = color


        const rand = Math.random() * 4 - 2
        const rand2 = Math.random() * 4 - 2
        this.cumulativeValue[0] += rand
        const y = this.cumulativeValue[0]
        
        this.cumulativeValue[1] += rand2
        const y2 = this.cumulativeValue[1]

        ctx.fillRect(t, CHEIGHT / 2 + y, size, size)
        ctx.fillRect(t, CHEIGHT / 2 + y2, size, size)


        ctx.fillRect(t, CHEIGHT / 2 - y, size, size)
        ctx.fillRect(t, CHEIGHT / 2 - y2, size, size)

    }

    cosineY = (A, t, w, phi) => {
        return A * Math.cos(t * w + phi)
    }
    draw = () => {

        const { ctx, t, CWIDTH, CHEIGHT } = this

        if (this.props.inverted) {
            ctx.clearRect(0, 0, CWIDTH, CHEIGHT)
            ctx.drawImage(this.canvasLeft, 0, 0)



        } else {


            this.t++


            switch (this.props.animation) {
            // switch (3) {
                case 0:
                    ctx.clearRect(0, 0, CWIDTH, CHEIGHT)
                    this.drawCosineHelix(ctx, t, CWIDTH, CHEIGHT)
                    break;
                case 1:
                    ctx.clearRect(0, 0, CWIDTH, CHEIGHT)
                    this.drawCosineBar(ctx, t, CWIDTH, CHEIGHT)
                    break;
                case 2:
                    ctx.clearRect(0, 0, CWIDTH, CHEIGHT)
                    this.draw3DHelix(ctx, t, CWIDTH, CHEIGHT)
                    break;
                case 3:
                    this.drawNew(ctx, t, CWIDTH, CHEIGHT)
                    break;

            }
        }


        requestAnimationFrame(this.animate)
    }


    render() {
        const { inverted } = this.props
        return (
            <StyledCanvas id={this.props.id} inverted={inverted} />
        )
    }

}

const StyledCanvas = styled.canvas`
    /* If performance drops --> Use react-media */
    display: none;

    ${media.tablet`
        display: block;
    `}
    ${(props) => props.inverted && `transform: scaleX(-1)`}


`

export default Navbar
