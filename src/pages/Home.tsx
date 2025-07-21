import React from 'react'
import About from '../components/About'
import Works from '../components/Works'
import CompanyInfo from '../components/CompanyInfo'

const Home: React.FC = () => {
  return (
    <>
      <section className="main-visual">
        <img src="/images/top_slideImg01.png" alt="インパクトのある施工事例" />
      </section>
      <About />
      <Works />
      <CompanyInfo />
    </>
  )
}

export default Home 