import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  // declare email and success
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  // take email value from fields
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  // make admin function
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://aqueous-tor-77995.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label='Email'
          type='email'
          onBlur={handleOnBlur}
          variant='standard'
        />
        <Button type='submit' variant='contained'>
          Make Admin
        </Button>
      </form>
      {success && <Alert severity='success'>Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
