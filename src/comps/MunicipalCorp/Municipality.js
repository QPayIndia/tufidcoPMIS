import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import home from "../../assets/home.svg";
import Header from "../header.js";

const Municipality = () => {
  
  return (
    <>
    <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Municipality</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/ Municipal Corporation</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              <div className="headBody">
                <p>Project, Edit data, view data</p>
              </div>
            
             
           
          </div>

          <div className="fullContainer">
                <p>Add New</p>
          </div>
         
         <div className="tableContainer">
          <div className="tableTop">
            <div>
                
            </div>
            <div className="searchContainer">
              <p>Search</p>
              <input className="searchBox">
              </input>
            </div>
          </div>
            <table className="dataTable">
              <thead>
                <td>
                  Local Body Name with Code
                </td>
                <td>
                 District
                </td>
                <td>
                Bank Account No
                </td>
                <td>
                 Email Id
                </td>
                <td>
                 Pan No
                </td>
                <td>
                 Name as per Bank Records
                </td>
                <td>
                 Action
                </td>
              </thead>
              <tbody>
              
                <td className="vendorName">
                Adiramapattinam<br></br>
               <b> Code </b>: 252840

                </td>
                <td>
                Coimbatore - 569
                </td>
                <td>
                12345678
                </td>
                <td>
                abc@gmail.com
                </td>
                <td>
                AAACS0001A
                </td>
                <td>
                Adiramapattinam Municipality
                </td>
                <td>
                <div className="rowAfter">
                  <p className="greenBtn">View</p>
                  <p className="orangeBtn">Edit</p>
                  <p className="blackBtn">Delete</p>
                 </div>
                </td>
            
              </tbody>
            </table>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
              <p style={{fontSize:"smaller"}}>Showing 1 to 2 of 2 Entires</p>
            </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Municipality;
