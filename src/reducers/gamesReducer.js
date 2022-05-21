const initialState = {
  currentPopular: [],
  lastYearBestof: [],
  upComing: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        currentPopular: action.payload.currentPopular,
        lastYearBestof: action.payload.lastYearBestof,
        upComing: action.payload.upComing,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
