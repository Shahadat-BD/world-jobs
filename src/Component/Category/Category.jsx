import { key } from 'localforage';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className='my-10'>
           <div className='text-center my-5'>
              <h1 className='text-3xl font-bold mb-2'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>

           <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
              {
               category.map(category => <div key={category.id} className='bg-blue-50 rounded-md p-8 text-center'>
                     
                   <img className='m-auto' src={category.logo}  />
                   <h1 className='text-xl font-bold my-3'>{category.category_name}</h1>
                   <p>{category.availability}</p>
               </div>)
              }
           </div>
        </div>
    );
};

export default Category;