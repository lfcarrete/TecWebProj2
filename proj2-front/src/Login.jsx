import React, { Component } from 'react'

export default class Login extends Component {

    render() {
        return (
            <div>
                <form method="get">
                    <label for="user">Username:</label><br />
                    <input type="text" id="user" name="user"></input><br />
                    <label for="password">Password:</label><br />
                    <input type="password" id="password" name="password"></input><br />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}