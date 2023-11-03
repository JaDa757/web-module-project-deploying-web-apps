import React, { useState } from 'react'


function NewTodoForm({ addTodo }) {

    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newItem === '') return

        addTodo(newItem)

        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'>New Item</label>
                <input
                    placeholder='Type New Todo'
                    onChange={e => setNewItem(e.target.value)}
                    value={newItem}
                    type='text'
                    id='item'
                />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}
export default NewTodoForm;