import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8000/newsdetails");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching the articles", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Container>
      <h1
        className="my-4 text-center text-decoration-underline text-white"
        style={{ fontWeight: "bold", fontSize: "4.0rem" }}
      >
        Real Estate News
      </h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {articles.map((article) => (
          <Col key={article.id}>
            <Card className="h-100 custom-card">
              <Card.Img
                variant="top"
                src={article.image_url}
                alt={article.title}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  {article.title}
                </Card.Title>
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
