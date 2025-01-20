import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../assets/img/hero.png"

import { kelasTerbaru, dataSwiper } from "../data/index"
import { useNavigate } from "react-router-dom"
import FaqComponent from "../components/FaqComponent"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const HomePage = () => {
    let navigate = useNavigate();

  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
            <Container>
                <Row className="header-box d-flex align-items-center pt-lg-5">
                    <Col lg='6' className="pt-lg-0 pt-5">
                        <img src={HeroImage}  alt="hero-img" className="animate__animated animate__fadeInLeftBig animate__delay-600ms" />
                    </Col>
                    <Col lg='6'>

                        <h1 className="mb-4 animate__animated animate__fadeInRightBig ">
                            Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!
                        </h1>
                        <p className="mb-4 animate__animated animate__fadeInRightBig ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, saepe error eius harum tenetur unde accusamus sint molestias laudantium quod quia dolores facilis aliquam doloremque maxime quae vero vitae quidem?</p>
                        <button className="btn btn-light btn-lg rounded-12 ms-5
                        animate__animated animate__fadeInRightBig" 
                        onClick={() => navigate("/kelas") }>
                            Lihat Kelas
                        </button>
                        <button className="btn btn-outline-light btn-lg rounded-12 m-2
                        animate__animated animate__fadeInRightBig">
                            Lihat Promo
                        </button>
                    </Col>
                    
                </Row>
            </Container>
        </header>
        
        {/* Kelas */}
        <div className="kelas w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center fw-bold">
                        Kelas Terbaru
                    </h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.
                    </p>
                    </Col>
                </Row>
                {/* // Di bawah ini menggunakan arrow function */}
                <Row>
                    {kelasTerbaru.map((kelas) => {
                        return <Col key={kelas.id} className="shadow" 
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
                <Row>
                    <Col className="text-center">
                        <button className=" btn btn-light btn-lg rounded-5" onClick={() => {navigate("/kelas")}}
                            data-aos="fade-up" data-aos-duration="1000">
                                Lihat Semua Kelas <i className="fa-solid fa-chevron-right ms-1"></i>
                        </button>
                    </Col>
                </Row>

            </Container>
        </div>
        {/* Testimonial */}
        <div className="testimonial py-5">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold my-5">Testimonial</h1>
                    </Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        >
                        {dataSwiper.map((data) => {
                            return (
                                <SwiperSlide key={data.id} className="shadow-sm">
                                    <div className="people">
                                        <div>
                                            <h5 className="mb-1" >{data.name}</h5>
                                            <p className="m-0 fw-bold">{data.skill}</p>
                                        </div>
                                        <img src={data.image} alt=""/>
                                    </div>
                                    <p className="desc">{data.desc}</p>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Row>
            </Container>
        </div>

        {/* Section FAQ */}
        <FaqComponent/>
        {/* Section FAQ */}
                        
        
    </div>
  )
}



export default HomePage





