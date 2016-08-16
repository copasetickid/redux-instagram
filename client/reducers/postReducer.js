function posts(state = [], action) {
  switch (action.type){
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1), // aftre the one we are updating
      ];
    default:
      return state;
  };
}

export default posts;
