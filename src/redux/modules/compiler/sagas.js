import { fork, put, takeLatest } from 'redux-saga/effects'
import actions, { setCompiled, setCall, setAccount } from './actions'
import { swapFetcher } from '../../utilities'
import { getCompiled, getCall, newAccount } from '../../../services/hedera-swap'

function* fetchCompiledSaga(action) {
	try {
		const response = yield swapFetcher(getCompiled, [action.body])
		yield put(setCompiled(response))
	} catch(e) {}
}

function* fetchGetCallSaga(action) {
	try {
		const response = yield swapFetcher(getCall, [action.body])
		yield put(setCall(response))
	} catch(e) {}
}


function* fetchGetAccountSaga(action) {
	try {
		const response = yield swapFetcher(newAccount, [action.body])
		yield put(setAccount(response))
	} catch(e) {}
}

function* watchFetchCompiledSaga() {
	yield takeLatest(actions.GET_COMPILE_CONTRACTS, fetchCompiledSaga)
}

function* watchGetCallSaga() {
	yield takeLatest(actions.GET_CALL, fetchGetCallSaga)
}

function* watchGetAccountSaga() {
	yield takeLatest(actions.GET_NEW_ACCOUNT, fetchGetAccountSaga)
}

export default function* (compilerSagas) {
	yield fork(watchFetchCompiledSaga)
	yield fork(watchGetCallSaga)
	yield fork(watchGetAccountSaga)
}
