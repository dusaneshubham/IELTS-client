import React from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {refreshTokenSetup} from '../../Utils/refreshTokenSetup' 
const Contact = () => {
    const clientId='302995180407-c92vr789nkl836dpfhv5jvc3kb01l2sl.apps.googleusercontent.com'
    
 
    const onSuccess=(res)=>{
      console.log('Login Success! currentUSer :', res);
      refreshTokenSetup(res);
  }

  const onFailure=(res)=>{
      console.log('Login Failure res:', res);  }
  const onLogoutSuccess=(res)=>{
      console.log('Logout Success :', res);
      alert('Logout Made Successfully');
  }    
  return <>
  <div>
  <GoogleLogin
  clientId={clientId}
  buttonText="Login"
  onSuccess={onSuccess}
  onFailure={onFailure}
  cookiePolicy={'single-host-origin'}
  style={{marginTop:'100px'}}
  isSignedIn={true}
  />
  <GoogleLogout
  clientId={clientId}
  buttonText="Logout"
  onLogoutSuccess={onLogoutSuccess}
  />
  </div>
  </>
  ;
};

export default Contact;
