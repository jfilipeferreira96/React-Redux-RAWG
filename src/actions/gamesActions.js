import { currentPopularGamesURL, upcomingGamesURL, bestOfLastYearURL, allTimeTopURL, searchGameURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  try {
    const responsePopular = await fetch(currentPopularGamesURL());
    const responseUpcoming = await fetch(upcomingGamesURL());
    const responseLastYearBestof = await fetch(bestOfLastYearURL());
    const responseAllTimeTop = await fetch(allTimeTopURL());

    let currentPopular = await responsePopular.json();
    let lastYearBestof = await responseLastYearBestof.json();
    let upcoming = await responseUpcoming.json();
    let allTime = await responseAllTimeTop.json();

    dispatch({
      type: "FETCH_GAMES",
      payload: {
        currentPopular: currentPopular.results,
        lastYearBestof: lastYearBestof.results,
        upComing: upcoming.results,
        allTimeTop: allTime.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = (game_name) => async (dispatch) => {
  try {
    const search = await fetch(searchGameURL(game_name));
    const searchResponse = await search.json();

    dispatch({
      type: "FETCH_SEARCHED",
      payload: {
        searched: searchResponse.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
