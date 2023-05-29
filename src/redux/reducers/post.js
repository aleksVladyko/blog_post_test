import { SET_ALL_POSTS } from "../constant";
// начальное состояние stora
// Начальная состояние приложения при его инициализации
const initialState = {
    allPosts: [],
};

// создаем reducer
const posts = (state = initialState, { type, payload}) => {
    switch (type) {
        case SET_ALL_POSTS:
            return {
                ...state,
              allPosts: payload,
            };
        default: return state;
    }
};
export default posts;