import React from 'react';
import NavbarAnkit from '../../Layout/Navbar';
import "./index.css";
const Post = () => {
  return <>
  <NavbarAnkit/>
  <div className="row container-fluid">
      <div className="col-sm-2 col-md-2 text-center">

          <post-side-menu>
              <div className="">
              <post-side-icon>
              <i className="fa fa-heart"></i>
              <i className="fa fa-heart"></i>
              <i className="fa fa-heart"></i>
              <i className="fa fa-heart"></i>
              </post-side-icon>
              </div>
          </post-side-menu>
      </div>
      <div className="col-sm-9 col-md-9 p-5 border-left">
          <div className="details">
            <detail-title><h1>This is heading for the post. this is heading for the post</h1>
            </detail-title>
          </div>
          <div className="detail-category">
          <detail-category>
            <h5>Category : IELTS</h5>
          </detail-category>
          </div>
          <div className="row d-flex">
          <detail-author>
          <i className="fa fa-user"></i>
          </detail-author>
          <detail-social>
           <i className="fa fa-heart"></i>
           <i className="fa fa-heart"></i>
           <i className="fa fa-heart"></i>
           <i className="fa fa-heart"></i> 
          </detail-social>
          </div>
      </div>
  </div>
  </>
  ;
};

export default Post;
