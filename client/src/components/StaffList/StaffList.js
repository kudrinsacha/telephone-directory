import React from 'react'
import { useState, useEffect } from 'react'
import { getToken, getExtensions } from '../../http/http'
import './StaffList.css'

const StaffList = () => {

    const [list, setList] = useState('')

    useEffect(() => {
    //   getToken()
      getExtensions(setList)
    }, [])
  

  return (
    <div className='staff-list'>
     {list.length > 1 &&
        list.map(item => {
        return <div className='staff-list-item' key = {item.extensionId}> 
        <div className='staff-list-item-name'>
        {item.coreDevice.description} - {item.extensionId}
        </div>
        </div>
     })
     }
    </div>
  )
}

export default StaffList