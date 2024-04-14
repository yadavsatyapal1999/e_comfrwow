import React, { useState } from 'react';
import axios from 'axios';
import "./add.css";
import Loader from "../Loader/Loader";

const AddProductForm = () => {
    const[loader,SetLoader] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        details: '',
        image: '',
        stock: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const web = "https://e-combewow.onrender.com"
SetLoader(true)
        try {
            const response = await axios.post(
                `${web}/addproduct`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response.data);
            window.alert(response.data.message)
            SetLoader(false)
            setFormData({
                name: '',
                price: '',
                details: '',
                image: '',
                stock: '',
                category: ''
            })
        } catch (error) {
            console.error(error);
            window.alert("Error while saving")
            SetLoader(false)
        }
    };

    return <div>
{loader ? <Loader/> : <form className="add-product-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="details">Details:</label>
                <input type="text" id="details" name="details" value={formData.details} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <button type="submit">Add Product</button>
        </form>}
    </div>
        
    
};

export default AddProductForm;
