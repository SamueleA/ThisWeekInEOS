import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import Subscribe from './components/Subscribe';
import Archive from './components/Archive';
import Affiliates from './components/Affiliates';
import style from './index.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


console.log('client server mode: ' + process.env.NODE_ENV);

class App extends React.Component {
  constructor(){
      super();
      this.state = {
        mostRecent:{},
        currentPost:{},
        orderedHistory:{},
      }
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  componentDidMount(){
    var fetchPath;
    if (process.env.NODE_ENV == 'production'){
      fetchPath = 'http://thisweekineos.com:5000/api/posts'
    } else {
      fetchPath = '/api/posts'
    }
    fetch(fetchPath).then(result=>{
      return result.json();
    }).then(data =>{
      this.setState({mostRecent:data[0] });
      this.setState({orderedHistory:data });
    });
  }

  getCurrentPost(date){
    for( var i = 0; i<this.state.orderedHistory.length;i++) {
      if (date == this.state.orderedHistory[i].date) {
        let currentPost = this.state.orderedHistory[i];
        return <Post date={currentPost.date} content = {currentPost.content} />
      }
    }
  }

  render(){
    var currentPost;

    return (
      <Router >
        <div className='container'>
          <h1 className='text-center'>This week in EOS News!</h1>
          <Link to='/'><img src='/assets/eos-seeklogo.com.svg' className='eosLogo text-blog' alt='EOS logo from block.one' /></Link>
          <div className='line'></div>
            <div>
            <Route path='/:archiveDate' render={({match})=>{ return(
              <div>
                { this.getCurrentPost(match.params.archiveDate)}
                <Affiliates/>
                <Subscribe/>
                <Archive archive={this.state.orderedHistory} selected={match.params.archiveDate} />
              </div>
            )}}/>

            <Route exact path='/' render={()=>{ return(
              <div>
                <Post date={this.state.mostRecent.date} content = {this.state.mostRecent.content}/>
                <Affiliates/>
                <Subscribe/>
                <Archive archive={this.state.orderedHistory} selected={this.state.mostRecent.date} />
              </div>
            )}}/>
            </div>
          </div>
      </Router>

    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app') );

$(function() {
	//The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
	OverlayScrollbars(document.querySelectorAll('body'), { });
});
