import { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// In App.tsx riceviamo un errore se proviamo a passare una prop a TSClassComponent
// perchè questo componente, di default, al momento non si sta aspettando nessuna prop
// --> l'interfaccia dell'oggetto PROPS di questo componente è {}

// soluzione --> dobbiamo scrivere la NOSTRA interfaccia per le props che questo
// componente riceverà!

interface TSCLassComponentProps {
  textContent: string
  count: number
  color?: string
}

interface TSCLassComponentState {
  firstName: string
}

// utile a definire uno stato iniziale così:
// state = { firstName: 'Stefano' }

class TSCLassComponent extends Component<
  TSCLassComponentProps,
  TSCLassComponentState
> {
  state = {
    firstName: 'Stefano',
  }

  render() {
    return (
      // poichè "color" tra le prop può essere undefined, diamo come color
      // del div un valore di default
      <div style={{ color: this.props.color || 'black' }}>
        <h2>Class Component</h2>
        <p>Vediamo come lavora in TS - {this.state.firstName}</p>
        <p>
          {this.props.textContent} - {this.props.count}
        </p>
        <Button
          onClick={() => {
            this.setState({
              // questo setState lavora in simbiosi con TSCLassComponentState,
              // quindi NON mi permetterà di cambiare il tipo di firstName
              // così come NON mi permetterà di aggiungere al mio stato iniziale
              // altre proprietà
              firstName:
                this.state.firstName === 'Stefano' ? 'Giovanni' : 'Stefano',
            })
          }}
        >
          CHANGE NAME
        </Button>
        <Link to="/function">
          <div className="btn btn-warning">GO TO FUNCTIONAL PAGE</div>
        </Link>
      </div>
    )
  }
}

export default TSCLassComponent
