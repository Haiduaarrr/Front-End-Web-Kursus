import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ngoding</h3> 
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quisquam, veritatis?
            </p>
            <div className="wa mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+628123456789</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">Uc6Yy@example.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>  
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3 text-white">Subscribe untuk info menarik</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Haidar Sayyid Ramadhan</span>, All Right Reserrved</p>
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default FooterComponent