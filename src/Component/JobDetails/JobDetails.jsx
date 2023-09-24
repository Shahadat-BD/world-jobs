import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplied } from '../../Utility/LocalStorage';

const JobDetails = () => {
    const jobInfo = useLoaderData()
    const {id} = useParams()
    const intId = parseInt(id)
    const jobFind = jobInfo.find(job => job.id === intId)
    const {job_description,job_responsibility,educational_requirements,experiences,
           salary,job_title,contact_information
    } = jobFind

   const handleApplyJob = () =>{
          saveJobApplied(intId)
          toast('job apply successfully')
   }

    return (
        <div className='flex my-12'> 
            <div className='w-[65%]'>
                 <h3 className='mb-3'> <span className='text-lg font-bold'>Job Description :</span> {job_description}</h3>
                 <h3 className='mb-3'> <span className='text-lg font-bold'>Job Responsibility :</span> {job_responsibility}</h3>
                 <h1 className='text-lg font-bold my-3'>Educational Requirement </h1>
                 <h3 className='mb-3'> {educational_requirements}</h3>
                 <h1 className='text-lg font-bold my-3'>Experience</h1> 
                 <h3 className='mb-3'>{experiences}</h3>
            </div>
            <div className='flex-1'>
                <div className='bg-blue-100 p-5 mb-3 rounded-lg'>
                  <h1 className='text-lg font-bold'>Job Details</h1>
                  <hr className='font- bg-blue-300 h-0.5 mt-3'/>
                     <h1 className='my-2'> <span className='font-semibold text-lg'>Salary</span> : {salary}</h1>
                     <h1 className='my-2'> <span className='font-semibold text-lg'>Job Title </span> : {job_title}</h1>
                 
                     <hr className='font- bg-blue-300 h-0.5 mt-3'/>
                       
                     <h1 className='text-lg font-bold my-3'>Contact Information</h1>
                     <p className='my-2'> <span className='font-semibold text-lg'> Phone :</span> {contact_information.phone}</p>
                     <p className='my-2'> <span className='font-semibold text-lg'>Email : </span> {contact_information.email}</p>
                     <p className='my-2'> <span className='font-semibold text-lg'> Address :</span> {contact_information.address}</p>

                </div>
                <button onClick={handleApplyJob} className='text-white rounded-lg bg-blue-400 w-full py-3 font-semibold'>Apply Now</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default JobDetails;