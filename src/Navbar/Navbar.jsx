
import React from 'react';
import { RiMenuFoldLine } from 'react-icons/ri';   // For menu Icon
import { RiSearchLine } from 'react-icons/ri';  // For Search Icon
import { AiOutlineShoppingCart } from 'react-icons/ai';  // For Cart

export default function Navbar(){
    

    return <div id="outerNav">
        
            <div>
                <RiMenuFoldLine   size={30}/>
            </div>
            <div>
            <div> <input type="text" /> 
            <RiSearchLine size={15} />
             </div>
            
            </div>
            <div>
                < AiOutlineShoppingCart   size={30} />
            </div>
        </div>
        
    
}