import { takeEvery, put, call, all, delay } from "redux-saga/effects";
import {
    GET_COMMENTS_POST,
    GET_USER,
    GET_USER_POSTS,
    SET_ALL_POSTS,
    SET_ALL_USERS,
} from "../constant";
import {
    getAllUsers,
    getPosts,
    getUser,
    getUserPosts,
    getCommentsPost,
} from "../../api/index";
import {
    getCommentsPostError,
    getCommentsPostSucces,
    getUserError,
    getUserPostsError,
    getUserPostsSucces,
    getUserSucces,
    setAllPostsError,
    setAllPostsSuccess,
    setAllUsersError,
    setAllUsersSuccess,
} from "../actions/actionsCreator";
// const delay = (time) => new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 500);
// })

//получаю массив всех постов
export function* handlerAllPosts() {
    try {
        yield delay(500);
        const { data } = yield call(getPosts);
        yield put(setAllPostsSuccess(data));
    } catch (error) {
        yield put(setAllPostsError(error.message));
    }
}
export function* watchAllPosts() {
    yield takeEvery(SET_ALL_POSTS, handlerAllPosts);
}

// получаю массив всех юзеров
export function* handlerAllUsers() {
    try {
        const { data } = yield call(getAllUsers);
        // console.log(data);
        yield put(setAllUsersSuccess(data));
    } catch (error) {
        yield put(setAllUsersError(error.message));
    }
}
export function* watchAllUsers() {
    yield takeEvery(SET_ALL_USERS, handlerAllUsers);
}

// получаю массив всех комментов к указанному посту по id
export function* handlerCommentsPost({payload}) {
    try {
        const { data } = yield call(getCommentsPost, payload.postId);
        // console.log(data);
        yield put(getCommentsPostSucces(data));
    } catch (error) {
        yield put(getCommentsPostError(error.message));
    }
}
export function* watchCommentsPost() {
    yield takeEvery(GET_COMMENTS_POST, handlerCommentsPost);
}

// получаю массив всех постов юзера
export function* handlerAllUserPosts({payload}) {
    try {
        const { data } = yield call(getUserPosts, payload.userId);
        // console.log(data);
        yield put(getUserPostsSucces(data));
    } catch (error) {
        yield put(getUserPostsError(error.message));
    }
}
export function* watchAllUserPosts() {
    yield takeEvery(GET_USER_POSTS, handlerAllUserPosts);
}

//получаю объект юзера
export function* handlerUser({payload}) {
    // console.log(payload);
    try {
        const { data } = yield call(getUser, payload.userId);
        yield put(getUserSucces(data));
    } catch (error) {
        yield put(getUserError(error.message));
    }
}
export function* watchUser() {
    yield takeEvery(GET_USER, handlerUser);
}

export default function* rootSaga() {
    yield all([
        watchAllPosts(),
        watchAllUsers(),
        watchCommentsPost(),
        watchAllUserPosts(),
        watchUser(),
    ]);
}
