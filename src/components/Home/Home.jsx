import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import homeimg from '../../Assets/dev-ed-wave.png'
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {

  const handleClick = () =>{
    console.log("you hit me")
    const phoneNumber = '+2349151529715';
    const message = 'Hello Emmanuel i would like to connect you';  
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappLink,'_blank')
  }
  return (
    
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ayeni Emmanuel</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeimg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <button className='btn btn-primary cusor-pointer' onClick={handleClick}> connect me</button>
    </section>
  );
}

export default Home;
