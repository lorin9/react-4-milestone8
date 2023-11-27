import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilities/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    useEffect(() =>{
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0){
        //   const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))  
        let jobsApplied =[]
        for(const id of storedJobIds){
            const job = jobs.find(job => job.id ===id)
            if(job){
                jobsApplied.push(job)
            }
        }
          setAppliedJobs(jobsApplied)
          setDisplayJobs(jobsApplied)
        }
    },[jobs])
    
    const handleJobsFilter = filter =>{
        if(filter === 'all'){
           setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite ==='Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === "onsite"){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }
    return (
        <div>
            <h2 className="text-2xl font-bold">jobs i have applied for:{appliedJobs.length}</h2>
            <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
    <li  onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
    <li  onClick={() => handleJobsFilter('onsite')}><a>On Site</a></li>
  </ul>
</details>
            {
                displayJobs.map(job =><li key={job.id}>
                    <span>{job.job_title}{job.company_name}</span>
                </li>)
            }
        </div>
    );
};

export default AppliedJobs;
