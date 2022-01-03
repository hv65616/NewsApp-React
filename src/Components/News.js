import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h3
          style={{
            marginBottom: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            marginTop: "10px",
          }}
        >
          NewsInshort - Top Headlines
        </h3>
        <div className="row">
          <div className="col-md-3">
            <NewsItem title="Mytitle" description="lorem100"></NewsItem>
          </div>
          <div className="col-md-3">
            <NewsItem title="Mytitle" description="lorem100"></NewsItem>
          </div>
          <div className="col-md-3">
            <NewsItem title="Mytitle" description="lorem100"></NewsItem>
          </div>
          <div className="col-md-3">
            <NewsItem title="Mytitle" description="lorem100"></NewsItem>
          </div>
        </div>
      </div>
    );
  }
}
