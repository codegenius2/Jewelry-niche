import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";

const AddProduct = () => {
  const [rating, setRating] = useState(1); // initial rating value
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rating);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    //  if user data is valid then
    if (!data.title) {
      return (
        <Spinner className='mx-auto' animation='border' variant='danger' />
      );
    } else {
      data.rating = rating;
      //   fetch the post API
      fetch("https://aqueous-tor-77995.herokuapp.com/jewelry", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("Successfully added the Product.");
            reset({
              Name: "",
              Email: "",
            });
          }
        });
    }
  };
  return (
    <Container className='my-md-5 my-3'>
      <p className='regular-title'>Add A New Product</p>
      <div className='order-form mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("title")}
              required
            />
            <label htmlFor='floatingInput'>Title</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='number'
              className='form-control'
              id='floatingInput'
              {...register("price")}
              required
            />
            <label htmlFor='floatingInput'>Price</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("image")}
              required
            />
            <label htmlFor='floatingInput'>Image Link</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              {...register("vendor")}
              required
            />
            <label htmlFor='floatingInput'>Vendor</label>
          </div>
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
          <div className='mt-4'>
            <input
              className='btn btn-success px-3'
              type='submit'
              value='ADD PRODUCT'
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddProduct;
