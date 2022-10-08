import React, { Component } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <div className="article-wrapper">
                    <Navigation />
                    <Main />
                </div>
            </div>
        )
    }
}