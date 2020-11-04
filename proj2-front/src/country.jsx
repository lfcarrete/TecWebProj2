import React, { Component } from 'react'
import axios from 'axios'

export default class Country extends Component {
    render() {
        var countries = [
            {country: 'England'},
            {country: 'Brazil'}
        ]
        var liCountries = countries.map(pais => {
            return (
            <li key={pais.country}>{pais.country}</li>
            )
        })
        return (
            <div>
                <ul> {liCountries} </ul>
            </div>
        )
    }
}