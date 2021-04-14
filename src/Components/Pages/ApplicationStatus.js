import ApplicationStatusCard from '../ApplicationStatusCard';

const ApplicationStatus = ()=>{
    return (
        <>
        
        <div className="container bg-dark text-light py-5 my-5">
            <h1>You Have Applied for Following Companies:</h1>
            
      <ApplicationStatusCard/>
      <ApplicationStatusCard/>
      <ApplicationStatusCard/>
          
      
      </div>
        </>
    )
}

export default ApplicationStatus;