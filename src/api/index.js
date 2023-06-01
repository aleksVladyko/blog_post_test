import axios from "axios";

export const getPosts = async () => {
    try {
        const request = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return request;
    } catch (error) {
        console.error(error);
    }
};
export const getCommentsPost = async (postId) => {
    try {
        const request = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        return request;
    } catch (error) {
        console.error(error);
    }
};
export const getAllUsers = async () => {
    try {
        const request = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        return request;
    } catch (error) {
        console.error(error);
    }
};
export const getUserPosts = async (userId) => {
    try {
        const request = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}/posts`
            );
            return request;
        } catch (error) {
            console.error(error);
        }
    };
    
    export const getUser = async (userId) => {
console.log(userId);
        try {
            const request = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            return request;
        } catch (error) {
            console.error(error);
        }
    };