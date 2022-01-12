import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }

  async updatedData() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d919b28ed32b43baad717e2c2d12d5ff&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=d919b28ed32b43baad717e2c2d12d5ff&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updatedData();
  }

  previousHandleClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
    //   this.props.category
    // }&apiKey=d919b28ed32b43baad717e2c2d12d5ff&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updatedData();
  };

  nextHandleClick = async () => {
    if (
      !this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      //   this.props.category
      // }&apiKey=d919b28ed32b43baad717e2c2d12d5ff&page=${
      //   this.state.page + 1
      // }&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading: false,
      // });
      this.setState({ page: this.state.page + 1 });
      this.updatedData();
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h3
          style={{
            textAlign: "center",
            marginBottom: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
            marginTop: "10px",
          }}
        >
          NewsInshort - Top Headlines
        </h3>
        {this.state.loading && <Spinner></Spinner>}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  ></NewsItem>
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.previousHandleClick}
            disabled={this.state.page <= 1}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.nextHandleClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
