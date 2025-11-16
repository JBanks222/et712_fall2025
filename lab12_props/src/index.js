import React from 'react';
import ReactDOM from 'react-dom/client';
// import all images (actual filenames in src/images)
import avataruser1 from './images/profile_1.png';
import avataruser2 from './images/profile_2.png';
import avataruser3 from './images/profile_3.png';
// import files
import './index.css';
import UserFeedback from './UserFeedback';
import Modalwindow from './modalwindow';
import User from './comments'

const App = function(){
  return(
    <>
      <h1 style={{textAlign:"center"}}>Jalen Banks</h1>
      <section className='container'>
        {/* user 1 */}
        <UserFeedback username="Batman">
          <User image={avataruser1} date="11/12/24" msg="I am Batman" />
        </UserFeedback>
        {/* user 2 */}
        <UserFeedback username="Peter">
          <User image={avataruser2} date="10/03/24" msg="I am late!" />
        </UserFeedback>
        {/* user 3 */}
        <UserFeedback username="Lady">
          <User image={avataruser3} date="08/20/24" msg="Get more rest" />
        </UserFeedback>
      </section>
        {/* POST COMMENTS */}
        <div className="postcomment">
          <ul className="commentlist"></ul>
        </div>
        {/* MODAL WINDOW */}
        <Modalwindow />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
