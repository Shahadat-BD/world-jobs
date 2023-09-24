import React from 'react';
import {CiLocationOn,} from 'react-icons/ci'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
    const {logo,job_title,company_name,job_type,location,salary,id} = job
    return (
        <div>
             <div className='border rounded-lg p-8'>
                   <img className='w-40 h-12' src={logo}/>
                    <h3 className='text-2xl my-2'>{job_title}</h3>
                    <p className='text-lg'>{company_name}</p>
                    <button className='my-2 border text-blue-500 border-blue-200 px-5 py-2 rounded-md'>{job_type}</button>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-2'>
                            <CiLocationOn></CiLocationOn> 
                            <p>{location}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                             <AiOutlineDollarCircle></AiOutlineDollarCircle>
                             <p> {salary}</p>
                        </div>
                    </div>
                    <Link to={`/job-details/${id}`}>
                    <button className='mt-3 bg-blue-400 font-semibold text-white rounded-md px-5 py-2'>View Details</button>
                    </Link>
             </div>
        </div>
    );
};

export default Jobs;