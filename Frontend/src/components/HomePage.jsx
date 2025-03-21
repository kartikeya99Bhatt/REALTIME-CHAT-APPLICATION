import React from 'react'
import SideBar from './SideBar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter'>
      <SideBar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage
