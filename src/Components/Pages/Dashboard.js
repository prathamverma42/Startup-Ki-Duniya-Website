import {Table,ProgressBar,Button} from 'react-bootstrap';
import {useState} from 'react';
import UserProfileModal from '../UserProfileModal';

let name=""
let field=""
let description=""
let techSkills = []
let nontechSkills = []
let education = []

let programmingLanguages =[]


const Dashboard = ()=>{

    // eslint-disable-next-line
    const [updatePage,setUpdatePage] = useState(true);

    function updateDashBoard(newname,newfield,newDescription,newTechSkills,newnontechSkills,newEducation,newProgrammingLanguages)
    {
      name = newname
      field = newfield
      description = newDescription
      techSkills = newTechSkills
      nontechSkills = newnontechSkills
      education = newEducation
      programmingLanguages = newProgrammingLanguages
      setUpdatePage((prev)=>!prev)
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
        <UserProfileModal update={updateDashBoard} show={show} handleClose={handleClose}/>
        <div className="container bg-dark text-light my-3 py-3">
            <h1 className="text-center my-3">Manage your Profile/Resume</h1>

            <h3>Name : {name} </h3>
            <h3 className="my-3">Field of Expertise : {field}</h3>
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
  {
    education.map((elem)=>{
      return (
        <tr>
          <td>{elem.Year}</td>
          <td>{elem.Exam}</td>
          <td>{elem.Board}</td>
          <td>{elem.Marks}</td>
        </tr>
      )
    })
  }
  
  </tbody>
</Table>

<h2>Description : </h2> 
<p className="h5">{description}</p>

<h2>Skill Set:</h2>

<h3>Programming Languages: </h3>
<ol className = "h4 py-3" >
{
  programmingLanguages.map((elem)=>{
    return <li className="my-2">{elem.language}<ProgressBar variant="success" animated now={elem.rating} className="my-2"/></li>

  })
}
</ol>


<h2> Other Techincal Skills:</h2>
<ol className = "h4 py-3" > 
  {
   techSkills.map((elem)=>{
     return <li>{elem}</li>
   })
  }
   
</ol>

<h2> Other Non Techincal Skills:</h2>
<ol className = "h4 py-3" >
{
   nontechSkills.map((elem)=>{
     return <li>{elem}</li>
   })
  }
</ol>



<Button variant="info btn-lg" className="text-dark" onClick={()=>{
    setShow(true);
}}>Click Here to make Changes</Button>
</div>
        </>
    )
}

export default Dashboard;