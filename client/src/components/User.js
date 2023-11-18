import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { apiConnector } from "../utils/api";
import toast, { Toaster } from "react-hot-toast";
import DialogUser from "./DialogUser";
export default function User(props) {
  const {
    first_name,
    last_name,
    email,
    gender,
    available,
    avatar,
    domain,
    id,
  } = props.user;
  const setStatus = props.setStatus;
  const status = props.status;

  const handleClick = async () => {
    const response = await apiConnector("post", "/additem", { id: id });

    console.log("response to add item", response);
  };
  const handleDelete = async () => {
    const response = await apiConnector("delete", "/delete", { id: id });
    if ((response.data.succes = true)) {
      toast.success("user deleted succesfully");
      setStatus(status ? false : true);
    } else {
      toast.error("cant delete user");
    }
    console.log("delete user", response);
  };
  return (
    <Card
      sx={{
        maxWidth: { lg: 300, xs: "350px" },
        margin: "  20px auto",
        height: "400px",
        padding: "5px",

        borderRadius: "20px",
      }}
    >
      {" "}
      <Toaster />
      <CardActionArea sx={{ padding: "5px" }}>
        <CardMedia
          sx={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            margin: "auto",
          }}
          component="img"
          image={avatar}
          alt="user Image"
        />
        <CardContent>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-evenly",

              padding: "0px",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {first_name} {last_name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {gender}
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "0px",
              margin: "0px",
            }}
          >
            <Typography gutterBottom variant="p" component="div">
              Domain {domain}
            </Typography>
            <Typography gutterBottom variant="p" component="div">
              Availibilty {available ? "true" : "false"}
            </Typography>
          </CardContent>
          <Typography color="text.secondary">{email}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CardContent
          sx={{
            display: "flex",
            margin: "auto",
            gap: "20px",
          }}
        >
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={handleClick}
          >
            Add To Team
          </Button>

          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={handleDelete}
          >
            Delete User
          </Button>
        </CardContent>
      </CardActions>
    </Card>
  );
}
