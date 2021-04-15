import ApplicationStatusCard from '../ApplicationStatusCard';

let CompanyDetails = [
    {
        company:'abc',
        status:'Accepted',
        email: 'abc@gmail.com',
        contact:'1234567890',

    },
    {
        company:'abc',
        status:'Rejected',
        email: 'abc@gmail.com',
        contact:'1234567890',

    },
    {
        company:'abc',
        status:'In Review',
        email: 'abc@gmail.com',
        contact:'1234567890',

    }
]


const ApplicationStatus = ()=>{
    return (
        <>
        
        <div className="container bg-dark text-light py-5 my-5">
            <h1>You Have Applied for Following Companies:</h1>
        {
            CompanyDetails.map((elem)=>{
                return (
                <ApplicationStatusCard company={elem.company} status={elem.status} email={elem.email} contact={elem.contact}/>
                )
            })
        }
      
          
      
      </div>
        </>
    )
}

export default ApplicationStatus;