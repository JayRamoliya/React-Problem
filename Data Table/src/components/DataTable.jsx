import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const DataTable = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: ''
    })
    const [data, setData] = useState([])
    const [editid, setEditId] = useState(false)
    const outsideclick = useRef(false)

    useEffect(() => {
        if (!editid) return;

        let selecteditem = document.querySelectorAll(`[id='${editid}']`)
        selecteditem[0].focus()

    }, [editid])

    useEffect(() => {
        const handelclickoutside = (event) => {
            if (outsideclick.current && !outsideclick.current.contains(event.target)) {
                setEditId(false)
            }
        }
        document.addEventListener('click', handelclickoutside)
        return () => {
            document.removeEventListener('click',handelclickoutside)
        }
    }, [])
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    // console.log(formData);

    const handleAddClick = () => {
        if (formData.name && formData.age && formData.gender) {
            const newitem = {
                id: Date.now(),
                name: formData.name,
                gender: formData.gender,
                age: formData.age
            }
            setData([...data, newitem])
            setFormData({
                name: '',
                gender: '',
                age: ''
            })
        }
    }

    // console.log(data);

    const handleDelete = (id) => {
        const updatelist = data.filter((item) => item.id !== id)
        setData(updatelist)
    }


    const handleEdit = (id, updateData) => {
        if (!editid || editid !== id) {
            return;
        }

        const updatelist = data.map((item) =>
            item.id === id ? { ...item, ...updateData } : item
        )
        setData(updatelist)
    }
    console.log(data);

    return (
        <div className='container'>

            <div add-container>

                <div className='info-container'>
                    <input type="text" name='name' value={formData.name} placeholder='Name' onChange={handleInputChange} />
                    <input type="text" name='gender' value={FormData.gender} placeholder='Gender' onChange={handleInputChange} />
                    <input type="text" name='age' value={FormData.age} placeholder='Age' onChange={handleInputChange} />
                </div>

                <button className='add' onClick={handleAddClick}>ADD</button>
            </div>

            <div className='search-table-container'>

                <input type="text" value={""} placeholder='Search by name' onChange={() => { }} className='search-input' />

                <table ref={outsideclick}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td
                                        id={item.id}
                                        contentEditable={editid === item.id}
                                        onBlur={(e) => handleEdit(item.id, { name: e.target.innerText })}
                                    >{item.name}</td>

                                    <td
                                        id={item.id}
                                        contentEditable={editid === item.id}
                                        onBlur={(e) => handleEdit(item.id, { gender: e.target.innerText })}
                                    >{item.gender}</td>

                                    <td
                                        id={item.id}
                                        contentEditable={editid === item.id}
                                        onBlur={(e) => handleEdit(item.id, { age: e.target.innerText })}
                                    >{item.age}</td>

                                    <td className='actions'>
                                        <button className='edit' onClick={() => setEditId(item.id)}>Edit</button>
                                        <button className='delete' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className='paginations'></div>
            </div>
        </div>
    )
}

export default DataTable