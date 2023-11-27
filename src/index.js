import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Survey from './pages/Survey'
import Home from './pages/Home'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'

import GlobalStyle from './utils/style/GlobalStyle'
import { SurveyProvider, ThemeProvider } from './utils/context'
import Footer from './components/Footer'
import ProfileContainer from './components/ProfileContainer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <ThemeProvider>
                        <SurveyProvider>
                              <GlobalStyle />
                              <Header />
                              <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route
                                          path="/survey/:questionNumber"
                                          element={<Survey />}
                                    />
                                    <Route
                                          path="/results"
                                          element={<Results />}
                                    />
                                    <Route
                                          path="/freelances"
                                          element={<Freelances />}
                                    />
                                    <Route
                                          path="/results"
                                          element={<Results />}
                                    />
                                    <Route
                                          path="/Freelances"
                                          element={<Freelances />}
                                    />
                                    
                                    <Route
                                          path="/profile/:id"
                                          element={<ProfileContainer />}
                                    />
                                    <Route path="*" element={<Error />} />
                              </Routes>
                              <Footer />
                        </SurveyProvider>
                  </ThemeProvider>
            </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root'),
)
