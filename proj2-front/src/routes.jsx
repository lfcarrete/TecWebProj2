import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Country from './country'

export default props => (
    <Router>
        <Route path='/country' component={Country} />
        <Redirect from='*' to='/country' />
    </Router>
)