import { useState } from "react"
import "./cart.css";


export default function Cart(){
const[cart,setCart] = useState([1,2,3,4,5,6])
    return <div >
{cart.length !=0 ? <div className="list">
    {cart.map((data,index)=>{
        return <div className="cartouter"  key={index}> 
<div className="name">Name</div>
<div >
    <img className="listimg" src="https://images-eu.ssl-images-amazon.com/images/I/61qZXVuSB9L._AC_UL450_SR450,320_.jpg" alt="please refresh page"/>
</div>
<div className="detail">
    Detail
</div>
<div className="price">
 $ 200
</div>
<div >
    <button className="remove">Remove from Cart</button>
    </div>
        </div>
    })}
     </div> : <div classname="nocart">
    No Data In Cart
    </div>}
    </div>
}