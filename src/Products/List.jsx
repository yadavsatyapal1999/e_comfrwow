import { useState } from "react";
import "./list.css"

export default function List() {  // Render total  number of products
  const [data, setData] = useState([1, 2, 4, 5]); 

  return (
    <div >
      {data.length !=0 ? <div  id="list"> {data.map((value, index) => {
        return <div id="listouter" key={index}>
            <div className="itemno">
              <span># {index+1}</span>
            </div>
          <div>
          <img id="listimg" src="https://m.media-amazon.com/images/I/71ZjB9xO1QL._SX569_.jpg" alt="unable to load image please refresh"/>
           
          </div>
           <div className="detail" >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, quam eget ullamcorper lacinia, ex elit posuere lacus, id efficitur diam leo eget sapien. Nullam sodales justo vel ultricies consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer condimentum vehicula ultricies. Ut non ante id dui efficitur lacinia eget non nunc. Integer sed bibendum lacus
           
            </div>
 <div className="price" > $100</div>
        </div>; 
      })}</div> : <div className="noproduct"> No product listed yet </div>}
    </div>
  );
}
