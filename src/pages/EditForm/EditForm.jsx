import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom';
import Form from "../../UI/Form";

function EditForm() {
  const location = useLocation(); 
  const curEle = location.state?.data; 
// console.log(curEle)
  return (
    <div className={"p-6 flex flex-col gap-6 transition-all dark:bg-black dark:text-slate-300 w-full"}>
            <div className="flex items-center gap-2 text-sm">
                <span>App</span><span><FaAngleRight /></span><span>Blog</span><span><FaAngleRight /></span><span>Edit</span>
            </div>
            <div className="text-2xl font-semibold">Edit a Blog</div>
            <div className="flex md:justify-between mt-4 flex-col md:flex-row">
                <div className="md:basis-1/3 w-full">
                    <div className="text-lg font-medium">Details</div>
                    <div className="text-slate-500">Title,short description,image..</div>
                </div>
                <div className="md:basis-1/2 w-full">
                    <Form curData={curEle}/>
                </div>
            </div>
        </div>
  )
}

export default EditForm
