import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import styles from "./Download.module.css";

function Download() {
  const peoples = [
    {
      id: 1,
      name: "Ahmadxan71",
      text: "بهترین کار نولان تا اینجا بوده از لحاظ فنی ، البته اکثر اونایی که فیلمایی الدوم خیاری دوس دارن فک نکنم بتونن با این شاهکار ارتباط بگیرن",
    },
    {
      id: 2,
      name: "arya_ilkhani",
      text: "سلام و درود خدمت دوستان عزیز فیلم بار علمی زیادی داره و جدا از اون راجب تاریخ هم باید اطلاعاتی داشته باشید، حتما بعد از فیلم نقد و تحلیل هایی که راجبش هست رو هم ببینید. موسیقی متن شاهکار(که آقای نولان عادت داره خوبارو گلچین کنه) بازیه زیبای آقای مورفی صحنه های خفن و عالی(که اگر شرایطش رو دارید حتما بالاترین کیفیت و در تاریکی ببینید) فقط اونجور که باید به ژاپن توجه نشد و طبیعی هم هست و ميخواستن خودشون رو ناجی جهان جلوه بدن اما خب درکل فیلم پرمحتوا و زیبایی بود و ارزش دیدن داره",
    },
    {
      id: 3,
      name: "Mimimo",
      text: "به سُخره گرفتن بیننده برای سرپوشی و توجیه بمب اتم",
    },
    {
      id: 4,
      name: "Negar74",
      text: "من نميدونم واقعا اين نظرات منفي زير كامنت چيه بابا الكي كه امتياز نگرفته خيليم فيلم مفهوميو قابله دركه من خودم وقتي اين فيلم اومد نمونه پرده رو ديدم ولي خيلي بهم چسبيد عالي بود",
    },
    {
      id: 5,
      name: "nosaraei",
      text: "نولان از فیلم تاریخی بکش بیرون :((( خیلی به فیلمای تاریخی علاقه ندارم. در عین حال فیلم خوش ساخته. و بازی بازیگران هم عالی. در کل پیشنهاد نمی کنم. انتظارم از نولان چیز دیگه ایه :))",
    },
  ];

  return (
    <>
      <Container className="mt-5">
        <Accordion className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={{ color: "#FFA310" }}>Download Link</span>
            </Accordion.Header>
            <Accordion.Body>
              <Accordion className="mt-5">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>
                      <FaDownload /> Persian subtitled version
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5 style={{ color: "#FFA310" }}>
                      2160p 4K 10bit BluRay x265 SoftSub
                    </h5>
                  </Accordion.Body>
                  <Accordion.Body>
                    <h5 style={{ color: "#FFA310" }}>
                      1080p Full HD BluRay SoftSub
                    </h5>
                  </Accordion.Body>
                  <Accordion.Body>
                    <h5 style={{ color: "#FFA310" }}>720p BluRay HardSub</h5>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={{ color: "#FFA310" }}>Actors</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767d6b61bws07psa4667122"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm7678hyi1buf07psbzbs2a4h"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767if591bzp07pssh92jjkw"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767k4tv1bst07podk4nzefo"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={{ color: "#FFA310" }}>Related Movies</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767d6b61bws07psa4667122"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm7678hyi1buf07psbzbs2a4h"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767if591bzp07pssh92jjkw"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767k4tv1bst07podk4nzefo"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={{ color: "#FFA310" }}>Related List</span>
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767d6b61bws07psa4667122"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm7678hyi1buf07psbzbs2a4h"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767if591bzp07pssh92jjkw"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="gy-3" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://ap-south-1.graphassets.com/cm75ggfoi07az07pg8qmc9l1i/cm767k4tv1bst07podk4nzefo"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span style={{ color: "#FFA310" }}>Comments</span>
            </Accordion.Header>
            {peoples.map((people) => (
              <Accordion.Body key={people.id} style={{ direction: "rtl" }}>
                <div className={styles.comments}>
                  <Row>
                    <Col className="col-lg-10">
                      <div className={styles.detail}>
                        <h5 style={{ color: "#FFA310", marginRight: "20px" }}>
                          {people.name}
                        </h5>
                        <p style={{ marginRight: "20px" }}>{people.text}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Accordion.Body>
            ))}
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default Download;
