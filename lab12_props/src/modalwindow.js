import React from "react";
import './index.css'

const Modalwindow = function () {
  // function to close the modal window
  const closemodalwindow = () => {
    const modalwindow = document.querySelector(".modalwindow")
    if(modalwindow) modalwindow.style.display = "none";
  }
  // function to collect comment
  const collectcomment = () => {
    const modalwindow = document.querySelector(".modalwindow")
    if(!modalwindow) return;
    const commentarea = modalwindow.querySelector(".commentarea")
    const commentlist = document.querySelector(".commentlist")
    const usercomment = modalwindow.dataset.usercomment || 'Anonymous'
    if(commentlist && commentarea && commentarea.value.trim() !== ""){
      const li = document.createElement('li')
      li.textContent = `${usercomment} - ${commentarea.value}`
      commentlist.appendChild(li)
    }
    modalwindow.style.display = "none";
    if(commentarea) commentarea.value = ""
  }

  return (
    <>
      {/* Modal window */}
      <section className="modalwindow" style={{display: 'none'}} data-usercomment="">
        <div className="modalcontent">
          <header className="modalheader">
            <p>Add Feedback</p>
            <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
          </header>
          <main className='modalbody'>
            <input placeholder='Type your comments...' className='commentarea' type="text" />
            <p className="description_comment">Max 200 characters</p>
            <button className="btnpostfeedback" onClick={collectcomment} >
              Post Feedback
            </button>
          </main>
        </div>
      </section>
    </>
  )
}
export default Modalwindow
