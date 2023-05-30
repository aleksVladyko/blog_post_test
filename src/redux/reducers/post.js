import {
    SET_ALL_POSTS,
    SET_ALL_POSTS_SUCCESS,
    SET_ALL_POSTS_ERROR,
    SET_ALL_USERS,
    SET_ALL_USERS_SUCCESS,
    SET_ALL_USERS_ERROR,
    GET_COMMENTS_POST,
    GET_COMMENTS_POST_SUCCESS,
    GET_COMMENTS_POST_ERROR,
    GET_USER_POSTS,
    GET_USER_POSTS_SUCCESS,
    GET_USER_POSTS_ERROR,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
} from "../constant";
// начальное состояние stora
// Начальная состояние приложения при его инициализации
const initialState = {
    allPosts: [],
    allUsers: [],
    allCommentsPost: [],
    allUserPosts: [],
    user: {},
    error: null,
    isLoading: false,
};

// создаем reducer
const posts = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ALL_POSTS:
            return {
                ...state,
                isLoading: true,
            };
        case SET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allPosts: payload,
            };
        case SET_ALL_POSTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload.message,
            };
        case SET_ALL_USERS:
            return {
                ...state,
                isLoading: true,
            };
        case SET_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allUsers: payload,
            };
        case SET_ALL_USERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload.message,
            };
        case GET_COMMENTS_POST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_COMMENTS_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allCommentsPost: payload,
            };
        case GET_COMMENTS_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload.message,
            };
        case GET_USER_POSTS:
            return {
                ...state,
                isLoading: true,
            };
        case GET_USER_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allUserPosts: payload,
            };
        case GET_USER_POSTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload.message,
            };
        case GET_USER:
            return {
                ...state,
                isLoading: true,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload,
            };
        case GET_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload.message,
            };
        default:
            return state;
    }
};
export default posts;
