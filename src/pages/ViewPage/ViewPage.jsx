import React from 'react'
import { FaAngleRight } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
// import DOMPurify from "dompurify";
import MarkdownRenderer from '../../components/MarkdownRenderer/MarkdownRenderer';
function ViewPage() {
    const location = useLocation();
    const curEle = location.state.data;
    // console.log(curEle)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <div className={"p-6 flex flex-col gap-6 transition-all dark:bg-black dark:text-slate-300 w-full"}>
            <div className="flex items-center gap-2 text-sm">
                <span>App</span><span><FaAngleRight /></span><span>Blog</span><span><FaAngleRight /></span><span>View</span>
            </div>
            <div className="text-lg font-semibold">View a Blog</div>
            <div className="flex mt-4 flex-col gap-5 w-full justify-center ">
                <h1 className='uppercase text-2xl font-semibold'>{curEle.title}</h1>
                <img src={curEle.fileupload} alt="BlogImage" className='w-full object-contain rounded-xl' />
                <div>
                    <div>{curEle.description}</div>
                </div>
                <div>
                {/* // dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(curEle.textEditor) }}> */}
                <MarkdownRenderer markdownContent={curEle.textEditor} />
                </div>
              
                <div className='flex flex-col gap-3'>
                    <hr />
                    <div className='flex gap-5 flex-wrap'>{curEle.taglist.map((tag,i)=>{
                        // console.log(tag)
                         return(
                            <div key={i} className='dark:bg-slate-800 dark:text-slate-300 px-2 py-1 rounded-lg dark:hover:bg-slate-600 bg-slate-200'>
                                {tag}
                            </div>
                         )   
                    })}</div>
                </div>
            </div>
            <div className='text-right'>
                <button className='p-3 rounded-lg bg-blue-600 text-white w-1/4' onClick={handleClick}>Go Back</button>
            </div>
        </div>
    )
}

export default ViewPage
