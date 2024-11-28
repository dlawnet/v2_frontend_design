'use client'
import React from 'react';

const Loader: React.FC = () => (
  <div className="loader">
    <svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>

    <style jsx>{`
      .loader {
        display: inline-block;
        width: 2em;
        height: 2em;
        transform-origin: center;
        animation: rotate4 2s linear infinite;
      }

      svg {
        width: 100%;
        height: 100%;
      }

      circle {
        fill: none;
        stroke: #491217;
        stroke-width: 6;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: dash4 1.5s ease-in-out infinite;
      }

      @keyframes rotate4 {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes dash4 {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }

        50% {
          stroke-dasharray: 90, 200;
          stroke-dashoffset: -35px;
        }

        100% {
          stroke-dashoffset: -125px;
        }
      }
    `}</style>
  </div>
);

export default Loader;
