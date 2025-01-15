import React, { Component } from "react";

export class NewsItem extends Component {
   
    render() {
        let {title ,description,imgUrl ,newsUrl,author,date,source}=this.props;
        return (
            <div className="my-4">
                <div className="card" style={{width: "18rem" ,boxShadow:"0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19),0 10px 20px 0 aqua"}}>
                    <img src={!imgUrl? "https://ichef.bbci.co.uk/news/1024/cpsprodpb/1b43/live/c97cd630-79e8-11ef-98f5-c32ebf0655b2.jpg.webp":imgUrl } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" >{title}...
                            <div className="card-remark" >
                             {/* <div className="card" style={{display:'flex',justifyContent:'flex-top',position:'absolute',right:'0'}}>  */}

                                <span className=" position-absolute top-0 start-50 translate-middle badge rounded-pill bg-pink"style={{ display:'flex',justifyContent:'flex-top',position:'absolute',left:'95%',zIndex:'1',background:' #99ffff',color:'black',boxShadow:"0 5px 10px 0 black"}}>{source==="[Removed]"?"Unknown":source}</span>
                           </div>
                        </h5>
                        <p className="card-text">
                           {description}....
                        </p>
                       
                        <p className="card-text">
                            <small className="text-danger">By {!author ? "Unknown":   author} on  {new Date(date).toGMTString()}</small>
                        </p>   
                      
                        <a href={newsUrl} target="_blank " className="btn btn-sm btn-secondary">
                           Read More...
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
