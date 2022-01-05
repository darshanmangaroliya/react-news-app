import React from 'react'

const Newsiteam =(props) => {
    
        let {title,description ,imageUrl,newsurl,author,date}=props
        return (
            <div>
                <div  className="card">
  <img src={imageUrl}  className="card-img-top" alt=".../"/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">by{author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl}  target="_blank"  className="btn btn-dark">Read more</a>
  </div>
</div>
                
            </div>
        )
   
}

export default Newsiteam
