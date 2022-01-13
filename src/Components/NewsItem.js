import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="my-3">
          <div className="card">
            <div>
              <span
                className="badge rounded-pill bg-danger"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  right: "0",
                  position: "absolute",
                }}
              >
                {source}
              </span>
            </div>
            <img
              src={
                !imageUrl
                  ? "https://content.fortune.com/wp-content/uploads/2022/01/GettyImages-1237544263-e1641528864154.jpeg?resize=1200,600"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a
                href={newsurl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
              >
                Read More...
              </a>
              <p className="card-text">
                <small className="text-muted">
                  BY: {!author ? "Unknown" : author} <br></br> ON:{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
