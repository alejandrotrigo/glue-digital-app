import React from 'react';
import {connect} from 'react-redux';

class ResultComponent extends React.Component {

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
