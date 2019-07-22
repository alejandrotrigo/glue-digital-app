const ADD_NAME = "ADD_NAME";
const ADD_SCORE = "ADD_SCORE";

export default {
  add_name,
  add_score
}

export function add_name(name){
  return{
    type: ADD_NAME,
    name
  }
}

export function add_score(score){
  return {
    type: ADD_SCORE,
    score
  }
}
