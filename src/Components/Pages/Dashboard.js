import {Table,ProgressBar,Button} from 'react-bootstrap';
import {useState} from 'react';
import UserProfileModal from '../UserProfileModal';

const Dashboard = ()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    return (
        <>
        <UserProfileModal show={show} handleClose={handleClose}/>
        <div className="container bg-dark text-light my-3 py-3">
            <h1 className="text-center my-3">Manage your Profile/Resume</h1>

            <h3>Name : ABC </h3>
            <h3 className="my-3">Field of Expertise : Computer Science</h3>
            <h2> Education </h2>

    <Table striped bordered hover variant="light" className="table-responsive-md ">
  <thead>
    <tr>
      <th>Year</th>
      <th>Degree/Examination</th>
      <th>Institution/Board</th>
      <th>CGPA/%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2020</td>
      <td>Class X Board</td>
      <td>CBSE</td>
      <td>92%</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>Class X Board</td>
      <td>CBSE</td>
      <td>92%</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>Class X Board</td>
      <td>CBSE</td>
      <td>92%</td>
    </tr>
  </tbody>
</Table>

<h2>Description : </h2> 
<p className="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia dolores mollitia totam dignissimos aperiam natus, quisquam aliquid dolorem voluptatem sed ex laboriosam tempora? Nobis adipisci eius veniam minima dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus nam molestiae? Fugit autem molestiae qui natus! Dolor magnam modi, id suscipit illum cum, voluptates nam in quo, quisquam rerum?</p>

<h2>Skill Set:</h2>

<h3>Programming Languages: </h3>
<ol className = "h4 py-3" >
<li className="my-2">C++ :<ProgressBar variant="success" animated now={60} className="my-2"/></li>
<li className="my-2">Python :<ProgressBar variant="danger" animated now={60} className="my-2"/></li>
<li className="my-2">JS :<ProgressBar variant="warning" animated now={60} className="my-2"/></li>
<li className="my-2">Java :<ProgressBar variant="primary" animated now={60} className="my-2"/></li>
</ol>


<h2> Other Techincal Skills:</h2>
<ol className = "h4 py-3" >
   <li>Docker</li> 
   <li>Android App Developmet</li>
   <li>Web Development</li>
</ol>

<h2> Other Non Techincal Skills:</h2>
<ol className = "h4 py-3" >
   <li>Video Editing</li> 
   <li>Good Negotiation Skills</li>
   <li>Good Mediator</li>
</ol>



<Button variant="info btn-lg" className="text-dark" onClick={()=>{
    setShow(true);
}}>Click Here to make Changes</Button>
</div>
        </>
    )
}

export default Dashboard;