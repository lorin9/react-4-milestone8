import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utilities/localStorage";
const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const parseId = parseInt(id)
    const job =jobs.find(job => job.id === parseId)
    console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(parseId)
        toast('you have applied successfully')
    }
    return (
        <div>
         
            <div className="grid gap-4 md:grid-cols-4 mb-12">
               <div className="border md:col-span-3 p-12 rounded-lg">
               <h2 className="text-4xl my-4">Details Coming Here</h2>
               <hr />
               <p className="pb-4"><span className="font-bold">Job Description</span>{job.job_description}</p>
               <p className="pb-4"><span className="font-bold">Job Responsibility</span>{job.job_responsibility}</p>
               <h4 className="font-bold">Educational Requirement</h4>
               <p className="pb-4">{job.educational_requirements}</p>
               <h4 className="font-bold">Experience</h4>
               <p>{job.experiences}</p>
               </div>
               <div className="border p-8 rounded-lg">
        <h2 className="text-2xl pb-4">Side Things</h2>
        <hr />
     <div className="mb-4">
     <p ><span className="font-bold ">Salary: </span>{job.salary}(per month)</p>
     </div>
       <div className="mb-4">
       <p ><span className="font-bold mb-4">Job title: </span>{job.job_title}(per month)</p>
       </div>

        <p ><span className="font-bold pb-2">Contact Name</span></p>
<hr />
        <button onClick={handleApplyJob} className="btn btn-primary w-full mt-10">Apply Now</button>
               </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;