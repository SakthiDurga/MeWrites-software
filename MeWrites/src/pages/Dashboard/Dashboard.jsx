import React, { useState } from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("novels");
  const data = {
    novels: ["My First Novel", "Dark Love Story"],
    poems: ["Lonely Night", "Rain Thoughts"],
    quotes: ["Life is short", "Pain teaches strength"]
  };
  return (
    <div className='dashboard'>
      <h1 className="heading">Your Writing Space</h1>
      <div className="tabs">
        <button onClick={()=>setActiveTab("novels")} className={activeTab=="novels"?"active":""}>Novels</button>
        <button onClick={()=>setActiveTab("poems")} className={activeTab=="poems"?"active":""}>Poems</button>
        <button onClick={()=>setActiveTab("quotes")} className={activeTab=="quotes"?"active":""}>Quotes</button>
      </div>
      <button className="create-btn">+ Create New</button>
      <div className="lists">
        {
          data[activeTab].map((item,index)=>{
            return(
              <div className="card" key={index}>
                <h4>{item}</h4>
                <button>Edit</button>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Dashboard
