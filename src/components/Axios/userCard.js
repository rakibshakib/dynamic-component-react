import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const UserCard = ({ user, deletePost }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            Post Title: {user.title}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" color="error" variant="contained" onClick={()=> deletePost(user.id)}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UserCard;
