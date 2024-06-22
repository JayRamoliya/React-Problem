import React from 'react'
import { useState } from 'react'

const DataTable = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: ''
    })

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    console.log(formData);
    return (
        <div className='container'>

            <div add-container>

                <div className='info-container'>
                    <input type="text" name='name' value={formData.name} placeholder='Name' onChange={handleInputChange} />
                    <input type="text" name='gender' value={FormData.gender} placeholder='Gender' onChange={handleInputChange} />
                    <input type="text" name='age' value={FormData.age} placeholder='Age' onChange={handleInputChange} />
                </div>

                <button className='add'>ADD</button>
            </div>

            <div className='search-table-container'>
                
                <input type="text" value={""} placeholder='Search by name' onChange={() => { }} className='search-input' />

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>jay</td>
                        <td>jay</td>
                        <td>jay</td>
                        <td>
                            <button className='edit'>Edit</button>
                            <button className='delete'>Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className='paginations'></div>
            </div>
        </div>
    )
}

export default DataTable