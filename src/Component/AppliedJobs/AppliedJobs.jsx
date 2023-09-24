import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import {CiLocationOn,} from 'react-icons/ci'
import {AiOutlineDollarCircle} from 'react-icons/ai'

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob,setDisplayJob] = useState([])

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJob(jobApplied);
      setDisplayJob(jobApplied)
    }
  }, [jobs]);


  const handleJobFilter = filter =>{
       if (filter === 'All') {
           setDisplayJob(appliedJob)
       }else if (filter === 'Remote') {
             const remoteJob = appliedJob.filter(remote => remote.job_type === 'Remote') 
             setDisplayJob(remoteJob) 
       }else if (filter === 'Full Time') {
            const fullTimeJob = appliedJob.filter(fullTime => fullTime.job_type === 'Full Time') 
            setDisplayJob(fullTimeJob) 
       }
  }

  return (
    <div>
     <div className="flex justify-center my-5 gap-5">
      <button className="border border-blue-200 text-blue-500 px-5 py-2 hover:bg-blue-500 hover:text-white rounded-md" onClick={()=> handleJobFilter('All')} > All</button>
      <button className="border border-blue-200 text-blue-500 px-5 py-2 hover:bg-blue-500 hover:text-white rounded-md" onClick={()=> handleJobFilter('Remote')} >Remote</button>
      <button className="border border-blue-200 text-blue-500 px-5 py-2 hover:bg-blue-500 hover:text-white rounded-md" onClick={()=> handleJobFilter('Full Time')} >Full Time</button>
     </div>

      {displayJob.map((applyJob) => (
        <div>
          <div className="flex items-center justify-between border border-gray-200 mb-4 p-5">
            <div className="flex gap-5">
              <div className="bg-gray-200 p-12">
                <img className="w-32 h-16" src={applyJob.logo} />
              </div>
              <div>
                <h3 className="font-bold text-xl">{applyJob.job_title}</h3>
                <h3 className="text-lg my-2">{applyJob.company_name}</h3>
                <button className='my-3 border text-blue-500 border-blue-200 px-5 py-2 rounded-md'>{applyJob.job_type}</button>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <CiLocationOn></CiLocationOn>
                    <p>{applyJob.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineDollarCircle></AiOutlineDollarCircle>
                    <p> {applyJob.salary}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="mt-3 bg-blue-400 font-semibold text-white rounded-md px-5 py-2">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
