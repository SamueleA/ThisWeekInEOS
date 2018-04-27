import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import style from './index.scss'

class App extends React.Component {
  constructor(){
      super();
      this.state = {
        mostRecent:{}
      }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/posts').then(result=>{
      return result.json();
    }).then(data =>{
      this.setState({mostRecent:data[0] })
    });

  }
  render(){
    return <div>
      <h1>react app!</h1>
      <Post title={this.state.mostRecent.title} date={this.state.mostRecent.date} content = {this.state.mostRecent.content}/>
    </div >
  }
}



ReactDOM.render(<App/>, document.getElementById('app') );
