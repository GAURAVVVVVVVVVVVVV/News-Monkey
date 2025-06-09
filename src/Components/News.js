import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    category: 'general'
  };

  static propTypes = {
    category: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async fetchNews(page) {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&pageSize=6&page=${page}&apiKey=${this.props.apiKey}`;
    this.setState({ loading: true });

    try {
      const data = await fetch(url);
      this.props.setProgress(30);
      const parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        page: page
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
    this.props.setProgress(100);
  }

  componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&pageSize=6&page=${nextPage}&apiKey=${this.props.apiKey}`;

    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        page: nextPage
      });
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  render() {
  const noImageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  const { articles, totalResults, loading } = this.state;

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: '35px 0px' , marginTop:'90px' }}>
        News Monkey - Top Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={this.fetchMoreData}
        hasMore={articles.length < totalResults}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 60) : ""}
                  description={element.description ? element.description.slice(0, 100) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : noImageUrl}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>

      {articles.length < totalResults && loading && (
        <div className="text-center my-3">
          <Spinner />
        </div>
      )}
    </div>
  );
}

}

export default News;
