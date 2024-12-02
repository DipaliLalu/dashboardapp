function Home() {
    return (
      <div className="w-full transition-all p-5 dark:bg-black dark:text-slate-300" style={{height:'88vh'}}>
        <h1 className="font-bold text-2xl">Home</h1>
        <div>{process.env.REACT_APP_DATA}</div>
      </div>
    )
  }
  
  export default Home
  