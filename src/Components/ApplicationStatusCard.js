import {Card} from 'react-bootstrap';


const ApplicationStatusCard = ()=>{

    
    return (
        <>

           
<Card className="bg-success mx-5 my-5 text-light">
        <Card.Body>
          <Card.Title ><h3 className="font-weight-bold">Company Name : XYZ</h3></Card.Title>
          <Card.Subtitle className="font-weight-bold my-3"><h4 className="font-weight-bold">Application Status: Accepted</h4></Card.Subtitle>
          <Card.Text className="font-weight-bolder">
        <h4 className="font-weight-bold">
            You may contact the following Records for More Details: 
        </h4>
        <h5> Email Id : abc@gmail.com</h5>
        <h5> Phone Number : 1234567890</h5>
          </Card.Text>
        </Card.Body>
      </Card>
        </>
    )

}

export default ApplicationStatusCard;