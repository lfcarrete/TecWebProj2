import React, { Component } from 'react'
import axios from 'axios'

export default class Country extends Component {

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
            const response = await axios.get('http://localhost:3003/country/searchCountry/Italy')
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
                <dl>
                    {liCountries}
                </dl>
            </div>
        )
    }
}