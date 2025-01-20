import { Container, Row, Col } from "react-bootstrap"
import { testimonial } from "../data/index"

import FaqComponent from "../components/FaqComponent"

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
       <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Semua Testimonial</h1>
              <p className="text-center animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eaque.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
                return (
                    <Col key={data.id} className="shadow-sm mb-5" 
                    data-aos="zoom-in" data-aos-duration="1200">
                        <div className="people">
                            <div>
                                <h5 className="mb-1" >{data.name}</h5>
                                <p className="m-0 fw-bold">{data.skill}</p>
                            </div>
                            <img src={data.image} alt=""/>
                        </div>
                        <p className="desc">{data.desc}</p>
                    </Col>
                );
            })}
          </Row>
        </Container>
       </div>
       <FaqComponent />
    </div>
  )
}

export default TestimonialPage