import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./userCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const AxiosComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const postUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const deletePost = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios.delete(url).then(
      function (response) {
        console.log(response);
      }
      // Observe the data keyword this time. Very important
      // payload is the request body
      // Do something
    );
  };
  return (
    <div className="mt">
      <h2>This is Axios</h2>
      <p>Add New Post</p>
      <Button onClick={postUser} variant="contained">
        Contained
      </Button>

      <Grid container spacing={2}>
        {users.slice(0,15).map((user) => (
          <UserCard key={user.id} user={user} deletePost={deletePost} />
        ))}
      </Grid>
    </div>
  );
};

export default AxiosComponent;
