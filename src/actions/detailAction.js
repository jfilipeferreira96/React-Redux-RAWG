import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
      payload: {
        isLoading: true,
      },
    });

    const detailData = await fetch(gameDetailsURL(id));
    const response = await detailData.json();

    const imageData = await fetch(gameScreenshotURL(id));
    const images = await imageData.json();

    dispatch({
      type: "GET_DETAIL",
      payload: {
        game: response,
        screenshots: images,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
