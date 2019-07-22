import React from 'react';
import ScrumPokerLib from 'scrum-poker-lib'
import {connect} from 'react-redux';

const sp = new ScrumPokerLib('Alice')

class ResultComponent extends React.Component {


  render(){
    sp.on('reveal', cards => console.log(cards));
    console.log(  sp.getValues());
    console.log(sp.pick(5));
    return (
      <div>
        <p>Tu puntuación: {this.props.score}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    score : state.MainReducer.score
  }
}

export default connect(
  mapStateToProps,
  null)(ResultComponent);
