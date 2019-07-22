import React from 'react';
import {connect} from 'react-redux';
import {getScores} from '../../actions/MainActions';

class ResultComponent extends React.Component {

  constructor(props){
    super(props);
    this.props.getScores(this.props.name);
  }

  getScores(){
    let lis = [];
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
        {
          this.getScores()
        }
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
    isFetching: state.MainReducer.isFetching,
    name : state.MainReducer.name,
    score : state.MainReducer.score,
    otherScores : state.MainReducer.otherScores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScores: (name) => { dispatch(getScores(name))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ResultComponent);
