import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null); // Ensure useState is imported and used correctly

  useEffect(() => {
    fetch(`http://localhost:8000/newsdetails/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news details:", error));
  }, [id]);

  if (!news) {
    return <div>Loading...</div>; // Add loading state or spinner while fetching data
  }

  return (
    <Container className="py-4">
      <Row>
        <Col md={6}>
          <img
            src={news.image_url}
            alt={news.title}
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "90%" }}
          />
        </Col>
        <Col md={6}>
          <div className="article-details">
            <h1 className="fs-1 mb-4">
              <u>{news.title}</u>
            </h1>
            <p
              className="description fs-5 mb-4"
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {news.description}
            </p>
            {/* Displaying article content */}
            <div className="content fs-5">
              <p>{news.content}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsDetails;
