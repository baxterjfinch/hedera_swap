import { fork, put, takeLatest } from 'redux-saga/effects'
import actions, { setCompiled } from './actions'
import { swapFetcher } from '../../utilities'
import { getCompiled } from '../../../services/hedera-swap'

function* fetchCompiledSaga(action) {
	try {
		const response = yield swapFetcher(getCompiled, [action.body])
		console.log("HERE PROPS", response)
		yield put(setCompiled(response))
	} catch(e) {}
}

function* watchFetchCompiledSaga() {
	yield takeLatest(actions.GET_COMPILE_CONTRACTS, fetchCompiledSaga)
}


export default function* (compilerSagas) {
	yield fork(watchFetchCompiledSaga)
}