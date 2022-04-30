import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {

    const [article, setArticle] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalSize, setTotalSize] = useState(0);





    const capitalise = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const fetchData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=cfcd218137924c1ea1ee832166474ba2&page=1&pagesize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticle(parseData.articles);
        setTotalSize(parseData.totalResults);
        setLoading(false);
    }


    useEffect(() => {
        document.title = `${capitalise(props.category)} - VRead`;
        fetchData();
        // eslint-disable-next-line
    }, []);


    const handleNextClick = async () => {
        // console.log("Next");


        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=cfcd218137924c1ea1ee832166474ba2&page=${page + 1}&pagesize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticle(parseData.articles);
        setPage(page + 1);
        setLoading(false);

    }

    const handlePreviousClick = async () => {
        // console.log("Previous");


        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=cfcd218137924c1ea1ee832166474ba2&page=${page - 1}&pagesize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticle(parseData.articles);
        setPage(page - 1);
        setLoading(false);
    }

    return (

        <div className="container my-3">

            <h1 className='text-center' style={{ marginTop: 90, marginBottom: 40 }}>{`VRead - Top ${capitalise(props.category)} Headlines`}</h1>

            {loading && <Spinner />}

            <div className='row'>
                {!loading && article.map((element) => {
                    return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://us.123rf.com/450wm/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg?ver=6"} newsUrl={element.url} author={element.author ? element.author : 'Unknown'} date={element.publishedAt} mode={props.mode} />
                    </div>
                })}
            </div>

            <div className="container d-flex justify-content-between my-3">
                <button type="button" disabled={page <= 1} className="btn btn-info" onClick={handlePreviousClick} >&larr;Previous</button>
                <button type="button" disabled={Math.ceil(totalSize / props.pageSize) < page + 1} className="btn btn-info" onClick={handleNextClick} >&rarr; Next</button>
            </div>

        </div>
    )
}

export default News
