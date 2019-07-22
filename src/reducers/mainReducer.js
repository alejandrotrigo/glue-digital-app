import * as types from '../consts/MainReducerTypes';
const initialState = {
  name: '',
  score: 0,
  isFetching: false,
  otherScores: []
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NAME:
      return {
        ...state,
        name: action.name
      }
    case types.ADD_SCORE:
      return {
        ...state,
        score: action.score
      }
    case types.GET_SCORES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.GET_SCORES_RESPONSE:
      return {
        ...state,
        otherScores: action.scores,
        isFetching: false
      }
    default:
      return state
  }
}
