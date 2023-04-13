import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TSCLassComponent from './components/TSClassComponent'
import TSFunctionalComponent from './components/TSFunctionalComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TSFunctionalComponent
          textContent="Riempiamo il secondo <p>"
          count={10}
          color="red"
        />
        <TSFunctionalComponent
          textContent="Riempiamo il secondo <p>"
          count={10}
          color="green"
        />
        <TSFunctionalComponent
          textContent="Riempiamo il secondo <p>"
          count={10}
        />
        {/* <TSCLassComponent
          textContent="Riempiamo il secondo <p>"
          count={10}
          color="red"
        />
        <TSCLassComponent
          textContent="Riempiamo il secondo <p>"
          count={10}
          color="green"
        />
        <TSCLassComponent textContent="Riempiamo il secondo <p>" count={10} /> */}
      </header>
    </div>
  )
}

export default App
