//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 0) {
    return month;
  } else {
    return `0${month}`;
  }
};

//Getting the current day
const getCurrentDay = () => {
  const day = new Date().getDay() + 1;
  if (day < 0) {
    return day;
  } else {
    return `0${day}`;
  }
};

const currentYear = new Date().getFullYear();
const CurrentMonth = getCurrentMonth();
const CurrentDay = getCurrentDay();
const currentDate = `${currentYear}-${CurrentMonth}-${CurrentDay}`;
const lastYear = `${currentYear - 1}`;
const nextYear = `${currentYear + 1}`;

//Popular Games
const current_popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentYear}-01-01,${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const bestOfLastYear = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear}-01-01,${lastYear}-12-30&ordering=-metacritic&page_size=10`;

export const currentPopularGamesURL = () => `${base_url}${current_popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const bestOfLastYearURL = () => `${base_url}${bestOfLastYear}`;

//Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
//Game Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

//Searched game
export const searchGameURL = (game_name) => `${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${game_name}&page_size=10`;
