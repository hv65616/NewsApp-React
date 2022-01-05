import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Blogspot.com",
      },
      author: "noreply@blogger.com (Unknown)",
      title:
        "Elon Musk reveals who bitcoin's creator Satoshi Nakamoto might be",
      description:
        'Musk.MARK RALSTON/AFP via Getty Images\r\nElon Musk seems to agree with many that hyper-secret cryptocurrency expert Nick Szabo could be Satoshi Nakamoto, the mysterious creator of the digital currency Bitcoin. "You can watch ideas evolve before Bitcoin was lau…',
      url: "https://techncruncher.blogspot.com/2021/12/elon-musk-reveals-who-bitcoins-creator.html",
      urlToImage:
        "https://blogger.googleusercontent.com/img/a/AVvXsEik_48hPzMzsDzwfdUeHj4jNGqYGevEuVjTTPkAGTu9bRN3oePxV6bxF897GK8Az3AaSqUOalYXNG4HSCy0fW5KUHuruCWP8hAfZxgrgbzh-dsbLM9jxyFGCthOZdBCa1dNkqk6mrVl0VtflsV2VvKXfGnwL6-68m-mxp7qHJuLlvqGIahZ9YDe5mt97w=w1200-h630-p-k-no-nu",
      publishedAt: "2021-12-29T20:41:00Z",
      content:
        "Musk.MARK RALSTON/AFP via Getty Images\r\nElon Musk seems to agree with many that hyper-secret cryptocurrency expert Nick Szabo could be Satoshi Nakamoto, the mysterious creator of the digital currency… [+1467 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Indian PM Modi's Twitter hacked with bitcoin tweet",
      description:
        "The Indian prime minister's account had a message stating that bitcoin would be distributed to citizens.",
      url: "https://www.bbc.co.uk/news/world-asia-india-59627124",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/5998/production/_122063922_mediaitem122063921.jpg",
      publishedAt: "2021-12-12T10:59:57Z",
      content:
        "Image source, AFP via Getty Images\r\nImage caption, Modi has has more than 70 million Twitter followers\r\nIndian Prime Minister Narendra Modi's Twitter account was hacked with a message saying India ha… [+854 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Corey Kilgannon",
      title: "Why New York State Is Experiencing a Bitcoin Boom",
      description:
        "Cryptocurrency miners are flocking to New Yorks faded industrial towns, prompting concern over the environmental impact of huge computer farms.",
      url: "https://www.nytimes.com/2021/12/05/nyregion/bitcoin-mining-upstate-new-york.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/11/25/nyregion/00nybitcoin5/00nybitcoin5-facebookJumbo.jpg",
      publishedAt: "2021-12-06T00:42:28Z",
      content:
        "The plant opening northeast of Niagara Falls this month, in Somerset, N.Y., is part of a $550 million project by Terawulf, a Bitcoin mining company. The project also includes a proposed 150-megawatt … [+1514 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "U.S. SEC rejects Valkyrie, Kryptoin bitcoin trusts - Reuters",
      description:
        "The U.S. Securities and Exchange Commission vetoed two proposals to offer bitcoin exchange-traded funds, dealing a blow to market participants who had hoped the agency would green light the effort after approving futures-backed bitcoin funds in October.",
      url: "https://www.reuters.com/markets/funds/us-sec-rejects-valkyrie-kryptoin-bitcoin-trusts-2021-12-23/",
      urlToImage:
        "https://www.reuters.com/resizer/VcQMWevXkM8HjQhqCD_PvcxdZa4=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RDU5LE4KKJP7LDUVELT6RRXH2Y.jpg",
      publishedAt: "2021-12-23T20:25:00Z",
      content:
        "Dec 23 (Reuters) - The U.S. Securities and Exchange Commission vetoed two proposals to offer bitcoin exchange-traded funds, dealing a blow to market participants who had hoped the agency would green … [+1769 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Jon Fingas",
      title:
        "Someone 'briefly compromised' the Indian Prime Minister's Twitter account",
      description:
        "People aren't done hijacking major politicians' Twitter accounts for financial gain. TechCrunch reports an intruder temporarily seized control of Indian Prime Minister Narendra Modi's Twitter account on December 12th in local time. The attacker tweeted a bogu…",
      url: "https://www.engadget.com/india-prime-minister-modi-twitter-compromised-205939729.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2021-12/cf1459a0-5b88-11ec-aded-e4c12238adb4",
      publishedAt: "2021-12-12T20:59:39Z",
      content:
        "People aren't done hijacking major politicians' Twitter accounts for financial gain. TechCrunch reports an intruder temporarily seized control of Indian Prime Minister Narendra Modi's Twitter account… [+1087 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Bitcoin rises 2.1% to reclaim $50000 - Reuters",
      description: "Bitcoin rose on Sunday to reclaim levels above $50,000.",
      url: "https://www.reuters.com/business/bitcoin-rises-21-reclaim-50000-2021-12-12/",
      urlToImage:
        "https://www.reuters.com/resizer/iiUX4W5Aq1A8rnS9IuasKvCU3So=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3XJHXCQ435MVDN47AUIXPXUFWI.jpg",
      publishedAt: "2021-12-12T18:23:00Z",
      content:
        "Representation of cryptocurrency bitcoin is seen in this illustration taken November 29, 2021. REUTERS/Dado Ruvic/IllustrationDec 12 (Reuters) - Bitcoin rose on Sunday to reclaim levels above $50,000… [+514 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Jonathan Stempel",
      title:
        "Self-proclaimed bitcoin inventor largely prevails in $54 billion bitcoin trial - Reuters.com",
      description:
        "A computer scientist who has claimed to be the inventor of bitcoin largely prevailed on Monday in a Florida jury trial over whether the estate of a former business partner deserved half of a bitcoin cache worth now about $54 billion.",
      url: "https://www.reuters.com/article/us-crypto-currency-lawsuit-idUSKBN2IL25A",
      urlToImage:
        "https://static.reuters.com/resources/r/?m=02&d=20211206&t=2&i=1583817488&r=LYNXMPEHB510V&w=800",
      publishedAt: "2021-12-06T22:27:00Z",
      content:
        "(Reuters) - A computer scientist who has claimed to be the inventor of bitcoin largely prevailed on Monday in a Florida jury trial over whether the estate of a former business partner deserved half o… [+1785 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Bitcoin falls 6.1 percent to $47607 - Reuters",
      description:
        "Bitcoin dropped 6.13% to $47,606.92 on Tuesday, losing $3,111.19 from its previous close.",
      url: "https://www.reuters.com/business/bitcoin-falls-61-percent-47607-2021-12-28/",
      urlToImage:
        "https://www.reuters.com/resizer/w4pjI5JlvB_pshqV4hN-uthyRYY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3W3WSPQ3C5KVRAWJI2YIQPE72Y.jpg",
      publishedAt: "2021-12-28T22:10:00Z",
      content:
        "A representation of the virtual cryptocurrency Bitcoin is seen in this picture illustration taken October 19, 2021. REUTERS/Edgar SuDec 28 (Reuters) - Bitcoin dropped 6.13% to $47,606.92 on Tuesday, … [+473 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Bitcoin falls 8.4% to $49228.82 - Reuters",
      description:
        "Bitcoin dropped 8.4% to $49,228.82 at 20:01 GMT on Saturday, losing $4,514.87 from its previous close.",
      url: "https://www.reuters.com/markets/currencies/bitcoin-falls-84-4922882-2021-12-04/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=60",
      publishedAt: "2021-12-04T20:13:00Z",
      content:
        "Dec 4 (Reuters) - Bitcoin dropped 8.4% to $49,228.82 at 20:01 GMT on Saturday, losing $4,514.87 from its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is down 28.7% fro… [+355 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters Editorial",
      title: "Bitcoin plunges by a fifth - Reuters.com",
      description:
        "Bitcoin shed a fifth of its value on Saturday as a combination of profit-taking and macro-economic concerns triggered nearly a billion dollars worth of selling across cryptocurrencies.",
      url: "https://www.reuters.com/video/watch/idPE$h?now=true",
      urlToImage:
        "https://ajo.prod.reuters.tv/api/v2/img/61abc29fe4b09631b0e4401a-1638646431577?location=LANDSCAPE",
      publishedAt: "2021-12-04T19:55:07Z",
      content:
        "Posted \r\nBitcoin shed a fifth of its value on Saturday as a combination of profit-taking and macro-economic concerns triggered nearly a billion dollars worth of selling across cryptocurrencies.",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters Editorial",
      title: "Bitcoin plunges by a fifth - Reuters.com",
      description:
        "Bitcoin shed a fifth of its value on Saturday as a combination of profit-taking and macro-economic concerns triggered nearly a billion dollars worth of selling across cryptocurrencies. Fred Katayama reports.",
      url: "https://www.reuters.com/video/watch/idOVF6MNO97",
      urlToImage:
        "https://static.reuters.com/resources/r/?d=20211204&i=OVF6MNO97&r=OVF6MNO97&t=2",
      publishedAt: "2021-12-04T19:35:10Z",
      content:
        "Posted \r\nBitcoin shed a fifth of its value on Saturday as a combination of profit-taking and macro-economic concerns triggered nearly a billion dollars worth of selling across cryptocurrencies. Fred … [+16 chars]",
    },
  ];
  constructor() {
    super();
    this.state = { articles: this.articles, loading: false };
  }
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
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title.slice(0,10)}
                  description={element.description.slice(0,40)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
