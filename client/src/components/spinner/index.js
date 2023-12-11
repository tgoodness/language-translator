import React from 'react';
import './style.scss';
export default function index({ color }) {
  return (
    <div className="spinner-wrapper">
      <div className="ispinner">
        <div className={`ispinner-blade  ${color}`}></div>
        <div className={`ispinner-blade ${color}`}></div>
        <div className={`ispinner-blade ${color}`}></div>
        <div className={`ispinner-blade ${color}`}></div>
        <div className={`ispinner-blade ${color}`}></div>
        <div className={`ispinner-blade ${color}`}></div>
        <div className={`ispinner-blade ${color}`}></div>
        <div className={`ispinner-blade ${color}`}></div>
      </div>
    </div>
  );
}
