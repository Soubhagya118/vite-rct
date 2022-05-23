import axios from "axios";
import React, { useState , useEffect} from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import style from "./components/CandidateCard.module.css";


export default function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/candidates").then((res)=>{
      setData(res.data);
    })

  },[]);

  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button title="PREV" id="PREV" />
        <Button id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => {
      
        return(<>
           {/* <CandidateCard key={item.id} item={item}/> */}
        {/* <p>{item.salary}</p>
        <img src={item.avatar}/> */}
         <div data-testid="candidate-container" className={style.container}>
      <img src= {item.avatar} alt="avatar" width="100px" height="100px"  />
      <div>
        <div>Name:{item.name}</div>
        <div>Title & Company Name:{item.company_name}</div>
      </div>
      <div>$ Salary:{item.salary}</div>
    </div>
        </>)
      })}
    </div>
  );
}
