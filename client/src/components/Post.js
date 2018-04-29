import React from 'react';

class Post extends React.Component {
  constructor(props){
    super(props);
  }

  returnYear () {
    if (this.props.date != undefined) {
      return this.props.date.toString().substring(0, 4);
    }

  }

  returnMonth(){
    if (this.props.date != undefined) {
      return this.props.date.toString().substring(4, 6);
    }
  }

  returnDay(){
    if (this.props.date != undefined) {
      return this.props.date.toString().substring(6, 8);
    }
  }

  render() {
    return <div className = 'text-center'>
    <p> {this.props.title}</p>
      <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    </div>
  }

}

export default Post;
