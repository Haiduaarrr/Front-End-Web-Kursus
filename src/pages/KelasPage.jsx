import {Container, Row, Col} from "react-bootstrap"
import { semuaKelas } from "../data/index"

import FaqComponent from "../components/FaqComponent"

const KelasPage = () => {
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Semua Kelas</h1>
              <p className="text-center animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium!</p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
                return <Col key={kelas.id} className="shadow raounded"
                data-aos="flip-left" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                    <img src={kelas.image} alt="unsplash.com" />
                    <div className="star mb-3">
                        <i className={kelas.star1}></i>
                        <i className={kelas.star2}></i>
                        <i className={kelas.star3}></i>
                        <i className={kelas.star4}></i>
                        <i className={kelas.star5}></i>
                    </div>
                    <h5 className="mb-3 px-2">{kelas.title}</h5>
                    <div className="keterangan  d-flex justify-content-between align-items-center px-2">
                        <p className="fw-bold mb-0 text-light">{kelas.price}</p>
                        <button className="btn btn-primary roundered-12">{kelas.buy}</button>
                    </div>
                </Col>
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default KelasPage