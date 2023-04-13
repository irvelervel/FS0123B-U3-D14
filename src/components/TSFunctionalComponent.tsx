import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate, useLocation } from 'react-router-dom'

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

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div style={{ color: props.color || 'black' }}>
      <h2>Functional Component</h2>
      <p>Vediamo come lavora in TS - {firstName}</p>
      <p>
        {props.textContent} - {props.count}
      </p>
      <Button
        onClick={() => {
          console.log(location)
          setFirstName(firstName === 'Stefano' ? 'Giovanni' : 'Stefano')
        }}
      >
        CHANGE NAME
      </Button>
      <Button variant="warning" onClick={() => navigate('/class')}>
        GO TO CLASS PAGE
      </Button>
    </div>
  )
}

export default TSFunctionalComponent
