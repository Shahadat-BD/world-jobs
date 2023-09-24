import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='border-2 rounded-md p-3 text-center'>
                <h1 className='text-red-500 text-3xl'> 404 !</h1>
                <h1 className='text-red-500'>Sorry ! this page is Not found ! <br /> please, try another page</h1>
                <Link to={'/'}> 
                    <button className='mt-3 bg-black text-white rounded-md px-5 py-2'>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorMessage;