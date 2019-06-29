import React from 'react';
import SideNavbar from './components/SideNavbar';
import './App.css';

function App() {
  return (
    <div className="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
        <i className="fas fa-bars"></i>
      </a>
      <SideNavbar />

      <main className="page-content">
        <div className="container-fluid">
          <h2>Román Rey Pedrero</h2>

          <div className="row">
            <div className="form-group col-md-12">
              <p>Hi there!!!</p>
              <p>So this is supposed to be my personal page but seems like I'm building it 😅</p>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}

export default App;
