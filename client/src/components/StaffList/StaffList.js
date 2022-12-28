import React from 'react'
import {useState, useEffect} from 'react'
import {getToken, getExtensions} from '../../api/api'
import Staff from '../Staff/Staff'
import Pagination from "../Pagination/Pagination"
import './StaffList.css'
import {logDOM} from "@testing-library/react";

const StaffList = () => {

    const [list, setList] = useState('')
    const [isToken, setIsToken] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [staffPerPage] = useState(50)
    const [search, setSearch] = useState('')
    const [filteredList, setFilteredList] = useState('')

    const lastStaffIndex = currentPage * staffPerPage
    const firstStaffIndex = lastStaffIndex - staffPerPage
    const currentList = list.slice(firstStaffIndex, lastStaffIndex)

    useEffect(() => {
        getToken(setIsToken)
    }, [])

    useEffect(() => {
        getExtensions(setList)
    }, [isToken])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const filterList = (value) => {
        let newList;
        newList = list.filter((item) => item.coreDevice.description.toLowerCase().includes(value.toLowerCase()))
        return newList
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        let newList = filterList(e.target.value)
        setFilteredList(newList)
    }

    return (
        <div>
            <div className='staff__list'>

                <div className='staff__list__search'>
                    <input value={search}
                           onChange={handleChange}
                           placeholder='Фамилия'
                    />
                    <label className='staff__list__search__label'>Фамилия</label>
                </div>

                <div className='staff__list__title'>
                    <div>
                        Фамилия
                    </div>
                    <div>
                        Номер
                    </div>
                </div>

                {
                    list.length > 1 && !search ?
                        currentList.map(item => {
                            return <Staff key={item.extensionId} item={item}/>
                        }) : null
                }
                {
                    search ?
                    filteredList.map(item => {
                        return <Staff key={item.extensionId} item={item}/>
                    }) : null
                }

            </div>
            <Pagination
                staffPerPage={staffPerPage}
                listLength={list.length}
                paginate={paginate}
                currentPage={currentPage}
                search = {search}
            />
        </div>
    )
}

export default StaffList