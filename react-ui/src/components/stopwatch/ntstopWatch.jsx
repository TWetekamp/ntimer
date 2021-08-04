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

    return (
        <div>
          <td>
          {/* <Button variant="dark" onClick={start}>Start</Button>{' '} */}
          <Button variant="dark" onClick={start}>Start</Button>
          <Button variant="dark" onClick={pause}>Pause</Button>{' '}
          <Button variant="dark" onClick={reset}>Reset</Button>{' '}</td>
          <td><span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span> ---- {isRunning ? 'Running' : 'Not running'}</span></td>  
        </div>
        );
    };