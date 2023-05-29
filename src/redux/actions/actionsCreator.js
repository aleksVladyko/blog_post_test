import {
    GET_ALL_POSTS,
    SET_ALL_POSTS,
} from "../constant";

export const getAllPosts = () => ({
    type: GET_ALL_POSTS,
});
export const setAllPosts = (payload) => ({
    type: SET_ALL_POSTS,
    payload,
});
