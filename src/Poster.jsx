import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { IoPlayOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { GiDirectorChair } from "react-icons/gi";
import { GoPencil } from "react-icons/go";
import { PiMaskHappyBold } from "react-icons/pi";
import { RiTimerLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";

import styles from "./Poster.module.css";

function Poster() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #FFA310;
      color: white;
    }
    `}
      </style>
      <div className={styles.bannerImage}>
        <Container>
          <Row>
            <Col className="mt-5 d-none d-md-block">
              <p className="d-flex">
                <h4 className={styles.num}>8.3</h4>/10
              </p>
              <h5>853.7k Votes</h5>
              <Button variant="flat">IMDB</Button>
              <div className={styles.heart}>
                <CiHeart />
              </div>
              <div className="star">
                <FaStar color="FFA310" />
                <FaStar color="FFA310" />
                <FaStar color="FFA310" />
                <FaStarHalfAlt color="FFA310" />
                <CiStar color="FFA310" />
              </div>
            </Col>
            <Col className="mt-5 me-5" style={{direction: "rtl"}}>
              <h1>Oppenheimer 2023 دانلود فیلم</h1>
              <p>
              <FaRegCommentDots color="#fff" /> {" "}
                Comments <span style={{color: "#FFA310"}}>1446</span>
              </p>
              <Col className="col-lg-12 col-md-6">
                <p>
                  <MdOutlineHighQuality color="#FFA310" /> {" "}
                  کیفیت : 2160 4k BluRay{" "}
                </p>
                <p>
                <VscFileSubmodule color="#FFA310" /> {" "}
                  ژانر : بیوگرافی 
                </p>
                <p>
                  <GiDirectorChair color="#FFA310" /> {" "}
                   کارگردان : christopher nolan{" "}
                </p>
                <p>
                  <GoPencil color="#FFA310" />{" "}
                  نویسنده : Christopher Nolan,Kai Bird,Martin Sherwin {" "}
                </p>
                <p>
                  <PiMaskHappyBold color="#FFA310" />{" "}
                  ستارگان : cillian murphy,emily blunt,matt damon{" "}
                </p>
              </Col>
              <Col>
                <p>
                <RiTimerLine color="#FFA310" />
                  {" "}
                  زمان : 180 دقیقه 
                </p>
                <p><FaLanguage color="#FFA310" />
                  {" "}
                   رده سنی : R 
                </p>
                <p><CiMap color="#FFA310" />
                  {" "}
                  محصول کشور : آمریکا 
                </p>
              </Col>
              <p>
                زندگی نامه دانشمندی آمریکایی به نام جی رابرت اوپنهایمر و تاثیرش
                در ساخت بمب اتم که
              </p>
            </Col>
            <Col className="col-lg-3 col-md-6 mt-5 d-none d-md-block">
              <img className={styles.postImg} src="https://ap-south-1.graphassets.com/cm7f81x2i07e307pb3u3x1t4y/cm7hwsii41tbt07ofix6plpnf" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Poster;
