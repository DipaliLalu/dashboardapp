import { FaAngleRight } from "react-icons/fa6";
import Form from "../../UI/Form";

function CreateBlog() {
    return (
        <div className="p-1 md:p-4 flex flex-col gap-4 h-auto transition-all dark:bg-black dark:text-slate-300 w-full overflow-hidden">
            <div className="flex items-center gap-2 text-sm">
                <span>App</span><span><FaAngleRight /></span><span>Blog</span><span><FaAngleRight /></span><span>Create</span>
            </div>
            <div className="text-2xl font-semibold">Create a Blog</div>
            <div className="flex md:justify-between flex-col md:flex-row">
                <div className="md:basis-1/3 w-full">
                    <div className="text-lg font-medium">Details</div>
                    <div className="text-slate-500">Title,short description,image..</div>
                </div>
                <div className="md:basis-1/2 w-full">
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
