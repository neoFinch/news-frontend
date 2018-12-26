import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class News extends Component {
  render() {
    return (
      <div className="card">
        <Card className="">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={this.props.data.title}
              className=""
              height="140"
              image={this.props.data.image}
              title={this.props.data.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.data.title}
              </Typography>
              <Typography component="p">{this.props.data.content}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default News;
