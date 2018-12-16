// @External Dependencies
import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import PropTypes from 'prop-types'

// @Component
class ModalCustom extends Component {
  handleSubmit = event => {
    event.preventDefault()

    const { onAdd } = this.props

    const form = new window.FormData(event.target)
    const data = {
      name: form.get('contactName').trim(),
      description: form.get('contactDescription').trim(),
      photo: form.get('contactPhoto').trim()
    }

    onAdd(data)
  }

  render() {
    const { className, modal, toggle } = this.props

    return (
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Agregar nuevo contacto</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit} id="formAddPeople">
            <FormGroup>
              <Label for="contactPhoto">URL Imagen de perfil</Label>
              <Input
                type="text"
                name="contactPhoto"
                id="contactPhoto"
                placeholder="Ej: http://domain.com/photo.jpg"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="contactName">Nombre</Label>
              <Input
                type="text"
                name="contactName"
                id="contactName"
                placeholder="Ej: Carlos Sánchez"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="contactDescription">Descripción</Label>
              <Input
                type="textarea"
                name="contactDescription"
                id="contactDescription"
                placeholder="Ej: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                required
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" type="submit" form="formAddPeople">
            {' '}
            Guardar{' '}
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

// @Proptypes
ModalCustom.propTypes = {
  className: PropTypes.string,
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

// @Export Component
export default ModalCustom
