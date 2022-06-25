import data from './data.json'
import './App.css';
import ReactStars from "react-rating-stars-component";
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState("far");
  const [color, setColor] = useState("primary");
  function change(){
     if(count==="far"){
      setCount("fa");
      setColor("danger")
     }
     else{
      setCount("far")
      setColor("primary")
     }
  }

  return (
    <div >
    {data && data.map(e =>{
     return ( <div className="" key={e.id}>
              <div className="container">
                <h1 className="fw-semibold">{e.header}</h1>
                <p className="text-muted fw-semibold"> {e.type} <i class="fa fa-question-circle-o"></i></p>
              </div>
              <div className="row pb-2">
              <div className="col-6">
                <div className="p-3 fw-semibold">{e.content}</div>
                <div className="p-3 fw-bold text-primary">
                <img src="./assests/3.jpg" alt="" srcset="" className='me-3' style={{width:"3rem",height:"3rem",borderRadius:"50%",cursor:"pointer"}}/>{e.source}</div>
        
                  <div className="p-3 d-flex align-items-center">
                  <ReactStars 
    value={e.rating[0].rated}
    count={5}
    size={25}
    edit={false}
    isHalf={false}
    activeColor="#ffea00"
/> 
                   {e.rating[0].classReview} Reviews form teacher
                  </div>
                  <div className="p-3 d-flex align-items-center">
                  <ReactStars 
    value={e.rating[1].rated}
    count={5}
    size={25}
    edit={false}
    isHalf={false}
    activeColor="#ffea00"
/> 
                   {e.rating[1].teacherReview} Reviews form students
                  </div>

        
                <div className=" fs-5 p-3 fw-semibold">Completed by {e.learner} Learners</div>
                <div className="p-3 ">
                    <div className="row">
                       <div className="col-6">
                       <button type="button" className="btn rounded-5  p-2 fs-5 ps-4 pe-4 btn-primary">See Class Schedule {'>'}</button>
                       </div>
                       <div className="col-6 d-flex justify-content-around align-items-center">
                       <div className={`d-inline fs-5 text-${color}`} style={{cursor:"pointer"}} onClick={change}><i className={`${count} fa-heart`}></i> Save </div>
                       <div className="d-inline fs-5 text-primary" style={{cursor:"pointer"}}><i class='fas fa-share'></i> Share </div>
                       
                       </div>
                    </div>
                </div>
              </div>
              <div className="col-6">
              <div className="row" style={{height:"100%"}}>
                  <div className="col-6" >
                    <img src={e.source_img1} alt=""className="card-img-top" style={{height:"100%"}} />

                  </div>
                  <div className="col-6 d-flex flex-column align-items-center justify-content-between">
                    <img src={e.source_img2} alt="" className="card-img-top" style={{height:"48%"}}/>
                    <img src={e.source_img3} alt="" className="card-img-top" style={{height:"48%"}} />
                  </div>

              </div>
              </div>
              </div>
        </div>)
    }) 
      
        }
    </div>
  );
}

export default App;
