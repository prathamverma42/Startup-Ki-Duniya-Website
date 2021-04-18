import {Button,Modal,Form} from 'react-bootstrap';

const UserProfileModal = (props)=>{

    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Profile Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form>
  
        <Form.Group controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Your Name" />
  </Form.Group>

  <Form.Group controlId="field">
    <Form.Label>Field of Expertise</Form.Label>
    <Form.Control type="text" placeholder="Eg: Computer Science" />
  </Form.Group>

 
 <h5> Add Education Details</h5> 

  <Form.Group controlId="Education">
    <Form.Label>Degree 1</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )

}

export default UserProfileModal;