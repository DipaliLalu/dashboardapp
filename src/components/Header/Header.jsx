import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  // const [menuShow, setMenuShow] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  const handleLogout = () => {
    localStorage.setItem('isAuthenticate', false);
    navigate('/login')
  }
  return (
    <div className="border-b w-full">
      <div className="bg-white text-slate-600 dark:bg-black dark:text-slate-200 py-4 px-6 flex justify-between  transition-all relative w-full">
        <div className="w-1/12 flex justify-start items-center gap-2">
          <img src="/bloglogo.png" alt="logoimage" className="md:w-1/3 w-full" />
          <span className="font-bold md:text-xl">BLOG</span>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setIsDarkMode((prevMode) => !prevMode)}> {isDarkMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}</button>
          <button className="dark:bg-white dark:text-black rounded-2xl px-2 flex gap-2 bg-blue-600 text-white items-center font-semibold" onClick={handleLogout}>
            Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Header
