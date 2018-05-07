import React from 'react';

class Post extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render() {
    return <div className = 'text-justify post'>
      <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    </div>
  }

}

export default Post;
