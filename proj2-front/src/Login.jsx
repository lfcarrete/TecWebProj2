import React, { Component, useImperativeHandle } from 'react'
import axios from 'axios'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = { listaUsuarios : [
            {country: "England"},
            {country: "Brazil"}
        ] };
        
        console.log("Teste")

        axios.get('http://localhost:3003/users/')
            .then(resp => {
                this.setState({listaUsuarios: resp.data})
                return;
            })
            .catch(erro => console.log(erro))
    }

    onSubmit(e) {
        e.preventDefault();
        var user = this.user;
        var password = this.password;
        console.log(user)
    }

    render() {
        var usuarios = this.state.listaUsuarios
        console.log(usuarios)
        


        return (
            <div>  
                <h1>Login</h1>
                <form>
                    <label for="user">Username:</label><br />
                    <input type="text" id="user" ref={(c) => this.user = c} name="user"></input><br />
                    <label for="password">Password:</label><br />
                    <input type="password" id="password" ref={(c) => this.password = c}name="password"></input><br />
                </form>
                <button type="button" onClick={this.onSubmit}>Login</button>
            </div>
        );
    }
}