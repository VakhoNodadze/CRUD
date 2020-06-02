import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import Form from '../../Form';
import Button from "../../Button";
import {required} from "../../../utils/validator";
import Modal from "../../Modal";


const NewEmployeeModal = ({isOpen, onClose, first_name, last_name, position, company, dx_country, dx_city}) => {
  const initialValues = {
    first_name,
    last_name,
    position,
    company
  };
  const method = useForm({
    mode: 'onChange',
    defaultValues: initialValues
  });
  return (
    <Modal isOpen={isOpen}
      onClose={() => onClose(false)}
      size="small">
      <Modal.Content>
        <FormContext {...method}>
          <form onSubmit={method.handleSubmit(() => {})} style={{ marginLeft: '50px' }}>
            <div>
              <Form.Field>
                <Form.Label name="First name" />
                <Form.Input name="first_name" validate={required} />
              </Form.Field>
              <Form.Field>
                <Form.Label name="Last name" />
                <Form.Input name="last_name" validate={required} />
              </Form.Field>
              <Form.Field>
                <Form.Label name="Job title" />
                <Form.Input name="position" validate={required} />
              </Form.Field>
              <Form.Field>
                <Form.Label name="Company" />
                <Form.Input name="company" validate={required} />
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
                    e.preventDefault();
                    method.reset(initialValues);
                  }}
                >
                    CANEL
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
  );
};

export default NewEmployeeModal;
