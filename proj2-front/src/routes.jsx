import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AllCountries from './AllCountries'

import Country from './country'

export default props => (
    <Router>
        <Route path='/AllCountries' component={AllCountries} />
        <Route path='/country' component={Country} />
        <Redirect from='*' to='/AllCountries' />
    </Router>
)