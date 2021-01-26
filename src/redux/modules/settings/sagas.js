import { fork, put,  takeLatest } from 'redux-saga/effects'
import actions, {addTitleToFavorites, setAddTitleToFavorites} from "./actions";

function* addTitleToFavoritesSaga(action) {
	try {
		let favs = JSON.parse(localStorage.getItem("favorite_titles")) || []
		if (!favs.includes(action.title)) {
			favs.push(action.title)
			localStorage.setItem("favorite_titles", JSON.stringify(favs))
			yield put(setAddTitleToFavorites(favs))
			return
		} else {
			favs = favs.filter(function(value, index, arr){
				return value !== action.title;
			});
			localStorage.setItem("favorite_titles", JSON.stringify(favs))
			yield put(setAddTitleToFavorites(favs))
			return
		}

	} catch(e) {}
}

function* watchAddTitleToFavoritesSaga() {
	yield takeLatest(actions.ADD_TITLE_TO_FAVORITES, addTitleToFavoritesSaga)
}

export default function* settingsSagas() {
	yield fork(watchAddTitleToFavoritesSaga)
}