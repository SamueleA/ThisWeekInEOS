import React from 'react';
import ReactDOM from 'react-dom';
import Post from './components/Post';
import Request from 'request';

class App extends React.Component {
  contructor(){
      super();
      this.state={
        mostRecent = null;
      }
  }

  componentDidMount(){
    fetch('/api/posts').then(result=>{
      return results.json();
    }).then(data =>{
      let post = return(
        <post title={data.title} date={data.date} content = {data.content}/>
      )
      this.setState({mostRecent:post })
    });

  }
  render(){
    return <div>
      <h1>react app!</h1>
      {this.state.mostRecent }
    </div >
  }
}



ReactDOM.render(<App/>, document.getElementById('app') );
