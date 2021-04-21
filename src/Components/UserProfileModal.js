import {Button,Modal,Form} from 'react-bootstrap';
import {useState} from 'react';

let progelem =  
<div className="row my-2">
<div className="col-4">  
  <Form.Label>Prog Lang</Form.Label>
  <Form.Control as="select" >
    <option>C++</option>
    <option>Python</option>
    <option>JS</option>
    <option>Java</option>
  </Form.Control>    
  </div>
  <div className="col-4">  
  <Form.Label>Rating</Form.Label>
  <Form.Control type="number" placeholder="Eg: 69.26" />
  </div>
  <div className="col-4">  
  </div>
  </div>


let skillelem = <Form.Control type="text" placeholder="Skill" />
  

let educationelem = <div className="row my-2">
<div className="col-5">  
  <Form.Label>Year</Form.Label>
  <Form.Control type="number" placeholder="eg:2021" />
  </div>
  <div className="col-5">  
  <Form.Label>Degree/Examination</Form.Label>
  <Form.Control type="text" placeholder="Exam" />
  </div>
  <div className="col-5">  
  <Form.Label>Institution/Board</Form.Label>
  <Form.Control type="text" placeholder="Eg : CBSE" />
  </div>
  <div className="col-5">  
  <Form.Label>CGPA/Marks</Form.Label>
  <Form.Control type="text" placeholder="Enter your Marks" />
  </div>
  </div>


let educationDetails = [
  educationelem,
]

let ProgrammingLanguages = [
  progelem,
  
]

let techSkills = [
  skillelem,
]

let nontechSkills = [
  skillelem,
]


const UserProfileModal = (props)=>{


  const [update,setupDate] = useState(false);

    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Profile Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form >
  
        <Form.Group controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Your Name" />
  </Form.Group>

  <Form.Group controlId="field">
    <Form.Label>Field of Expertise</Form.Label>
    <Form.Control type="text" placeholder="Eg: Computer Science" />
  </Form.Group>


<h5>Add Education Details</h5>
 
<Form.Group controlId="education">
      {
        educationDetails.map((elem)=>{
          return (elem)
        }) 

      }
  <Button variant="success mx-2" onClick={
()=>{
  educationDetails.push(educationelem)
  setupDate((prev)=>!prev)
}
  }>Add More</Button>
  <Button variant="danger" onClick={
    ()=>{
      educationDetails.pop()
      setupDate((prev)=>!prev)
    }
  }>Delete</Button>
</Form.Group>

 <h5> Add Programming Languages</h5> 


  <Form.Group controlId="Programming" >
  {
    ProgrammingLanguages.map((elem)=>{
      return (elem)
    })
  }
  <Button variant="success" className="btn-sm my-2" onClick={
    ()=>{
      ProgrammingLanguages.push(progelem)
      setupDate((prev)=>!prev)
    }
  }>Add More</Button>

<Button variant="danger" className="btn-sm my-3 mx-2" onClick={
  ()=>{
    ProgrammingLanguages.pop()
    setupDate((prev)=>!prev)
  }
  
}> Delete</Button>
  </Form.Group>
      
      
  
 

<h5> Add your Techical Skills</h5>


<Form.Group controlId="techskills" className="my-3">
   {
     techSkills.map((elem)=>{
       return (elem)
     })
   }
   <Button variant="success" className="btn-sm my-2" onClick={
    ()=>{
      techSkills.push(skillelem)
      setupDate((prev)=>!prev)
    }
  }>Add More</Button>

<Button variant="danger" className="btn-sm my-3 mx-2" onClick={
  ()=>{
    techSkills.pop()
    setupDate((prev)=>!prev)
  }
  
}> Delete</Button>
  </Form.Group>


<h5> Add your Non Techical Skills</h5>


<Form.Group controlId="techskills" className="my-3">
    {
      nontechSkills.map((elem)=>{
        return (elem)
      })
    }
    <Button variant="success" className="btn-sm my-2" onClick={
    ()=>{
      nontechSkills.push(skillelem)
      setupDate((prev)=>!prev)
    }
  }>Add More</Button>

<Button variant="danger" className="btn-sm my-3 mx-2" onClick={
  ()=>{
    nontechSkills.pop()
    setupDate((prev)=>!prev)
  }
  
}> Delete</Button>
  </Form.Group>

  <Form.Group controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

</Form>

<p>Note : Please Fill your details very Carefully</p>
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