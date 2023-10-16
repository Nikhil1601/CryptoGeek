import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Newsapp = () => {
  const [news, setnews] = useState([])
  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=crypto&Blockchain&from=2023-09-28&sortBy=publishedAt&apiKey=e4e5643327e94a71808b6f82339d99d9')
      .then((res) => {
        console.log(res.articles);
        setnews(res.articles)
      }).catch(error => console.log(error))
  }, [])

  return (
    <div className='container my-5'>
      <div className="row text-center">
        {
          news.map((val) => {
            return (<div className="col my-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src={val.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.description
                  }</p>
                  <a href={val.url} className="btn btn-primary">Read article</a>
                </div>
              </div>
            </div>
            );
          })
        }


      </div>

    </div>
  )
}

export default Newsapp
