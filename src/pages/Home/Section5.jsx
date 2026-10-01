import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import StoreIOS from "../../assets/shop/appstore.png";
import StoreGoogle from "../../assets/shop/googleplay.png";
import DownloadImg from "../../assets/shop/e-shop.png";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../assets/brands/brand-11.png"
import Brand2 from "../../assets/brands/brand-12.png"
import Brand3 from "../../assets/brands/brand-13.png"
import Brand4 from "../../assets/brands/brand-14.png"
import Brand5 from "../../assets/brands/brand-15.png"
import Brand6 from "../../assets/brands/brand-16.png"
import Brand7 from "../../assets/brands/brand-17.png"
import Brand8 from "../../assets/brands/brand-18.png"


const Section5 = () => {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
              </p>

              <Link to="/">
                <img src={StoreIOS} alt="" className="img-fluid me-3 store" />
              </Link>

              <Link to="/">
                <img src={StoreGoogle} alt="" className="img-fluid me-3 store" />
              </Link>
            </Col>

            <Col lg={6} className="">
              <img src={DownloadImg} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand_section">
        <Container>
          <Row>
            <Col>
              <Carousel >
                <Carousel.Item>
                
                  <Carousel.Caption>
                    <div className="brand_logos d-flex align-items-center justify-content-between">
                       <div className="brand_img">
                          <img src={Brand1} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand2} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand3} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand4} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand5} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand6} alt="" className="img-fluid"/>
                       </div>
            
                      
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

                 <Carousel.Item>
                
                  <Carousel.Caption>
                    <div className="brand_logos d-flex align-items-center justify-content-between">
                       <div className="brand_img">
                          <img src={Brand3} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand4} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand5} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand6} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand7} alt="" className="img-fluid"/>
                       </div>
                       <div className="brand_img">
                          <img src={Brand8} alt="" className="img-fluid"/>
                       </div>
            
                      
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section5;
