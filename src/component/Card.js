import React from 'react';
import './Input_Form.css';



function Card(props){
    
    return (
        <>
                <div className='card'>
                       <div className='prevGroup'>
                       <div className="top-container"> <img src={props.file} className="profile-img" alt='foto' />
                        <div className="ml-3">
                          <h5 className="nama">{props.nama}</h5>
                          <span className="jk">{props.jeniskelamin}</span><br/><br/>
                          <span className="mail">{props.tanggallahir}</span>
        
                            </div>
                         </div>
                         
                         
                         <div className="name-container">
                             
                             <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                                
                                 <div className="d-flex flex-column"> 
                                     <span className="job">{props.job}</span> 
                                     <span className="alamat">{props.alamat}</span> 


                                 </div>
                             </div>

                             <div className="container d-flex justify-content-between align-items-center">
                                
                                 <div className="d-flex flex-row"> 
                                 <div className="phonenum">
                                    <i className="nav-icon fa fa-phone"></i>
                                    <span className="phonenumdetail">{props.phone}</span>
                                </div>

                                <div className="email">
                                <i className="nav-icon fa fa-envelope"></i>
                                <span className="emaildetail">{props.email}</span>
                                </div>

                                 </div>
                             </div>
                        
                            
                         </div>
                        
                       </div>
                       </div>
                    
               
      

        </>

    )
}

export default Card;