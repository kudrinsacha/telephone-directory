import React from 'react'
import { useState, useEffect } from 'react'
import { getToken, getExtensions } from '../../http/http'
import './StaffList.css'

const StaffList = () => {

    const [list, setList] = useState('')
    const [isToken, setIsToken] = useState(false)

    useEffect(() => {
      getToken(setIsToken)
    }, [])

    useEffect(() => {
      getExtensions(setList)
    }, [isToken])
  

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