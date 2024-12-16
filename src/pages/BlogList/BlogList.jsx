import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
import Card from "../../UI/Card/Card";
import { useEffect, useState } from "react";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";
import { FaChevronRight } from "react-icons/fa";

function BlogList() {
    // const userData = JSON.parse(localStorage.getItem('isAuthenticate'));
    // const name = userData.user;
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem("blogData")) || []
    );
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 5000);
    }, []);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 6;
    const totalPages = Math.ceil(list.length / itemPerPage);
    const startIndex = (currentPage - 1) * itemPerPage;
    const currentItems = list.slice(startIndex, startIndex + itemPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const handleDelete = (deletedBlog) => {
        const updatedList = list.filter((blog) => blog.title !== deletedBlog.title);
        setList(updatedList);
        localStorage.setItem("blogData", JSON.stringify(updatedList));
    };

    return (
        <div className="p-6 flex flex-col gap-6 transition-all dark:bg-black dark:text-slate-300 w-full min-h-screen">
            <div className="flex items-center gap-2 text-sm">
                <span>App</span><span><FaAngleRight /></span><span>Blog</span><span><FaAngleRight /></span><span>List</span>
            </div>
            <div className="text-2xl font-semibold">Our Blogs</div>
            {
                isLoading ? <SkeletonLoader /> :list?<div className="grid lg:grid-cols-2 gap-10 w-full grid-cols-1">
                    {
                        currentItems.map((curEle, i) => {
                            return (
                                <Card curEle={curEle} key={i} onDelete={handleDelete} />
                            )
                        })
                    }

                </div>:null
            }

            <div className="flex gap-5 justify-center items-center">
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className=" p-2 rounded-2xl border hover:bg-white hover:text-black shadow">
                    <FaChevronLeft/>
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}

                    >
                        {i + 1}
                    </button>
                ))}
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="border p-2  rounded-2xl hover:bg-white hover:text-black shadow">
                  <FaChevronRight/>
                </button>
            </div>

        </div>
    )
}

export default BlogList
