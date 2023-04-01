import {useLayoutEffect, useRef, useState, useEffect} from 'react';
import axios from 'axios'
import Mycard from './Mycard.js'
import './Imagecarousel.css'
const Imagecarousel = () => {

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







    const ref = useRef(null);
    let box = document.querySelector('.product-container');
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const btnpressprev = () => {
        let width = windowSize.current[0];
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = windowSize.current[0];
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container">
                {articles.map(article =>{
                    return(
                        <Mycard 
                            title = {article.title}
                            description = {article.description}
                            url = {article.url}
                            urlToImage = {article.urlToImage}
                        />
                    )
                })}
                {/* <Mycard cardno='1' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' /> */}
            </div>
        </div>
    )
}

export default Imagecarousel