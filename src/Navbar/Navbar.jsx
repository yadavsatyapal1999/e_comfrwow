
import React, { useState } from 'react';
import { RiMenuFoldLine } from 'react-icons/ri';   // For menu Icon
import { RiSearchLine } from 'react-icons/ri';  // For Search Icon
import { AiOutlineShoppingCart } from 'react-icons/ai';  // For Cart
import "./navbar.css"
import Loader from "../Loader/Loader"
import axios from 'axios';

export default function Navbar() {

    const [navbar, Setnavbar] = useState(false)
    const [loader, Setloader] = useState(false);
    const [input, Setinput] = useState("");
    return <div>
        {loader ? <Loader /> : <div id="outerNav">

            <div className='menu' onClick={() => {
                Setnavbar(!navbar)
            }} >
                <RiMenuFoldLine size={50} />
            </div>
            <div className='inputandsearch'>
                <div className='input'> <input type="text" onChange={(e) => {
                    Setinput(e.target.value);
                }} />

                </div>
                <div className='search' onClick={async () => {
                    const web = "https://e-combewow.onrender.com/search"
                   if(input.length !=0){
                    Setloader(true);
                    try {
                        const response = await axios.get(`${web}?query=${input}`)
                        console.log(response);
                        Setloader(false);
                    }
                    catch (err) {
                        console.log(err);
                        Setloader(false);
                        window.alert("error")
                    }
                   }else{
                    return
                   }
                }} ><RiSearchLine size={50} /></div>

            </div>
            <div className='cart' >< AiOutlineShoppingCart size={50} color='white' /></div>
        </div>
        }
    </div>
}