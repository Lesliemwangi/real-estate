import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Real Estate Market Trends in 2024",
    description:
      "An overview of the latest trends and predictions for the real estate market in 2024.",
    url: "https://example.com/real-estate-trends-2024",
    urlToImage:
      "https://amararealty.co.ke/wp-content/uploads/2023/10/What-are-the-predictions-for-real-estate-market-trends-into-2024.jpg",
  },
  {
    id: 2,
    title: "Top 10 Cities to Invest in Real Estate",
    description:
      "A list of the top 10 cities that offer the best real estate investment opportunities.",
    url: "https://example.com/top-10-cities",
    urlToImage:
      "https://www.noradarealestate.com/wp-content/uploads/2023/11/best-places-to-invest-in-real-estate.jpg",
  },
  {
    id: 3,
    title: "How to Get Started in Real Estate Investing",
    description:
      "A beginner's guide to getting started with real estate investing.",
    url: "https://example.com/real-estate-investing",
    urlToImage:
      "https://cdn.ramseysolutions.net/media/blog/retirement/investing/how-to-invest-in-real-estate.jpg",
  },
  {
    id: 4,
    title: "The Impact of Technology on Real Estate",
    description:
      "Exploring how technology is transforming the real estate industry.",
    url: "https://example.com/technology-impact",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAqJaYgrpUoN2KA1FNfkHKhmG2b3I-Pvn5w&s",
  },
  {
    id: 5,
    title: "Understanding Real Estate Taxes",
    description:
      "A comprehensive guide to understanding real estate taxes and how they affect your investment.",
    url: "https://example.com/real-estate-taxes",
    urlToImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTHOO-E9G1X0jghZF9YRLWdlmm2fBrh6EyQ&s",
  },
  {
    id: 6,
    title: "Commercial Real Estate vs. Residential Real Estate",
    description:
      "The key differences between commercial and residential real estate investments.",
    url: "https://example.com/commercial-vs-residential",
    urlToImage:
      "https://miro.medium.com/v2/resize:fit:1200/1*KjflOR1aDXNkiIDnJPNvSQ.jpeg",
  },
  {
    id: 7,
    title: "Investing in Vacation Rental Properties",
    description:
      "Tips and strategies for investing in vacation rental properties.",
    url: "https://example.com/vacation-rental-properties",
    urlToImage:
      "https://www.newsmagnify.com/wp-content/uploads/2022/03/invest-in-rental-properties.jpg",
  },
  {
    id: 8,
    title: "Real Estate Market Forecast for 2025",
    description:
      "Predictions and insights into the real estate market outlook for the year 2025.",
    url: "https://example.com/real-estate-forecast-2025",
    urlToImage:
      "https://media.licdn.com/dms/image/D5612AQHpOnWi_08isA/article-cover_image-shrink_720_1280/0/1716295322002?e=2147483647&v=beta&t=YDaUNNFt_P871FkofdwbRjopp5ETlibTxVwdkNVQ700",
  },
  {
    id: 9,
    title: "Impact of Pandemic on Commercial Real Estate",
    description:
      "Analyzing the effects of the COVID-19 pandemic on commercial real estate sectors.",
    url: "https://example.com/pandemic-commercial-real-estate",
    urlToImage:
      "https://media.licdn.com/dms/image/D4E12AQELMnDY-CRqbw/article-cover_image-shrink_720_1280/0/1698850053792?e=2147483647&v=beta&t=hEPLqTkeJLP2edzMGCWuZyuU-o28RxmTfWOo63oiEfg",
  },
  {
    id: 10,
    title: "Tips for Buying Your First Home",
    description:
      "Essential tips and advice for first-time homebuyers navigating the real estate market.",
    url: "https://example.com/first-home-buying-tips",
    urlToImage:
      "https://www.thebalancemoney.com/thmb/jphzOjSWSPo9PhmXXBJsS_NYwL8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tips-for-buying-your-first-home-1798337-color-v02-d6b6a9f0efda4a0fa44fb23e7665ac7f.png",
  },
  {
    id: 11,
    title: "The Rise of Eco-Friendly Homes",
    description:
      "Examining the growing trend towards eco-friendly and sustainable homes.",
    url: "https://example.com/eco-friendly-homes",
    urlToImage:
      "https://media.licdn.com/dms/image/D4D12AQHuqYlhyLXggw/article-cover_image-shrink_720_1280/0/1692793803613?e=2147483647&v=beta&t=2lzCVVQ3d_ovjHaOeshrFbRO9bvfAeLXhmbGbgaEXsY",
  },
  {
    id: 12,
    title: "Guide to Real Estate Crowdfunding",
    description:
      "Understanding how crowdfunding platforms are changing real estate investment opportunities.",
    url: "https://example.com/real-estate-crowdfunding",
    urlToImage:
      "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/8345/images/ffuWFhXQaKCuIidNkPjv_Real_Estate_Crowdfunding.png",
  },
  {
    id: 13,
    title: "Renovation Tips to Increase Property Value",
    description:
      "Practical renovation ideas that can enhance the value of your property.",
    url: "https://example.com/property-renovation-tips",
    urlToImage:
      "https://media.licdn.com/dms/image/D5612AQHxn9xQSNQtYQ/article-cover_image-shrink_720_1280/0/1703675500716?e=2147483647&v=beta&t=M67aNz4j09V73bUQLbfX7Nn_xLlTJcUsCzYw_tdKGD0",
  },
  {
    id: 14,
    title: "Challenges of Investing in Real Estate",
    description:
      "Identifying common challenges faced by real estate investors and how to overcome them.",
    url: "https://example.com/challenges-real-estate-investing",
    urlToImage:
      "https://img.paperfree.com/file_paperfree_144_2020-8-25-25-12-_facing_the_challenges_of_real_estate_business_by_paperfree.jpg",
  },
  {
    id: 15,
    title: "Impact of Interest Rates on Real Estate Market",
    description:
      "Analyzing the relationship between interest rates and the real estate market.",
    url: "https://example.com/interest-rates-real-estate",
    urlToImage: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    title: "Investment Strategies for Rental Properties",
    description:
      "Effective strategies for generating passive income through rental properties.",
    url: "https://example.com/rental-property-investment",
    urlToImage: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    title: "Legal Considerations in Real Estate Transactions",
    description:
      "Important legal aspects to consider when buying or selling real estate properties.",
    url: "https://example.com/legal-real-estate-transactions",
    urlToImage: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    title: "Tips for Negotiating Real Estate Deals",
    description:
      "Negotiation tips to help you secure the best deals in real estate transactions.",
    url: "https://example.com/negotiating-real-estate-deals",
    urlToImage: "https://via.placeholder.com/150",
  },
];

const News = () => {
  return (
    <Container>
      <h1 className="my-4">Real Estate News</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {articles.map((article) => (
          <Col key={article.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={article.urlToImage}
                alt={article.title}
              />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Link to={`/news/${article.id}`} className="btn btn-primary">
                  Read more
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
