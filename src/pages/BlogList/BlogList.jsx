import { FaAngleRight } from "react-icons/fa6";
import Card from "../../UI/Card/Card";
import { useState } from "react";

function BlogList() {
    // const userData = JSON.parse(localStorage.getItem('isAuthenticate'));
    // const name = userData.user;
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem("blogData")) || []
    );
    
    const handleDelete = (deletedBlog) => {
        const updatedList = list.filter((blog) => blog.title !== deletedBlog.title);
        setList(updatedList); 
        localStorage.setItem("blogData", JSON.stringify(updatedList)); 
    };
    return (
        <div className="p-6 flex flex-col gap-6 transition-all dark:bg-black dark:text-slate-300  w-full  ">
            <div className="flex items-center gap-2 text-sm">
                <span>App</span><span><FaAngleRight /></span><span>Blog</span><span><FaAngleRight /></span><span>List</span>
            </div>
            <div className="text-2xl font-semibold">Our Blogs</div>
            <div className="grid md:grid-cols-2 gap-10 w-full grid-cols-1">
                {
                    list.map((curEle,i) => {
                        return (
                          <Card curEle={curEle} key={i} onDelete={handleDelete}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default BlogList
