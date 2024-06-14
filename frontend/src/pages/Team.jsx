import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function Team() {
  const professionals = [
    {
      title: "Commercial Real Estate Agent",
      description:
        "Specializes in buying, selling, and leasing commercial properties.",
      imageUrl:
        "https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s=",
    },
    {
      title: "Luxury Real Estate Agent",
      description:
        "Expert in high-end, luxury real estate market, providing personalized service.",
      imageUrl:
        "https://media.istockphoto.com/id/1042419790/photo/smiling-indian-man-on-white-background.jpg?s=612x612&w=0&k=20&c=3oFP04WPvUg_HUGjbUIUDHJpxG9YhieIR73K51gIZ8g=",
    },
    {
      title: "Real Estate Consultant",
      description:
        "Offers strategic advice on property investments and market trends.",
      imageUrl:
        "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
    },
    {
      title: "Real Estate Broker",
      description:
        "Licensed professional who oversees real estate transactions and manages agents.",
      imageUrl:
        "https://media.istockphoto.com/id/1413763035/photo/portrait-of-smiling-black-businesswoman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ygAcvjEoUHecE26lafL5U9NPPhohuBqYAQ0MN5CtKlM=",
    },
    {
      title: "Property Manager",
      description:
        "Responsible for the day-to-day management and operations of rental properties.",
      imageUrl:
        "https://media.istockphoto.com/id/1316859268/photo/portrait-of-a-young-businesswoman-standing-against-a-white-background.jpg?s=612x612&w=0&k=20&c=qDLBtPcc7qAQParrytqj9BhXcQ21ovXNUw3fl8_PV0c=",
    },
    {
      title: "Realtor",
      description:
        "A real estate professional who is a member of the National Association of Realtors.",
      imageUrl:
        "https://media.istockphoto.com/id/1207856403/photo/portrait-of-happy-african-american-young-businessman-in-formal-suit.jpg?s=612x612&w=0&k=20&c=5KcNoy0GCEXQiNgRYL0FcsWi81-OrXn8D0btadopIEk=",
    },
    {
      title: "Real Estate Agent",
      description:
        "Assists clients in buying, selling, and renting properties.",
      imageUrl:
        "https://media.istockphoto.com/id/1341347262/photo/portrait-smiling-african-american-businessman-in-blue-suit-sit-at-table-for-meeting-in-office.jpg?s=612x612&w=0&k=20&c=Gb1cE6mv7uT4rkWHqdC-9il3XB_gFIIcx8Y8iELvaus=",
    },
  ];

  return (
    <>
      <h3 className="font-heading mb-14 text-center text-black">
        <u>Our Professionals</u>
      </h3>
      <Row className="mb-32">
        {professionals.map((professional, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={professional.imageUrl} />
              <Card.Body>
                <Card.Title>{professional.title}</Card.Title>
                <Card.Text>{professional.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mb-16">
        <h4 className="mb-6 text-center text-white">Meet the Team</h4>
        <p className="text-secondary-light mb-0">
          A dynamic group of individuals united by passion and expertise
        </p>
      </div>
      <Row className="mb-16">
        <Col lg={4} className="mb-8 mb-lg-0">
          <div className="position-relative rounded-3 overflow-hidden">
            <img
              className="img-fluid rounded-5"
              src="solstice-assets/images/about/men-picture.png"
              alt=""
            />
            <div
              className="position-absolute bottom-0 start-0 px-8 py-4 bg-secondary"
              style={{ borderTopRightRadius: "24px" }}
            >
              <span className="d-block display-3 fw-bold text-white mb-2">
                David Petrucci
              </span>
              <span className="small text-secondary-light">Founder & CEO</span>
            </div>
          </div>
        </Col>
        <Col lg={4} className="mb-8 mb-lg-0">
          <div className="position-relative rounded-3 overflow-hidden">
            <img
              className="img-fluid rounded-5"
              src="solstice-assets/images/about/woman-picture2.png"
              alt=""
            />
            <div
              className="position-absolute bottom-0 start-0 px-8 py-4 bg-secondary"
              style={{ borderTopRightRadius: "24px" }}
            >
              <span className="d-block display-3 fw-bold text-white mb-2">
                Malika Gil
              </span>
              <span className="small text-secondary-light">
                Operations Manager
              </span>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="position-relative rounded-3 overflow-hidden">
            <img
              className="img-fluid rounded-5"
              src="solstice-assets/images/about/woman-picture1.png"
              alt=""
            />
            <div
              className="position-absolute bottom-0 start-0 px-8 py-4 bg-secondary"
              style={{ borderTopRightRadius: "24px" }}
            >
              <span className="d-block display-3 fw-bold text-white mb-2">
                Erika Newton
              </span>
              <span className="small text-secondary-light">
                Growth Marketer
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <div className="position-relative p-8 rounded-3 bg-primary overflow-hidden">
        <div className="position-relative text-center">
          <h4 className="text-white mb-6">Join Us on Our Mission</h4>
          <a
            className="btn btn-sm btn-light bg-white border border-light"
            href="#"
          >
            <span className="me-2">View Careers</span>
            {/* icon */}
          </a>
        </div>
      </div>
    </>
  );
}

export default Team;
