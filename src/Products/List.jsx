import { useState } from "react";
import "./list.css";
import { useEffect } from "react";
import axios from "axios";

export default function List() {  // Render total  number of products
  const [data, setData] = useState([]);

  useEffect(() => {

    const web = "https://e-combewow.onrender.com";



    async function fetchdata() {
      try {
        const response = await axios.get(web);
        setData(response.data.data)
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchdata();
  }, [])


  return (
    <div >
      {data.length != 0 ? <div id="list"> {data.map((value, index) => {
        return <div id="listouter" key={index}>
          <div className="itemno">
            <span># {index + 1}</span>
          </div>
          <div>
            <img id="listimg" src={value.image} alt="unable to load image please refresh" />

          </div>
          <div className="detail" >
            {value.detail}
          </div>
          <div className="price" > $ {value.price}</div>
        </div>;
      })}</div> : <div className="noproduct"> No product listed yet </div>}
    </div>
  );
}
