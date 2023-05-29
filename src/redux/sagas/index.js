import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_ALL_POSTS } from "../constant";
import { getPosts } from '../../api';
import { setAllPosts } from '../actions/actionsCreator';
// const delay = (time) => new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
// })
export function* handleAllPosts (){
    const {data} = yield call(getPosts);
    yield put(setAllPosts(data))
    // console.log(data);
}

export function* watchClickSaga() {
    yield takeEvery(GET_ALL_POSTS, handleAllPosts );
// console.log("ji");
}

export default function* rootSaga(){
    yield watchClickSaga();
}