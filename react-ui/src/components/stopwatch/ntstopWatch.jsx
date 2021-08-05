// import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { useStopwatch } from 'react-timer-hook';

export function NTstopWatch() {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: false });

    const handleStartClick = ()=> {
      console.log('Start clicked');
      // Start your stopwatch library start here.
      start();
      console.log(isRunning);
  };

  const handleStopClick = ()=> {
      console.log('Stop clicked');
      // Start your stopwatch library stop here.
    pause();
    console.log(isRunning);
  };
  
  const handleResetClick = ()=> {
    console.log('Reset clicked');
    // Start your stopwatch library stop here.
    reset();
  };

    return (
        <div>
          <td>
              {isRunning ? <Button variant="dark" onClick={handleStopClick}>Stop</Button>: 
              <Button variant="dark" onClick={handleStartClick}>Start</Button>}{' '}
              <Button variant="dark" onClick={handleResetClick}>Reset</Button>{' '}
          </td>
          <td><span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></td>
          <td>{isRunning ? 'Running' : 'Not running'}</td>
        </div>
        );
    };