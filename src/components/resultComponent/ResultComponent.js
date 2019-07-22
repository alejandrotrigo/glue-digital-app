import React from 'react';
import {connect} from 'react-redux';

class ResultComponent extends React.Component {

  render(){



    const results = (
      <div>
      <p>Tu puntuación: {this.props.score}</p>
      <h3> Resto de puntuaciones: </h3>
      <ul>

      </ul>
      </div>
    );

    const wait = (
      <p>Esperando por el resto de puntuaciones</p>
    );
    if (this.props.isFetching){
      return wait;
    }
    return results;
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.MainReducer.isFetching,
    name : state.MainReducer.name,
    score : state.MainReducer.score
  }
}

export default connect(
  mapStateToProps,
  null)(ResultComponent);
