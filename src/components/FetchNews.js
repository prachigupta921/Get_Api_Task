import React, { useState } from "react";
import axios from 'axios';

function FetchNews() {

    const [news, setnews] = useState([]);

    const fetchNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=519bddae1f09456ea58e2e56f7261cf1")
            .then((response) => {
                setnews(response.data.articles)
                console.log(response);
            })
    }
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={fetchNews}>FetchNews</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {
                        news.map((value) => {
                            return (
                                <div className="col-4" key={`${value.title}`}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={value.urlToImage} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.title}</h5>
                                                <p className="card-text">{value.description}</p>
                                                <a href={value.url} className="btn btn-primary">{value.url}</a>
                                            </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FetchNews;