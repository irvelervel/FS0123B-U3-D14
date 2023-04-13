import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TSCLassComponent from './components/TSClassComponent'
import TSFunctionalComponent from './components/TSFunctionalComponent'
import BootstrapComponent from './components/BootstrapComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<BootstrapComponent />} />
            <Route
              path="/class"
              element={
                <TSCLassComponent
                  textContent="Riempiamo il secondo <p>"
                  count={10}
                  color="red"
                />
              }
            />
            <Route
              path="/function"
              element={
                <TSFunctionalComponent
                  textContent="Riempiamo il secondo <p>"
                  count={10}
                  color="red"
                />
              }
            />
            <Route path="/fetch" element={<FetchComponent />} />
            {/* 
        <TSFunctionalComponent
          textContent="Riempiamo il secondo <p>"
          count={10}
          color="green"
        />
        <TSFunctionalComponent
          textContent="Riempiamo il secondo <p>"
          count={10}
        /> */}
            {/* 
        <TSCLassComponent
          textContent="Riempiamo il secondo <p>"
          count={10}
          color="green"
        />
        <TSCLassComponent textContent="Riempiamo il secondo <p>" count={10} /> */}
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
