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

export function getScores(name, score){
  return dispatch => {
    dispatch(getScoresRequest(true));
    let userScores = [];
    console.log(score);
    const sp = new ScrumPokerLib(name);
    sp.on('reveal', cards => {
      cards.forEach(card =>{
        var userScore ={};
        userScore.user = card.user;
        userScore.value = card.value;
        userScores.push(userScore);
      });
      dispatch(getScoresResponse(userScores));
    });
    var aa = sp.pick(parseInt(score));
    console.log(sp.getValues());
    console.log(aa);
  }

}
