import { fork, put, takeLatest } from 'redux-saga/effects'
import actions, { setCompiled, setCall } from './actions'
import { swapFetcher } from '../../utilities'
import { getCompiled, getCall } from '../../../services/hedera-swap'

function* fetchCompiledSaga(action) {
	try {
		const response = yield swapFetcher(getCompiled, [action.body])
		yield put(setCompiled(response))
	} catch(e) {}
}

function* fetchGetCallSaga(action) {
	try {
		console.log("RESPONSE: ", action)

		const response = yield swapFetcher(getCall, [action.body])
		yield put(setCall(response))
	} catch(e) {}
}

function* watchFetchCompiledSaga() {
	yield takeLatest(actions.GET_COMPILE_CONTRACTS, fetchCompiledSaga)
}

function* watchGetCallSaga() {
	yield takeLatest(actions.GET_CALL, fetchGetCallSaga)
}


export default function* (compilerSagas) {
	yield fork(watchFetchCompiledSaga)
	yield fork(watchGetCallSaga)
}