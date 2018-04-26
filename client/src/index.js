import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';

class App extends React.Component {
  constructor(){
      super();
      this.state= {
        mostRecent:{}
      }
  }

  componentDidMount(){
    fetch('/api/posts').then(result=>{
      console.log('result',result);
      return result.json();
    }).then(data =>{
      console.log(data);
      this.setState({mostRecent:data[0] })
    });

  }
  render(){
    console.log(this.state.mostRecent);
    return <div>
      <h1>react app!</h1>
      <Post title={this.state.mostRecent.title} date={this.state.mostRecent.date} content = {this.state.mostRecent.content}/>
    </div >
  }
}



ReactDOM.render(<App/>, document.getElementById('app') );
