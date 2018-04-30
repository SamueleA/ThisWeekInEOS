import React from 'react';

class Post extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return <div className = 'text-center'>
    <p> {this.props.title}</p>
      <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    </div>
  }

}

export default Post;
