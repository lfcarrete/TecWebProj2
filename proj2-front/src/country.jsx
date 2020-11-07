import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export default class Country extends Component {

    constructor(props) {
        super(props)

        this.state = { listaCountries : [
            {country: "England"},
            {country: "Brazil"}
        ], usuario: {username: ''} };
        
        console.log("Teste")

    

    }

    componentDidMount() {
        const { name } = this.props.location.state
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3003/country/searchCountry/' + name)
            .catch(erro => console.log(erro))
            
            if (!response.data) {
                return 
            }

            var handleChange = (prevState, r) => {
                prevState.listaCountries = r;
                console.log(prevState)
                return prevState;
            }
            
            this.setState(handleChange(this.state, response.data.provinces), () => console.log(this.state))

            
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
                        Country: {pais.province}
                    </dt>
                    <dd>
                        Confirmed: {pais.confirmed}
                    </dd>
                    <dd>
                        Recovered: {pais.recovered}
                    </dd>
                    <dd>
                        Deaths: {pais.deaths}
                    </dd>
                    <dd>
                        Active: {pais.active}
                    </dd>
                </dl>
                

            )
        })
        return (
            <div>
                <h1>Dados sobre o país</h1>
                <dl>
                    {liCountries}
                </dl>
            </div>
        )
    }
}