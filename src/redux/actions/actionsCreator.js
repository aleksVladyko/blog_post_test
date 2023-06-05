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
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    GET_USER_POSTS,
    GET_USER_POSTS_SUCCESS,
    GET_USER_POSTS_ERROR,
} from "../constant";

export const setAllPosts = (payload) => ({
    type: SET_ALL_POSTS,
    payload,
});
export const setAllPostsSuccess = (payload) => ({
    type: SET_ALL_POSTS_SUCCESS,
    payload,
});
export const setAllPostsError = (payload) => ({
    type: SET_ALL_POSTS_ERROR,
    payload,
});
export const setAllUsers = (payload) => ({
    type: SET_ALL_USERS,
    payload,
});
export const setAllUsersSuccess = (payload) => ({
    type: SET_ALL_USERS_SUCCESS,
    payload,
});
export const setAllUsersError = (payload) => ({
    type: SET_ALL_USERS_ERROR,
    payload,
});
export const getUser = (payload) => ({
    type: GET_USER,
    payload,
});
export const getUserSucces = (payload) => ({
    type: GET_USER_SUCCESS,
    payload,
});
export const getUserError = (payload) => ({
    type: GET_USER_ERROR,
    payload,
});
export const getCommentsPost = (payload) => ({
    type: GET_COMMENTS_POST,
    payload,
});
export const getCommentsPostSucces = (payload) => ({
    type: GET_COMMENTS_POST_SUCCESS,
    payload,
});
export const getCommentsPostError = (payload) => ({
    type: GET_COMMENTS_POST_ERROR,
    payload,
});
export const getUserPosts = (payload) => ({
    type: GET_USER_POSTS,
    payload,
});
export const getUserPostsSucces = (payload) => ({
    type: GET_USER_POSTS_SUCCESS,
    payload,
});
export const getUserPostsError = (payload) => ({
    type: GET_USER_POSTS_ERROR,
    payload,
});

