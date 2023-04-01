import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import NewsItem from './NewsItem'
// import Card from './Cards'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './newslist.css'

// Your API key is: ae80ef768cb44de78ff3ad50056e7f74


const NewsList = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            console.log("hey")
            const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&apiKey=ae80ef768cb44de78ff3ad50056e7f74')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    },[])
    const columnsPerRow = 3;
    const getColumnsForRow =()=>{
        let items = articles.map(article => {
          return ( 
            <Col>
            <Card>
            <Card.Img className='cardImage' src={article.urlToImage} alt="Card image" />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
                {(article.description).slice(0,100)}
              </Card.Text>
              <Card.Link href={article.url}>View post</Card.Link>                 
            </Card.Body>
          </Card>
        </Col>
          );
   
      });
      return items;
    };

  return (
    <Container>
    <Row xs={1} md={columnsPerRow}>
       {getColumnsForRow()}
    </Row>
</Container>  
  )
}

export default NewsList