const categoryId = (state = {}, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case 'SET_ID':
      return {
        ...state,
        id: payload
      };
    default:
      return state
  }
}

export default categoryId;
