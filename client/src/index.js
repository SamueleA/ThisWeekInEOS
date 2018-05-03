import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import Subscribe from './components/Subscribe';
import Archive from './components/Archive';
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

  componentDidMount(){
    fetch('http://localhost:5000/api/posts').then(result=>{
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
        return <Post title={currentPost.title} date={currentPost.date} content = {currentPost.content} />
      }
    }
  }

  render(){
    var currentPost;
    return (
      <Router>
        <div className='container'>
          <h1 className='text-center'>This week in EOS News!</h1>
          <img src='/assets/eos-seeklogo.com.svg' className='eosLogo text-blog' />
          <div className='line'></div>
            <Switch>
            <Route path='/:archiveDate' render={({match})=>{ return(
              <div>
                { this.getCurrentPost(match.params.archiveDate)}
              </div>
            )}}/>

            <Route path='/' render={()=>{ return(
              <div>
                <Post title={this.state.mostRecent.title} date={this.state.mostRecent.date} content = {this.state.mostRecent.content}/>
              </div>
            )}}/>
          </Switch>
          <Subscribe/>
          <Archive archive={this.state.orderedHistory}/>
        </div >
      </Router>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app') );
