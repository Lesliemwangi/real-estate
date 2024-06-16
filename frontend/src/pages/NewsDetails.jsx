import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`http://localhost:8000/newsdetails/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };

    fetchNews();
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="py-4">
      <Button onClick={() => navigate(-1)} className="mb-3">
        Back
      </Button>
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
            <h1
              className="mb-4"
              style={{ fontWeight: "bold", fontSize: "2.5rem" }}
            >
              <u>{news.title}</u>
            </h1>
            <p
              className="description mb-4"
              style={{
                fontWeight: "bold",
                fontSize: "1.6rem",
                textDecoration: "underline",
              }}
            >
              {news.description}
            </p>
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
