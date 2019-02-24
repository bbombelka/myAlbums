import React from 'react';
import './../spinner.css';
import { Consumer } from './Context';

export default function Spinner() {
  return (
    <Consumer>
      {value => {
        return (
          <div
            style={{
              border: '2px solid black',
              width: '30vw',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              id="bar"
              style={{
                height: '5vh',
                backgroundColor: '#007bff',
                width: '5%',
                animationDuration: value.timeOut / 1000 + 's',
              }}
            />
          </div>
        );
      }}
    </Consumer>
  );
}
