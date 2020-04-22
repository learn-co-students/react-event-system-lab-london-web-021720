// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    

    focus = () => {
        console.log("Good!")
    }
    render() {
        return(
            <p>
            <button onFocus = {this.focus} onBlur = {event => console.log("Hey! Eyes on me!")}>COME</button>
            </p>
        )
      }


}