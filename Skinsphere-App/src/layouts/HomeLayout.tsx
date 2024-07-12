import React, { Component } from 'react'
 import Navbar from '../component/navbar.tsx'
 import Footer from '../component/Footer.tsx'
 import SecondFrame from '../component/SecondFrame.tsx'
import SearchBar from '../component/SearchBar.tsx'
import ProductBars from '../component/ProductBars.tsx'

import {Outlet} from 'react-router-dom'

type Props = {}

type State = {}

export default class HomeLayout extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <Navbar />
        {<SecondFrame />}
        {<SearchBar />}
        {<ProductBars />}

        {<Outlet />}
        {<Footer />}
      </div>
    )
  }
}