
const initialState = {
  name: '',
  score: 0
}

export default function MainReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'ADD_SCORE':
      return {
        ...state,
        score: action.score
      }
    default:
      return state
  }
}
