import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  // If you put an invalid link it will be return this 404 page
  return (
    <div className='my-md-5 my-4 text-center'>
      <h1 className='text-danger'>Your Page Is Not Found</h1>
      <img
        className='NotFound'
        src='https://i.ibb.co/ZNdc7Sy/2704891-2.jpg'
        alt=''
      />
      <div>
        <Link to='/home'>
          <button className='btn btn-success'>Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
