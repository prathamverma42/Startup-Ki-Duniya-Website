import { Card, Button } from 'react-bootstrap';


const ApplicationStatusCard = (props) => {

  let color = 'success';

  if (props.status === 'Accepted')
    color = 'success';
  else if (props.status === 'Rejected')
    color = 'danger'
  else
    color = 'warning'

  return (
    <>
      <Card className={`bg-${color} mx-5 my-5 text-light`}>
        <Card.Body>
          <Card.Title ><h3 className="font-weight-bold">Company Name : {props.company}</h3></Card.Title>
          <Card.Subtitle className="font-weight-bold my-3"><h4 className="font-weight-bold">Application Status: {props.status}</h4></Card.Subtitle>
          <Card.Text className="font-weight-bolder">
            <h4 className="font-weight-bold">Job Title : {props.title}</h4>
            <h4 className="font-weight-bold">
              You may contact the following Records for More Details:
        </h4>
            <h5> Email Id : {props.email}</h5>
            <h5> Phone Number : {props.contact}</h5>
          </Card.Text>
          <Button variant="danger" className="btn btn-lg" onClick={
            () => {
              props.rem(props.id)
            }
          }>Withdraw your Application</Button>
        </Card.Body>
      </Card>
    </>
  )

}

export default ApplicationStatusCard;