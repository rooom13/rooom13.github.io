import React, { Component } from 'react';
import styled from 'styled-components'
import media from '../../media'

class Navbar extends Component {



    componentDidMount() {
        // Canvas variables
        const canvas = document.querySelector(`#${this.props.id}`)
        this.ctx = canvas.getContext('2d')

        this.CWIDTH = canvas.width
        this.CHEIGHT = canvas.height

        this.t = 0

        requestAnimationFrame(this.animate)


    }
    animate = () => {
        this.draw()
    }


    draw3DHelix = (ctx, t, CWIDTH, CHEIGHT) => {

        const size = 2
        const gap = 5
        const angularSpeed = 0.025
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
        const gap = 5
        const angularSpeed = 0.025
        const amplitude = 1

        for (let i = 0; i < 50; ++i) {

            const color = i % 2 ? 'white' : 'red';
            ctx.fillStyle = color
            // ctx.fillStyle = 'white';
            let y = this.cosineY(amplitude * i, t, angularSpeed, i)
            ctx.fillRect(i * gap, CHEIGHT / 2 + y, size, size)

            y = this.cosineY(amplitude * i, t, angularSpeed, i + 4)
            ctx.fillRect(i * gap, CHEIGHT / 2 + y, size, size)
        }
    }
    drawCosineBar = (ctx, t, CWIDTH, CHEIGHT) => {

        const size = 2
        const gap = 5
        const angularSpeed = 0.025
        const amplitude = 1

        for (let i = 0; i < 50; ++i) {
            ctx.fillStyle = 'white';
            const y1 = this.cosineY(amplitude * i, t, angularSpeed, i)
            const y2 = this.cosineY(amplitude * i, t, angularSpeed, i + 4)
            ctx.fillRect(i * gap, CHEIGHT / 2 + y1, size, y2)
        }
    }

    cosineY = (A, t, w, phi) => {
        return A * Math.cos(t * w + phi)
    }
    draw = () => {


        this.t++

        const { ctx, t, CWIDTH, CHEIGHT } = this
        ctx.clearRect(0, 0, CWIDTH, CHEIGHT)

        // switch (this.props.animation) {
        switch (0) {
            case 0:
                this.drawCosineHelix(ctx, t, CWIDTH, CHEIGHT)
                break;
            case 1:
                this.drawCosineBar(ctx, t, CWIDTH, CHEIGHT)
                break;
            case 2:
                this.draw3DHelix(ctx, t, CWIDTH, CHEIGHT)
                break;
            default:
                this.drawCosineHelix(ctx, t, CWIDTH, CHEIGHT)
                this.drawCosineBar(ctx, t, CWIDTH, CHEIGHT)
                break;

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
    display: none;

    ${media.tablet`
        display: block;
    `}
    ${(props) => props.inverted && `transform: scaleX(-1)`}


`




export default Navbar
