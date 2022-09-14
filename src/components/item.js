import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function MediaCard({ data }) {
  return (
    <div className="divCard">
      <NavLink to="/item/:id" activeClassName="Active" ClassName="xd">
        <Card sx={{ maxWidth: 240, maxHeight: 240 }}>
          <CardMedia
            component="img"
            height="140"
            image={data.image}
            alt="Products"
          />
          <CardContent className="CardContent">
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.date}
            </Typography>
          </CardContent>
        </Card>
      </NavLink>
    </div>
  );
}
