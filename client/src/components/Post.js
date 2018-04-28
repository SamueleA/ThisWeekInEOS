import React from 'react';

class Post extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return <div>
    <p> {this.props.title}</p>
    <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    <p> {this.props.date}</p>
    </div>
  }

}

export default Post;
