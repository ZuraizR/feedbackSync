import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='FeedbackSync' />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
