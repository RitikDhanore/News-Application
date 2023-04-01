import React from 'react'
import './newsitem.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const NewsItem = ({title, description, url, urlToImage}) => {
  const columnsPerRow = 4;
  const getColumnsForRow =()=>{
    let items = () => {
      return ( 
        <Col>
        <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Link href={url}>View post</Card.Link>                 
        </Card.Body>
      </Card>
    </Col>
      );

  };
  return items;
};
  return (
    <Container>
          <Row xs={1} md={columnsPerRow}>
             {getColumnsForRow()}
          </Row>
      </Container>  
    // <div className="news-app">
    //     <div className="news-item">
    //         <img className="news-img" src={urlToImage} alt={urlToImage} />
    //         <h3><a href={url}>{title}</a></h3>
    //         <p>{description}</p>
    //     </div>
    // </div>
  )
}

export default NewsItem