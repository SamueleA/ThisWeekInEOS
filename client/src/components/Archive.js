import React from 'react';

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

  render() {
    let archiveRows=[];
    for (var i=1;i<this.props.archive.length;i++) {
      archiveRows.push( <li key={i}><a href='#'>{this.returnDay(i)}-{this.returnMonth(i)}-{this.returnYear(i)}</a> </li>);
    }


    return <div className = 'text-center'>
    <h2>Archives</h2>
    <ul>
      {archiveRows}
    </ul>
    </div>
  }

}

export default Archive;
