import React from 'react'
import Modal from "../../primitives/Modal"
import List from "../../primitives/List"
import Button from "../../primitives/Button"

const RemoveEmployeeModal = ({isOpen,onClose, handleSubmit}) => {
  const onSubmit = () => {
    handleSubmit()
    onClose(false)
  }
  return(
    <Modal isOpen={isOpen} onClose={onClose} size="small">
      <Modal.Content>
        <List>
          <List.Item>
            <h3>Are you sure you want to delete this user?</h3>
          </List.Item>
          <div style={{
            display: 'flex', justifyContent: 'space-between'
          }}
          >
            <Button
              style={{ margin: '3px auto', minWidth: '100px' }}
              color="danger"
              size="small"
              variant="contained"
              onClick={() => onClose(false)}
            >NO
            </Button>
            <Button
              style={{ margin: '3px auto', minWidth: '100px' }}
              color="primary"
              size="small"
              variant="contained"
              onClick={() => onSubmit()}
            >YES
            </Button>
          </div>
        </List>
      </Modal.Content>
    </Modal>
  )
}

export default RemoveEmployeeModal
