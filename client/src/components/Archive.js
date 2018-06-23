import React from 'react';
import { BrowserRouter as Router, Link   } from "react-router-dom";



class Archive extends React.Component {
  constructor(props){
    super(props);
  }

  returnYear (index) {
      return this.props.archive[index].date.toString().substring(0, 4);
  }

  returnMonth(index){
      return this.props.archive[index].date.toString().substring(4, 6);
  }

  returnDay(index){
      return this.props.archive[index].date.toString().substring(6, 8);
  }

  componentDidUpdate(){
     window.scrollTo(0,0);
  }

  render() {
    let archiveRows=[];
    for (var i=0;i<this.props.archive.length;i++) {
      var article = this.props.archive[i];
      if (article.date == this.props.selected) {
        archiveRows.push( <li key={i}><span style={{fontWeight: 700}}>{this.returnDay(i)}-{this.returnMonth(i)}-{this.returnYear(i)}</span></li>);
      }
      else {
        archiveRows.push( <li key={i}><Link to={`/${article.date }`}>{this.returnDay(i)}-{this.returnMonth(i)}-{this.returnYear(i)}</Link> </li>);
      }
    }

    return <div className = 'text-center archive'>
      <h2>Archives</h2>
      <ul>
        {archiveRows}
      </ul>
    </div>
  }
}

export default Archive;
