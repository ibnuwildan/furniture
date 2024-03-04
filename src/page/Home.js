import React from "react";
import { Container, Row, Tabs, Tab, Col, Button } from "react-bootstrap";
import { BsArrowBarRight } from "react-icons/bs";
import CardTabs from "../component/CardContent";
import CarouselComponent from "../component/CarouselContent";

const PageHome = () => {
  return (
    <div className="home">
      <CarouselComponent img1={require("../img/carousel/1.png")} img2={require("../img/carousel/2.png")} img3={require("../img/carousel/3.png")} />
      {/* <div className="home-banner  w-100 vh-100 d-flex p-0 " /> */}
      <div className="header-home1 ">
        <div className="row pt-4 mx-5 pb-5" style={{ textAlign: "justify" }}>
          <div className="col-md-3">
            <p class="fs-1 fw-bold p-3">
              <span class="text-warning">Whay</span> <br />
              Chooising Us
            </p>
          </div>
          <div className="col-md-3 px-5">
            <h5>Exclusive Designs</h5>
            <p>
              Discover unique designs you won't find anywhere else. Our design team is always innovating to bring beauty and authenticity to every product we offer. Make your home reflect your personality with our exclusive collections.
            </p>
          </div>
          <div className=" col-md-3 px-5">
            <h5>Affordable Prices</h5>
            <p>We believe that quality doesn't have to come with a high price. We are committed to providing high-quality furniture at competitive prices. Get maximum value for every purchase at Panto Furniture.</p>
          </div>
          <div className=" col-md-3 px-5">
            <h5>Diverse Choices</h5>
            <p>No matter your decor style, we have product options that suit. From classic to modern designs, from neutral colors to bold choices, Panto Furniture has everything you need to create the perfect space.</p>
          </div>
        </div>
      </div>
      <div className="hedaer-tabs">
        <Container className="py-4 bg-light ">
          <h4 className="text-tabs text-center fw-bold pb-3 text-warning">Best Selling</h4>
          <Row className="justify-content-center pb-5">
            <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0 pb-3">
              <Tab eventKey="tab-1" title="Bed">
                <Row className="row-tabs d-flex">
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hallo" image={require("../img/bed-content/1.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/bed-content/2.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/bed-content/3.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/bed-content/4.png")} />
                  </Col>
                  <Button className="btn-tabs" variant="outline-warning" size="sm" href="/bed">
                    <BsArrowBarRight /> More
                  </Button>
                </Row>
              </Tab>
              <Tab eventKey="tab-2" title="Chair">
                <Row className="row-tabs d-flex">
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hallo" image={require("../img/chair-content/20.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/chair-content/22.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/chair-content/18.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/chair-content/17.png")} />
                  </Col>
                  <Button className="btn-tabs" variant="outline-warning" size="sm" href="/chair">
                    <BsArrowBarRight /> More
                  </Button>
                </Row>
              </Tab>
              <Tab eventKey="tab-3" title="Sofa">
                <Row className="row-tabs d-flex">
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hallo" image={require("../img//sofa konten/9.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/sofa konten/10.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/sofa konten/11.png")} />
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <CardTabs text="hay" image={require("../img/sofa konten/12.png")} />
                  </Col>
                  <Button className="btn-tabs" variant="outline-warning" size="sm" href="/sofa">
                    <BsArrowBarRight /> More
                  </Button>
                </Row>
              </Tab>
            </Tabs>
          </Row>
          <div className="carousel-home">
            <CarouselComponent img1={require("../img/carousel/carousel5.png")} img2={require("../img/carousel/carousel4.png")} img3={require("../img/carousel/carousel6.png")} />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default PageHome;
