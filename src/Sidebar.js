import React from 'react';
import './Sidebar.css';

function SideBar() {
    return (
      <div className='sidebar'>
        <div className='name'>JUSTIN KYLE PHILLIPS</div>
        <div className='divider-small'>Full-Stack Developer</div>
        <div className='section'>Contact Details
          <div className='sub-section'>
            <img className='small-icon' src={require('./img/marker.png')} alt='map pin'/>
            <span>390 7th St, San Diego CA 91932</span>
          </div>
          <div className='sub-section'>
            <img className='small-icon' src={require('./img/phone.png')} alt='telephone icon'/>
            <span>(415)361-1120</span>
          </div>
          <div className='sub-section'>
            <img className='small-icon' src={require('./img/envelope.png')} alt='envelope'/>
            <a href='mailto:kyle@jkylephillips.xyz'>kyle@jkphillips.xyz</a>
          </div>
          <div className='sub-section'>
            <img className='small-icon' src={require('./img/github.png')} alt='oktocat'/>
            <a href='github.com/jphill4884'>github.com/jphill4884</a>
          </div>
          <div className='sub-section'>
            <img className='small-icon' src={require('./img/linkedin.png')} alt='linkedin logo'/>
            <a href='linkedin.com/in/jkylephillips'>linkedin.com/in/jkylephillips</a>
          </div>
        </div>
        <div className='divider-small'>SKILLS</div>
        <div className='section'>People Management</div> 
        <div className='divider-small'>LANGUAGES</div>
        <div className='section'>English, German, Spanish</div>
        <div className='divider-small'>REFERENCES</div>
        <div className='section'>Available upon request</div>
      </div>
    );
  }
  
  export default SideBar;