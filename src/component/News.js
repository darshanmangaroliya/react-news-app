import React, {useEffect, useState} from 'react'
import Newsiteam from './Newsiteam';
import Spiner from './Spiner';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  
  const updateNews = async ()=> {
    // this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true)
    let data= await fetch(url);
    // this.props.setProgress(70);
    let parsedData= await data.json();
   
    setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    // this.props.setProgress(100);
  }
  useEffect(() => {
    
    updateNews(); 
    // eslint-disable-next-line
}, [])
 
 const fetchMoreData =async()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
   
      // loading:false
    }

  

  // handlenext=async()=>{
  
  //   let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=e3a2132b0d1848f6a18a1c918f37839b&page=${this.state.page+1 }&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parsedData= await data.json();
   
    

  //   this.setState({
  //     page:this.state.page+1 ,
  //     articles: parsedData.articles,
  //     loading:false
  //   }
  //   )
  // }


  // handleprev=async()=>{
  
  //   let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=e3a2132b0d1848f6a18a1c918f37839b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parsedData= await data.json();
   

  //   this.setState({
  //     page:this.state.page-1 ,
  //     articles: parsedData.articles,
  //     loading:false
  //   }
  //   )
  // }
  

   
        return (
          <>
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>News boy-headline</h1>
                <InfiniteScroll
                 dataLength={articles.length}
                 next={fetchMoreData}
                 hasMore={articles.length !== totalResults}
                 loader={<Spiner/>}
         
        >         
        <div className="container">
                { loading&&<Spiner/>}
                <div className="row">
                 { articles.map((element)=>{ 
                 return <div className="col-md-4" key={element.url}>
                     <Newsiteam title={element.title?element.title:""}  description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:""} newsurl={element.url} author={element.author} date={element.publishedAt}/>
                     </div>
               
               })}  
               
               </div>
               </div>
               </InfiniteScroll>
               {/* <div className="container  d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; previes</button>
               <button type="button" className="btn btn-dark"  onClick={this.handlenext}>next &rarr;</button>
               </div> */}
            </div>
            </>
        )
    }
    News.defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'general',
  }
  News.propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
  }
  

export default News
