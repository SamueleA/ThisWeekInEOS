import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import Subscribe from './components/Subscribe';
import Archive from './components/Archive';
import style from './index.scss';

console.log('client server mode: ' + process.env.NODE_ENV);

class App extends React.Component {
  constructor(){
      super();
      this.state = {
        mostRecent:{},
        orderedHistory:{}
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

  render(){
    return (
      <div className='container'>
        <h1 className='text-center'>This week in EOS News!</h1>
        <img src='/assets/eos-seeklogo.com.svg' className='eosLogo text-blog' />
        <div className='line'></div>
        <Post title={this.state.mostRecent.title} date={this.state.mostRecent.date} content = {this.state.mostRecent.content}/>
        <Subscribe />
        <Archive archive={this.state.orderedHistory}/>
      </div >
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app') );
