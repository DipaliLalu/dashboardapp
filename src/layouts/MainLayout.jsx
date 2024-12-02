import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

function MainLayout() {
  return (
        <div className='flex flex-col w-full box-border'>
        <Header />
      <div className='flex h-full w-full'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
