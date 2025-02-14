import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen w-full box-border'>
      <Header />
      <div className='flex flex-1 w-full'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
