import { useState } from 'react'
import Button from 'react-bootstrap/Button'

interface TSFunctionalComponentProps {
  textContent: string
  count: number
  color?: string
}

const TSFunctionalComponent = (props: TSFunctionalComponentProps) => {
  // const TSFunctionalComponent = ({textContent}: TSFunctionalComponentProps) => {

  // problema: come fare in modo da inizializzare una variabile di stato
  // con un valore che non deve descriverne il tipo per sempre
  const [firstName, setFirstName] = useState<null | string>(null)

  return (
    <div style={{ color: props.color || 'black' }}>
      <h2>Functional Component</h2>
      <p>Vediamo come lavora in TS - {firstName}</p>
      <p>
        {props.textContent} - {props.count}
      </p>
      <Button
        onClick={() =>
          setFirstName(firstName === 'Stefano' ? 'Giovanni' : 'Stefano')
        }
      >
        CHANGE NAME
      </Button>
    </div>
  )
}

export default TSFunctionalComponent
