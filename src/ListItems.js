import React,{useState,useEffect} from "react";
import axios from "axios";



function ListItems(){
    const [farmItems, setFarmItems] = useState([]);
    
    useEffect(() => {
        axios
          .get("https://farmers-fresh-api.herokuapp.com/api/produce/")
          .then(res => {
            console.log("App.js, GET PRODUCE RES: ", res);
            setFarmItems(res.data);
            console.log(res.data)
          })
          .catch(err => console.log(err));
      }, []);
      console.log("App.js, farmItems: ", farmItems);



return (
    <React.Fragment>
    {farmItems.map(item=>(
     <img  src={item.produceImgURL}/>
      ))}
      </React.Fragment>
)

}

export default ListItems;