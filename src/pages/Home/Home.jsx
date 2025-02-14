import { Link } from "react-router-dom"

function Home() {
    return (
      <div className="w-full transition-all p-5 dark:bg-black dark:text-slate-300" style={{height:'88vh'}}>
        <div className="flex justify-center flex-col items-center gap-6">
        <h1 className="font-bold text-3xl">Welcome Back, Blogger!</h1>
        <div>Manage your posts, drafts, and settings here.</div>
        <div className="flex gap-4">
         <Link to={"/createblog"}><button className="p-2 font-semibold bg-slate-800 text-white rounded">Create new Blog</button></Link>
          {/* <button className="p-2 font-semibold bg-slate-800 text-white rounded">View all Blog</button> */}
          </div>
        </div>
      </div>
     
    )
  }
  
  export default Home
  