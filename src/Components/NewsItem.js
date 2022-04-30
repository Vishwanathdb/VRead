import React from 'react'
// import PropTypes from 'prop-types'

const dark = {
    "backgroundColor" : "black",
    "text" : "white",
    "width": "18rem" 
}

const light = {
    "backgroundColor" : "white",
    "text" : "black",
    "width": "18rem" 

}

const minimiseString = (string, count)=>{

    if(string==null)
        return "Click on Read More to Continue";

    if(string.length<=count)
        return string;
    else
        return string.slice(0,96)+'....';
}

const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, author, date, mode } = props;
        return (
            <div>
                <div className="card" style={mode==='light'?light:dark} >
                    <img src={imageUrl} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{`${minimiseString(title, 100)}`}</h5>
                        <p className="card-text">{`${minimiseString(description, 200)}`}</p>
                        <p className="card-text"><small className='text-muted'>Author : {author}</small></p>
                        <p className="card-text"><small className='text-muted'>Last Update : {new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
