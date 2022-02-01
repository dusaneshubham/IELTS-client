import React from 'react';
import "./index.css"
const MostSearchKeywords = (props) => {

  return <>

    <div className="most-keyword m-5">
    <div className="row">
    {props.keywordname && props.keywordname.map(keyword =>{
        return <keyword className="col-auto">{keyword}</keyword>
    })}
    
    </div>
    
    </div>
  </>
  ;
};

export default MostSearchKeywords;
