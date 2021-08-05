// import React, { useState } from 'react';
import { Button } from "react-bootstrap";
// import { useStopwatch } from 'react-timer-hook';

export const NTIstopwatch = ({id, name, isActive, childHandleClick})=> {
  const handleStartClick = ()=> {
      console.log('Start clicked');
      childHandleClick(id);
      // Start your stopwatch library start here.
      start();
  };

  const handleStopClick = ()=> {
      console.log('Stop clicked');
      childHandleClick(-1);
      // Start your stopwatch library stop here.
    pause();
  };
  
  const handleResetClick = ()=> {
    console.log('Reset clicked');
    childHandleClick(id);
    // Start your stopwatch library stop here.
    NTIstopwatch(reset());
  };

  return (
  <td>
      <h3>Stopwatch {name}</h3>
      {isActive ? <Button variant="dark" onClick={handleStopClick}>Stop</Button>: 
      <Button variant="dark" onClick={handleStartClick}>Start</Button>}{' '}
      <Button variant="dark" onClick={handleResetClick}>Reset</Button>{' '}
      <NTIstopWatch />
  </td>
  );
};