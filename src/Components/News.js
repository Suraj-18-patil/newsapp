import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // articles = [
  // //   {
  // //     source: {
  // //       id: null,
  // //       name: "BBC News",
  // //     },
  // //     author: null,
  // //     title: "Widower's battle for wedding photos on wife's phone",
  // //     description:
  // //       "A man whose wife died suddenly cannot recover precious photos of their wedding from her phone.",
  // //     url: "https://www.bbc.com/news/articles/cwyegzpx45xo",
  // //     urlToImage:
  // //       "https://ichef.bbci.co.uk/news/1024/branded_news/1b43/live/c97cd630-79e8-11ef-98f5-c32ebf0655b2.jpg",
  // //     publishedAt: "2024-09-24T05:08:32Z",
  // //     content:
  // //       "Martyn and Lynn Hall moved to Anglesey last year\r\nA man whose wife died suddenly is unable to recover precious photos of their wedding from her phone in time for her funeral.\r\nMartyn Hall cannot acce… [+3925 chars]",
  // //   },
  // //   {
  // //     source: {
  // //       id: null,
  // //       name: "CNET",
  // //     },
  // //     author: "Vanessa Hand Orellana",
  // //     title: "How to See Heart Rate Zones on Your Apple Watch on Any Workout",
  // //     description:
  // //       "Commentary: Your watch already tracks heart rate, but turning on this view helps you adjust your workouts in real time. Here's how to do it.",
  // //     url: "https://www.cnet.com/tech/mobile/how-to-see-heart-rate-on-apple-watch-fitness/",
  // //     urlToImage:
  // //       "https://www.cnet.com/a/img/resize/3e758032fe51beb63473e36a4ace63fb16331b70/hub/2024/09/16/ba725ab8-135c-47a2-93e4-0dbfc6c605ab/cnet-voices-apple-watch-heart-rate-zone.jpg?auto=webp&fit=crop&height=675&width=1200",
  // //     publishedAt: "2024-09-24T09:00:09Z",
  // //     content:
  // //       "After cruising by on the same good enough fitness routine for too long, I finally feel motivated to step it up a notch and get back into pre-baby shape.\r\nFor the past six years I've been relying on t… [+7457 chars]",
  // //   },
  // //   {
  // //     source: {
  // //       id: "business-insider",
  // //       name: "Business Insider",
  // //     },
  // //     author: "Jaures Yip",
  // //     title:
  // //       "Sam Altman says his private home office includes a prehistoric piece of technology",
  // //     description:
  // //       'OpenAI CEO Sam Altman\'s private home office holds collections of personal objects from "the history of technology." These include a hand ax.',
  // //     url: "https://www.businessinsider.com/sam-altman-private-home-office-includes-tech-artefacts-hand-ax-2024-9",
  // //     urlToImage:
  // //       "https://i.insider.com/66f1adb1d17aa3c7b2b51ae0?width=1200&format=jpeg",
  // //     publishedAt: "2024-09-24T07:01:01Z",
  // //     content:
  // //       "OpenAI CEO Sam Altman's home office holds many personal objects.Morgan Ellis/The Standard\r\n<ul><li>OpenAI CEO Sam Altman's home office holds collections of objects \"from the history of technology\"</l… [+2185 chars]",
  // //   },
  // //   {
  // //     source: {
  // //       id: "business-insider",
  // //       name: "Business Insider",
  // //     },
  // //     author: "Helen Li",
  // //     title: "Why all eyes are on Intel now",
  // //     description:
  // //       "Intel's missed AI opportunities, manufacturing delays, and talk over a Qualcomm deal are in the spotlight as the chip industry anticipates a shakeup.",
  // //     url: "https://www.businessinsider.com/intel-struggles-qualcomm-deal-chip-industry-turmoil-2024-9",
  // //     urlToImage:
  // //       "https://i.insider.com/66f1dbaecfb7f307e5742f84?width=1200&format=jpeg",
  // //     publishedAt: "2024-09-24T08:00:02Z",
  // //     content:
  // //       "Intel.Intel; Getty Images; Chelsea Jia Feng/BI\r\n<ul><li>Former chip design leader Intel struggles due to missed AI opportunities and manufacturing delays.</li><li>Qualcomm reportedly approached Intel… [+7040 chars]",
  // //   }

  // ];

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

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    // console.log("hello i am an constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    // document.title ='General - DailyNews' ? "DailyNews":document.title=`${this.capitalizeFirstLetter(this.props.category)} - DailyNews`;
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - DailyNews`;
  }
  async updateNews() {
    this.props.setProgress(10);
    
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=207c44c3a203462ba432454aa4764b57&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2618222ab6254e14ad577e52068e4318&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // const url = `https://newsdata.io/api/1/latest?country=${this.props.country}&category=${this.props.category}&apikey=pub_54848a24276c0a778a1614d6320614e5e95c7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });

    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);

  }

  async componentDidMount() {
    // console.log("cdm");
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   // console.log(`i am previous --${this.state.page}/$`);

  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   // console.log("handle Next Clicked");

  //   // if (!(this.state.page + 1 >Math.ceil(this.state.totalResults / this.state.pageSize))) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=207c44c3a203462ba432454aa4764b57&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   //   // let url = `https://newsdata.io/api/1/latest?country=${this.props.country}&category=${this.props.category}&apikey=pub_54848a24276c0a778a1614d6320614e5e95c7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   //   // let url = `https://newsdata.io/api/1/latest?apikey=pub_54848a24276c0a778a1614d6320614e5e95c7&category=${this.props.category}&country=${this.props.country}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parseData = await data.json();

  //   //   console.log(parseData);

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parseData.articles,
  //   //     loading: false,
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.props.setProgress(20);

    this.setState({ page: this.state.page + 1 });

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2618222ab6254e14ad577e52068e4318&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=207c44c3a203462ba432454aa4764b57&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // let url = `https://newsdata.io/api/1/latest?country=${this.props.country}&category=${this.props.category}&apikey=pub_54848a24276c0a778a1614d6320614e5e95c7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
   
    // this.setState({ loading: true });

    let data = await fetch(url);
    this.props.setProgress(50);
    
    let parseData = await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);

  };

  render() {
    return (
      <>
        <h1 className="text-center mb-3"style={{color: "white",backgroundColor: "aqua",padding: "10px",textAlign: "center",borderRadius: "10px",textShadow: "10px 2px 10px gray",marginTop:"105px",boxShadow: "15px 4px 35px black"}}>
          {" "}
          {`This is an Top Headlines on - ${this.capitalizeFirstLetter(this.props.category)}`}
         
        </h1>
        {this.state.loading && <Spinner />}
          
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          // loader={<Spinner/>}
           loader={`this.state.articles.length <= this.state.totalResults` ? !<Spinner /> : <Spinner />}

        >
          <div className="container my-2 ">
            <div className="row">
            
              {this.state.articles.map((element) => {
                return (
                  <div className="col md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 35) : ""}
                      description={element.description? element.description.slice(0, 60): "" }

                      // --------------------------------------------------------------------------------------------------------
                      // title={element.title ? element.title : ""}
                      // description={element.description ? element.description : ""}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* Click previous and next button code */}
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            hidden={this.state.loading}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            hidden={this.state.loading}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
export default News;

