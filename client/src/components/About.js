import React  from "react";
import '../components/Layout/About.style.css'

const About = () => {
  return (
      <div className='About' style={{backgroundColor:'#303030', color:'#FFF'}}>
        <div className={'container-fluid'} style={{height:'30%'}}/>
          <div className={'container'}>
            <h1 className={'MainText'}>Hi, I am Aleksandr<span style={{color:'#ED2939'}}>.</span></h1>
            <h3 className={'SecondaryText'}>I am a student with a passion for Web Development</h3>
          </div>
        <div>
        </div>
      </div>
  );
};

export default About;

