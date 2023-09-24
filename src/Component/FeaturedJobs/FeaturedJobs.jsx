import React, { useEffect, useState } from 'react';
import Jobs from '../AppliedJobs/Jobs/Jobs';

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([])
    const [jobLength,setJobLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])


    return (
        <div className='my-20'>
            <div className='text-center my-5'>
              <h1 className='text-3xl font-bold mb-2'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
          {
            jobs.slice(0,jobLength).map(job=> <Jobs key={job.id} job={job}></Jobs>)
           }
          </div>
          <div className='text-center'>
            {
               jobLength === jobs.length ?
               ''
               :
               <button onClick={()=> setJobLength(jobs.length)} className='text-white bg-blue-400 px-5 py-2 rounded-lg my-8'>show all</button>
            }
          </div>
        </div>
    );
};

export default FeaturedJobs;