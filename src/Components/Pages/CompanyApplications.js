import CompanyApplicationCard from '../CompanyApplicationCard';

let CompanyDetails = [
    {
        jobtitle:'SDE',
        noofapplicants:'10',
     

    },
    {
        jobtitle:'SDE',
        noofapplicants:'10',
        

    },
    {
        jobtitle:'SDE',
        noofapplicants:'10',

    }
]


const CompanyApplications = ()=>{
    return (
        <>
        
        <div className="container bg-dark text-light py-5 my-5">
            <h1>You Have Posted the Following Jobs/Internships:</h1>
        {
            CompanyDetails.map((elem)=>{
                return (
                <CompanyApplicationCard jobtitle={elem.jobtitle} noofapplicants={elem.noofapplicants} />
                )
            })
        }
      
          
      
      </div>
        </>
    )
}

export default CompanyApplications;