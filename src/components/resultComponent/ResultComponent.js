import React from 'react';
import ScrumPokerLib from 'scrum-poker-lib'
import {connect} from 'react-redux';


class ResultComponent extends React.Component {

  constructor(props){
    super(props);
    this.setState({
      isLoading: false
    });
  }

  async getResults(){
    this.setState({
      isLoading: true
    });
    
  }

  render(){
    const sp = new ScrumPokerLib('Alice')

    sp.on('reveal', cards => console.log(cards));
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
