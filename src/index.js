import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Survey from './pages/Survey'
import Home from './pages/Home'
import Header from './components/Header'
import Error from './components/Error'
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'
import Results from './pages/Results'
import Freelances from './pages/Freelances'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <GlobalStyle />
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />

                        <Route
                              path="/survey/:questionNumber"
                              element={<Survey />}
                        />
                        <Route path="/results" element={<Results />} />
                        <Route path="/freelances" element={<Freelances />} />
                        {/* <Route
                              path="/survey/:questionNumber"
                              element={<Survey />}
                        > */}
                        {/* Nous imbriquons nos composants dans survey */}
                        {/* <Route path="client" element={<ClientForm />} />
                              <Route
                                    path="freelance"
                                    element={<FreelanceForm />}
                              />
                        </Route> */}
                        <Route path="/results" element={<Results />} />
                        <Route path="/Freelances" element={<Freelances />} />
                        <Route path="*" element={<Error />} />
                  </Routes>
            </BrowserRouter>
      </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
