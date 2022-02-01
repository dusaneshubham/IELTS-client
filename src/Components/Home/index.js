import React, { useEffect, useState } from 'react';
import NavbarAnkit from '../../Layout/Navbar';
import "./index.css"
import LatestPost from '../LatestPost'; 
import hero from '../../images/hero.jpeg'
import MostSearchKeywords from '../MostSearchKeywords';
import TrendingPost from '../TrendingPost';
const Home=()=> {
  
  const [IsMobile, setIsMobile] = useState(window.innerWidth<1200);
  const [KeyWords, setKeyWords] = useState(["Keyword1","Keywords1Keywords1","keywords2","key"]);
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      const ismobile=window.innerWidth < 1200;
      if(ismobile!==IsMobile) setIsMobile(ismobile);
    },false)
  },[IsMobile])
  return <>
  <NavbarAnkit/>
  <div className="hero-section border-down">
      
      <img src={hero} alt="Hero Img" width="100%" height="250px"/>
  </div>
  <div className={`${IsMobile?"col-12":"row container-fluid"}`}>
    <div className={`${IsMobile?"col-md-8 ":"col-md-9  border-right"}`}>
      <div className="m-5">
              <h4 className="heading">Latest Post</h4>
      </div>
      
      <LatestPost /> 
      <LatestPost /> 
      <LatestPost /> 
      <LatestPost /> 
    </div>
  
  <div className="col-md-3">
      <div className="m-5">
        <h4 className="heading">keywords</h4>
      </div>
      <MostSearchKeywords keywordname={KeyWords}/>
  </div>
  
  </div>
  <div className="col-12 container-fluid">
  <div className="m-5">
  <h4 className="heading">Trending Post</h4>
  <TrendingPost/>
  </div>


  </div>
  </>;
}

export default Home;
