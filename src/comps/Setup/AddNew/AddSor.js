import React from "react";
import "../../../Styles/styles.css";
import NavBar from "../../navContainer.js";

import home from "../../../assets/home.svg";
import Header from "../../header.js";

const AddSOR = () => {

 const category = [
    {name:"---",
      value : "-"
  },
  {name:"Books",
      value : "books"
  },
 ];

  return (
    <>
      <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Add SOR</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  AddSOR</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

          
          <div className="CardContainer">
            <div className="dropdown-container">
              <p>SorAgency*</p>
              <select className='form-select' value="">
                {category.map((item,index) =>(
                  <option value={item.value}>{item.name}</option>
                  
                ))}
                    

            </select>
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};
    

export default AddSOR;
