import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Message from './pages/Message'
import ScrollToTop from './components/ScrollToTop'

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-bg-color">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App 