import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import HomePage from '../components/Home/index'

class MainIndex extends React.Component {
  render() {
    return (
        <HomePage />
    )
  }
}

export default MainIndex
