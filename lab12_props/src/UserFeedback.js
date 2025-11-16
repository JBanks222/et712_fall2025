import React from "react";
import './index.css'

const UserFeedback = function(props){
  // open modal window and set username on modal dataset
  const openmodalwindow = (username) => {
    const modalwindow = document.querySelector(".modalwindow")
    if(!modalwindow) return;
    modalwindow.dataset.usercomment = username || ''
    modalwindow.style.display = "block";
    // focus the input inside the modal
    const commentarea = modalwindow.querySelector('.commentarea')
    if(commentarea) commentarea.focus()
  }

  return(
    <div className="feedbackcontainer">
      <section className="feedbackcard">
        <div className="content"><p>{props.username}</p></div>
        <div className="description">{props.children}</div>
        <div className="cardfooter">
          <p className="addicon" onClick={() => openmodalwindow(props.username)} role="button" tabIndex={0} onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') openmodalwindow(props.username); }}>
            <span aria-hidden="true">&#10011;</span> Add feedback
          </p>
        </div>
      </section>
    </div>
  )
}
export default UserFeedback
