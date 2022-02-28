import React , {useState} from "react";
import { FaSistrix , FaRandom } from "react-icons/fa";
import Image from "./Image";
import "./searchBar.css";

export default function SearchBar(){
      const [value , setValue]=useState("");
      const [result,setResult]=useState(null);
      const [loading , setLoading] = useState();
      function fet(){
        if(!value)return;
        async function fetchdata(){
          const resp=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
          const data= await resp.json();
          const requireddata= data.meals;
          setResult(requireddata);
        }
        if(!fetchdata){
           return setLoading("loading.....");
        }
        fetchdata();
      }
      
    // const [value , setValue] = useState("")
    // const [result ,setResult] = useState();
    // useEffect(() => {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    //       .then((res) => res.json())
    //       .then((response) => {
    //           setValue(response);
    //       });
    // }, [result]);
    
    return (
        <div >
            <div className="search">
                <input className="input" type="text" 
                placeholder="Search for a meals or keywords" 
                value={value} 
                onChange={(e)=>{
                    setValue((e.target.value));
                }}
                /> 
                <button onClick={fet}  >
                    <FaSistrix/>
                </button>
                <button ><FaRandom/></button>
            </div>
            <div className="imageList">
                {result && result.map((ele,index)=>
                <div className="display">
                 <Image key={index} ele={ele}/>
                </div>
                 )}
            </div>
        </div>
        
        
    )
}