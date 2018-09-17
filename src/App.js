import React, { Component } from 'react';
import Header from "./components/static/Header";
import Router from "./Router";
import Footer from "./components/static/Footer";
import { BrowserRouter } from 'react-router-dom';
import './styles/app.scss';
import img from "./images/background.jpg";

class App extends Component {

    render(){
        return (
        <BrowserRouter>
            <div className="app-main-container">
                <Header />
                <img className="app-background" src={'/'+img}/>
                <div className="container app-page">
                    <Router />
                </div>
                <div className="load"></div>
                <Footer />
            </div>
        </BrowserRouter>
        )
    }
}

export default App;