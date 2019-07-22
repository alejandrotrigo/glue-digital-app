import * as types from '../consts/MainReducerTypes';
import ScrumPokerLib from 'scrum-poker-lib';

export function addName(name){
  return{
    type: types.ADD_NAME,
    name
  }
}

export function addScore(score){
  return {
    type: types.ADD_SCORE,
    score
  }
}

function getScoresRequest(){
  return {
    type: types.GET_SCORES_REQUEST
  }
}

function getScoresResponse(scores){
  return {
    type: types.GET_SCORES_RESPONSE,
    scores
  }
}

export function getScores(name){
  return dispatch => {
    dispatch(getScoresRequest(true));
    let userScores = {};
    const sp = new ScrumPokerLib(name);
    sp.on('reveal', cards => {
      cards.forEach(c =>{
        var userScore ={};
        userScore.user = c.user;
        userScore.value = c.value;
        userScores.push(userScore);
      });
      dispatch(getScoresResponse(userScores));
    });

  }

}
