import { createStore } from "redux";

// action type
const NEXT_IMAGE = "NEXT_IMAGE";
const PREV_IMAGE = "PREV_IMAGE";
// action creatore
export const nextImage = () => ({ type: NEXT_IMAGE });
export const prevImage = () => ({ type: PREV_IMAGE });

const initialState = {
  currentIndex: 0,
  images: [
    "https://cdn.pixabay.com/photo/2024/05/18/08/16/cat-8769861_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/03/13/25/paste-7967719_640.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/00/40/lizard-8787888_640.jpg",
    "https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_640.jpg",
    "https://cdn.pixabay.com/photo/2020/06/24/19/50/garden-5337535_640.jpg",
  ],
};

// reducer
const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };
    case PREV_IMAGE:
      return {
        ...state,
        currentIndex:
          (state.currentIndex - 1 + state.images.length) % state.images.length,
      };
    default:
      return state;
  }
};

const store = createStore(carouselReducer);
export default store;
