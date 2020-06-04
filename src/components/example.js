import React, { Component } from 'react';
import data from "../data/whiskies.json"
import { Container, Row, Col, CardDeck, Card, Button } from 'react-bootstrap';


class Example extends Component {
  render(){
  
  return (
    <div className=" container ">
              <Container>
          <Row >
      
  {data.map((postDetail,index)=>{
    return (

            <Col sm={4}>
                 <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src={"assets/"+postDetail.image}/> */}
                    <Card.Body>
                    <img src={"assets/"+postDetail.image} class="card-img-top" alt="..."/>
                      <Card.Title>{postDetail.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
              </Col>

    )
  })}
              </Row>
      </Container>
    </div>
  );
}
}

export default Example;
