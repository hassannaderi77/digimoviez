import { Button, Col, Container, Row } from "react-bootstrap";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";

function Footer() {
  return (
    <Container
      fluid
      className="mt-5"
      style={{ backgroundColor: "rgb(244, 244, 244)", direction: "rtl" }}
    >
      <Row>
        <Col className="mt-4 d-none d-md-block">
          <img
            style={{ width: "300px", borderRadius: "15px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            src="https://ap-south-1.graphassets.com/cm7f81x2i07e307pb3u3x1t4y/cm7hwusve1txm07pkd5ah6oll"
          />
        </Col>
        <Col className="mt-2">
          <p>دانلود فیلم</p>
          <p>پخش آنلاین فیلم ها</p>
          <p>باکس آفیس</p>
          <p>پخش آنلاین سریالها</p>
          <p>سوالات متداول</p>
        </Col>
        <Col className="mt-5">
          <Button variant="flat" style={{ width: "250px" }}>
            عضویت در کانال نلگرام <BiLogoTelegram color="white" />{" "}
          </Button>
          <Button className="mt-5" variant="flat" style={{ width: "250px" }}>
            مشاهده در اینستاگرام <BiLogoInstagramAlt color="white" />{" "}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
