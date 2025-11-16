import React from "react";

const User = function(props){
  return(
    <>
      <section className="card">
        <div className="avatar"> <img src={props.image} alt={props.name + " avatar"}/> </div>
        <div className="content">
          <p className="author">{props.name}</p>
        </div>
        <div className="metadata">
          <p>Posted on <span className="date">{props.date} </span></p>
        </div>
        <div className="comment">
          <p>"<i>{props.msg}</i>"</p>
        </div>
      </section>
    </>
  )
}
export default User;
