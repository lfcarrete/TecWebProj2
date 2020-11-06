import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import './AllCountries.css'

export default class AllCountries extends Component {

    constructor(props) {
        super(props)

        this.state = { listaCountries : [
            {country: "England"},
            {country: "Brazil"}
        ] };
        
        console.log("Teste")

    

    }

    componentDidMount() {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3003/country/fetchData')
            .catch(erro => console.log(erro))
            
            if (!response.data) {
                return 
            }

            var handleChange = (prevState, r) => {
                prevState.listaCountries = r;
                console.log(prevState)
                return prevState;
            }
            
            this.setState(handleChange(this.state, response.data), () => console.log(this.state))

            
        }
        fetchData() 
    }

    render() {

        var countries = this.state.listaCountries;
        console.log(this.state)

        var liCountries = countries.map(function(pais) {
            return (
                <dl>
                    <dt>
                        <Link className = "paises" to= {{pathname: "/country", state: { name: pais.name }  }}>{pais.name}</Link>
                    </dt>
                </dl>
                

            )
        })
        return (
            <div>
                <h1>Selecione um país</h1>
                <dl>
                    {liCountries}
                </dl>
            </div>
        )
    }

}