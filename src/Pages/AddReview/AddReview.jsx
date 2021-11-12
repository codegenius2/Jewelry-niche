import { Alert } from "@mui/material";
import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./AddReview.css";
import { Rating } from "react-simple-star-rating";

const AddReview = () => {
  const [rating, setRating] = useState(1); // initial rating value
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rating);
    // Some logic
  };
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // setBookUser(data);

    //  if user booking is valid then
    if (!data.Name) {
      return (
        <Spinner className='mx-auto' animation='border' variant='danger' />
      );
    } else {
      data.rating = rating;
      if (user.photoURL) {
        data.img = user.photoURL;
      } else {
        data.img =
          "https://i.ibb.co/ZJPQfBr/115-1150152-default-profile-picture-avatar-png-green.jpg";
      }
      
      //   fetch the post API
      fetch("https://aqueous-tor-77995.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            setSuccess(true);
          }
        });
    }
  };
  return (
    <Container className='order-form mx-auto'>
      <p className='addReview-title mb-md-5 mb-3'>Please Give Your Feedback</p>
      {success ? (
        <Alert severity='success'>Feedback Added Successfully!</Alert>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={40}
            label
            transition
            fillColor='orange'
            emptyColor='gray'
            className='foo' // Will remove the inline style if applied
          />
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              value={user.displayName}
              {...register("Name")}
              required
            />
            <label htmlFor='floatingInput'>Name</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='email'
              value={user.email}
              className='form-control'
              id='floatingInput'
              {...register("Email")}
              required
            />
            <label htmlFor='floatingInput'>Email</label>
          </div>

          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("message")}
              required
            />
            <label htmlFor='floatingInput'>Message</label>
          </div>

          <input
            className='btn btn-success px-3'
            type='submit'
            value='Add Feedback'
          />
        </form>
      )}
    </Container>
  );
};

export default AddReview;
