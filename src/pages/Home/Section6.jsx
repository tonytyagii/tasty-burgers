import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";
import Carousel from "react-bootstrap/Carousel";

const Section6 = () => {
  return (
    <section className="blog_section">
      <Container>
        <Row>
         <Col>
             <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="brand_logos d-flex flex-column align-items-center justify-content-between">
                  <div className="user_img">
                    <img src={User1} alt="" className="img-fluid" />
                  </div>

                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>

                  <div className="item_rating mb-2">
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                  </div>

                  <h5>BY AMELIE NEWLOVE</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption>
                <div className="brand_logos d-flex flex-column align-items-center justify-content-between">
                  <div className="user_img">
                    <img src={User2} alt="" className="img-fluid" />
                  </div>

                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>

                  <div className="item_rating mb-2">
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                  </div>

                  <h5>BY AMELIE NEWLOVE</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption>
                <div className="brand_logos d-flex flex-column align-items-center justify-content-between">
                  <div className="user_img">
                    <img src={User3} alt="" className="img-fluid" />
                  </div>

                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>

                  <div className="item_rating mb-2">
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                  </div>

                  <h5>BY AMELIE NEWLOVE</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption>
                <div className="brand_logos d-flex flex-column align-items-center justify-content-between">
                  <div className="user_img">
                    <img src={User4} alt="" className="img-fluid" />
                  </div>

                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>

                  <div className="item_rating mb-2">
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                     <i className="bi bi-star-fill"></i>
                  </div>

                  <h5>BY AMELIE NEWLOVE</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section6;
