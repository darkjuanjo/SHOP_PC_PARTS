import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_INVENTORY } from '../../utils/mutations';

function AddInventory() {
    const [formState, setFormState] = useState({ description: '', name: '', price: '', stock:'', category: '', image: '' });
    const { description, name, price, category, image} = formState;
    const [add_to_Inventory, { error }] = useMutation(ADD_INVENTORY);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
       
        const stock = parseInt(formState.stock);
        try {
            const { data } = await add_to_Inventory({
                variables: { description, name, price, category, stock, image}
            });
        } catch (e) {
            console.error(error);
        }
    }
    
    return (
        <div>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor,
                just as class had to be changed to className previously. */}
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="my-2" name="description" onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="my-2" name="name" onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" className="my-2" name="price" onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" className="my-2" name="stock" onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" className="my-2" name="category" onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="text" className="my-2" name="image" onBlur={handleChange} />
                </div>
                <button type="button" onClick={handleSubmit} >Add item</button>
            </form>
        </div>
    )
}

export default AddInventory;