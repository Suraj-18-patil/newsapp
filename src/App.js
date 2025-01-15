import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  name = "Shri";
  pageSize=12;

  apikey=process.env.REACT_APP_API_KEY
  
  
  state ={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
    
      <>
      <div>
        <Router>
          {/* Class Based News Application {this.name} */}
          
          <Navbar />
          <LoadingBar  height={5} color='#f11946' progress={this.state.progress} />

          {/* <News pageSize={8} country="us" category="sports" /> */}
     
          <Routes>
            <Route exact path="/"element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="us" category="general" />}/>
            <Route exact path="/business"element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="us" category="business" />}/>
            <Route exact path="/science"element={<News setProgress={this.setProgress} apikey={this.apikey} key="science"pageSize={this.pageSize} country="us" category="science" />}/>
            <Route exact path="/sports"element={<News setProgress={this.setProgress} apikey={this.apikey}  key="sports" pageSize={this.pageSize} country="us" category="sports" />}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="health" pageSize={this.pageSize} country="us" category="health" />}/>
            <Route exact path="/technology"element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology"  pageSize={this.pageSize} country="us" category="technology" />}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />}/>
          </Routes>
          {/* <Routes>
            <Route exact path="/"element={<News key="general" pageSize={this.pageSize} country="in" category="general" />}/>
            <Route exact path="/business"element={<News key="business" pageSize={this.pageSize} country="in" category="business" />}/>
            <Route exact path="/science"element={<News key="science" pageSize={this.pageSize} country="in" category="science" />}/>
            <Route exact path="/sports"element={<News  key="sports" pageSize={this.pageSize} country="in" category="sports" />}/>
            <Route exact path="/health" element={<News  key="health" pageSize={this.pageSize} country="in" category="health" />}/>
            <Route exact path="/technology"element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />}/>
            <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}/>
          </Routes>*/}
          
        </Router> 
        
      </div>
      </>

    );
  }
}



