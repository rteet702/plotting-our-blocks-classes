import React, { Component } from 'react'
import SubContent from './SubContent'
import Advertisement from './Advertisement'

export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className="subcontent-wrapper">
                    <SubContent />
                    <SubContent />
                    <SubContent />
                </div>
                <Advertisement />
            </div>
        )
    }
}