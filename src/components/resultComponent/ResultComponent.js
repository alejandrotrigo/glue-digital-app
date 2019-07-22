import React from 'react';
import {connect} from 'react-redux';
import {getScores} from '../../actions/MainActions';

class ResultComponent extends React.Component {

  constructor(props){
    super(props);
  }

  getScores(){
    let lis = [];
    console.log(this.props.otherScores)
    for (var u in this.props.otherScores){
      lis.push(<li> {u.user} -> {u.score} </li>);
    }
  }

  render(){

    const results = (
      <div>
      <p>Tu puntuación: {this.props.score}</p>
      <h3> Resto de puntuaciones: </h3>
      <ul>
      {this.props.otherScores.map( (userScore, i) =>
         <li key={i}> {userScore.user} -> {userScore.value} </li>
       )}
      </ul>
      </div>
    );

    const wait = (
      <div>
        <p>Esperando por el resto de puntuaciones</p>
        </div>
    );

    return (
      <div>
        {this.props.isFetching && wait}
        {!this.props.isFetching && results}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.mainReducer.isFetching,
    name : state.mainReducer.name,
    score : state.mainReducer.score,
    otherScores : state.mainReducer.otherScores
  }
}

export default connect(
  mapStateToProps,
  null)(ResultComponent);
