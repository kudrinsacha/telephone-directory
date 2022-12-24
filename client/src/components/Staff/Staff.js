import React from 'react';
import './Staff.css'

const Staff = ({item}) => {
    return (
        <div className='staff'>
            <div className='staff__item'>
                <div className='staff__item__name'>
                    {item.coreDevice.description}
                </div>
                <div className='staff__item__id'>
                    {item.extensionId}
                </div>
            </div>
        </div>
    );
};

export default Staff;