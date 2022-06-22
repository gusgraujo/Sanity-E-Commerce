import React from 'react'
import Head from 'next/head'
import NavBar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title> My Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">
        {children}

      </main>
      <Footer />
    </div>
  )
}

export default Layout