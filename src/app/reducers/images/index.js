const initialState = {
  images: []
}

const imagesList = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch(type) {
    case 'SET_IMAGES':
      return {
        ...state,
        images: [
          ...state.images,
          ...payload
        ]
      };
    case 'CLEAR_IMAGES':
      return {
        ...state,
        images: []
      };
    default:
      return state
  }
}

export default imagesList;
