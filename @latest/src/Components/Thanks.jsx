import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='row'>
      <h1 className='welcm'>Thanks for the survey {'\u{1F60A}'}</h1>


        {/* <button onClick={() => navigate('/survey')} className='start-wlcm'>Start</button> */}
      </div>
    </div>
  );
}

export default Welcome;