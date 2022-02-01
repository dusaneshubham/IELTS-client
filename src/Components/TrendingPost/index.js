import React, { useState } from 'react';

const TrendingPost = () => {
    const [isMobile,setIsMobile]=useState(window.innerWidth<1200);
    const str="Its description for this post. Its description for this post. Its description for this post. Its description for this post. Its description for this post.Its description for this post. Its description for this post. Its description for this post. Its description for this post. Its description for this post.Its description for this post. Its description for this post. Its description for this post. Its description for this post. Its description for this post.";
    const getDesc=(desc)=>{
  
      if(desc.length>170){
        var index=desc.substring(0,160);
        desc=index.substring(0,index.lastIndexOf(' ')) + "...";
      }
      return desc
    }
  return <>
        <div className="row">
            <div className="col-md-4 col-sm-12 p-3">
            <div className="border p-2">
            <div className="row post-title">
                        <post-title className="">How to crack IELTS at home without tutor?</post-title>
                        </div>  
                        <div className="row post-desc mt-2">
                        <post-desc className="">{getDesc(str)} <post-read type="button" onClick={()=>console.log("clicked")}>Read More &gt;&gt;</post-read></post-desc>
                        </div> 
                        <div className="post-category mt-2">
                        <post-category>Category : xyz</post-category> 
                        </div> 
                        <div className="row post-crated mt-2 mb-2">
                          <post-author>
                          <i className="fa fa-user p-1"></i><span>John Harvy</span>
                          <post-date>
                          <i class="fas fa-calendar-alt p-1"></i><span>10 Jan 2022</span>
                          </post-date> 
                          </post-author>
                         
                        </div>         
                        </div>
                        </div>
            
            <div className="col-md-4 p-3">
            <div className="border p-2">
            <div className="row post-title">
                        <post-title className="">How to crack IELTS at home without tutor?</post-title>
                        </div>  
                        <div className="row post-desc mt-2">
                        <post-desc className="">{getDesc(str)} <post-read type="button" onClick={()=>console.log("clicked")}>Read More &gt;&gt;</post-read></post-desc>
                        </div> 
                        <div className="post-category mt-2">
                        <post-category>Category : xyz</post-category> 
                        </div> 
                        <div className="row post-crated mt-2 mb-2">
                          <post-author>
                          <i className="fa fa-user p-1"></i><span>John Harvy</span>
                          <post-date>
                          <i class="fas fa-calendar-alt p-1"></i><span>10 Jan 2022</span>
                          </post-date> 
                          </post-author>
                         
                          </div>       </div>         
            </div>
            <div className="col-md-4 p-3">
            <div className="border p-2">
            <div className="row post-title">
                        <post-title className="">How to crack IELTS at home without tutor?</post-title>
                        </div>  
                        <div className="row post-desc mt-2">
                        <post-desc className="">{getDesc(str)} <post-read type="button" onClick={()=>console.log("clicked")}>Read More &gt;&gt;</post-read></post-desc>
                        </div> 
                        <div className="post-category mt-2">
                        <post-category>Category : xyz</post-category> 
                        </div> 
                        <div className="row post-crated mt-2 mb-2">
                          <post-author>
                          <i className="fa fa-user p-1"></i><span>John Harvy</span>
                          <post-date>
                          <i class="fas fa-calendar-alt p-1"></i><span>10 Jan 2022</span>
                          </post-date> 
                          </post-author>
                         
                          </div>         
                          </div>         
            </div>
        </div>
  </>;
};

export default TrendingPost;
