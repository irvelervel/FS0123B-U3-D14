import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, FormEvent } from 'react'

const BootstrapComponent = () => {
  const [formEmail, setFormEmail] = useState('')
  const [formPassword, setFormPassword] = useState('')
  const [formCheckbox, setFormCheckbox] = useState(false)

  const handleSubmit = () => {
    console.log(formEmail, formPassword, formCheckbox)
  }

  return (
    <div>
      <Alert variant="danger" dismissible={true}>
        Ciaone! Error
      </Alert>
      <span>
        New elements <Badge bg="info">NEW</Badge>
      </span>
      <h2>FORM</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formPassword}
            onChange={(e) => setFormPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Terms of Use"
            required
            checked={formCheckbox}
            onChange={(e) => setFormCheckbox(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default BootstrapComponent
