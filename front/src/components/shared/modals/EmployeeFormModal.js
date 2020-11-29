import React from 'react'
import { FormContext, useForm } from 'react-hook-form'
import Form from '../../primitives/Form'
import Button from "../../primitives/Button"
import {required} from "../../../utils/validator"
import Modal from "../../primitives/Modal"


const EmployeeFormModal = ({isOpen, onClose, _id, firstName, lastName, position, company, location, handleSubmit}) => {
  const initialValues = {
    firstName,
    lastName,
    position,
    company,
    location
  }
  const method = useForm({
    mode: 'onChange',
    defaultValues: initialValues
  })
  const onSubmit = (values) => {
    handleSubmit(values, _id)
    onClose(false)
  }
  return (
    <Modal isOpen={isOpen}
      onClose={() => onClose(false)}
      size="small">
      <Modal.Content>
        <FormContext {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <div>
              <Form.Field>
                <Form.Label name="First name" />
                <Form.Input name="firstName" validate={required} />
              </Form.Field>
              <Form.Field>
                <Form.Label name="Last name" />
                <Form.Input name="lastName" validate={required} />
              </Form.Field>
              <Form.Field>
                <Form.Label name="Job title" />
                <Form.Input name="position" validate={required} />
              </Form.Field>
              <Form.Field>
                <Form.Label name="Company" />
                <Form.Input name="company" validate={required} />
              </Form.Field>
              <Form.Field>
                <Form.Label name="Location" />
                <Form.Input name="location" validate={required} />
              </Form.Field>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20
              }}
            >
              <div style={{ width: '40%' }}>
                <Button
                  size="small"
                  fluid
                  variant="basic"
                  onClick={(e) => {
                    e.preventDefault()
                    method.reset(initialValues)
                  }}
                >
                    RESET
                </Button>
              </div>
              <div style={{ width: '60%' }}>
                <Button
                  fluid
                  size="small"
                  color="primary"
                  variant="contained"
                  disabled={Object.keys(method.errors).length > 0}
                >
                    SAVE
                </Button>
              </div>
            </div>
          </form>
        </FormContext>
      </Modal.Content>
    </Modal>
  )
}

export default EmployeeFormModal
