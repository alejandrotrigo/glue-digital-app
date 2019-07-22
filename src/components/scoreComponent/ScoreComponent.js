import React from 'react';
import {connect} from 'react-redux';

import {addScore, getScores} from '../../actions/MainActions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class ScoreComponent extends React.Component{

  constructor(props){
    super(props);
  }

  onClickButton(value){
    this.props.addScore(value);
    this.props.getScores(this.props.name, value);
    this.props.history.push('/result');

  }

  render(){
    return (
      <div>
        <h1> Elige tu puntuación {this.props.name} </h1>
        <ButtonGroup size="small" aria-label="Small outlined button group">
              <Button onClick={() => this.onClickButton(1)} >1</Button>
              <Button onClick={() => this.onClickButton(2)}>2</Button>
              <Button onClick={() => this.onClickButton(3)}>3</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="small" aria-label="Small outlined button group">
              <Button onClick={() => this.onClickButton(5)}>5</Button>
              <Button onClick={() => this.onClickButton(8)}>8</Button>
              <Button onClick={() => this.onClickButton(13)}>13</Button>
        </ButtonGroup>
        <br />

        <ButtonGroup size="small" aria-label="Small outlined button group">
              <Button onClick={() => this.onClickButton(20)}>20</Button>
              <Button onClick={() => this.onClickButton(40)}>40</Button>
              <Button onClick={() => this.onClickButton(100)}>100</Button>
        </ButtonGroup>


      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addScore: (score) => { dispatch(addScore(score)) },
    getScores: (name, score) => { dispatch(getScores(name,score))}

  }
}

const mapStateToProps = (state) => {
  return {
    name : state.MainReducer.name,
    score: state.MainReducer.score
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ScoreComponent);
