import React from 'react'
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

const ModalCustom = ({ className, modal, toggle }) => (
  <Modal isOpen={modal} toggle={toggle} className={className}>
    <ModalHeader toggle={toggle}>Agregar nuevo contacto</ModalHeader>
    <ModalBody>
      <Form>
        <FormGroup>
          <Label for="urlProfileImage">URL Imagen de perfil</Label>
          <Input
            type="text"
            name="urlProfileImage"
            id="urlProfileImage"
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
      <Button color="primary" onClick={toggle}>
        Guardar
      </Button>
    </ModalFooter>
  </Modal>
)

export default ModalCustom
