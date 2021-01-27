import config from '../config.js'

const doFetch = async ({url, method, body}) => {
	const options = {
		method,
		mode: 'cors',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}
	if(body) {
		options.body = await JSON.stringify(body)
	}

	try {
		let res = await fetch(url, options)
		console.log("RES", res)
		//console.log('HTTPS response status: ', res.status, res, options)

		return res.status === 204 || res.status === 404 || res.status === 500
			? res
			: res.json()

	} catch(error) {
		console.error(error)
	}
}

export const getCompiled = async() => {
	const url = `http://localhost:9000/compiler`
	const method = 'get'
	const response = await doFetch({url, method})
	return response
}

export const getCall = async(n, body) => {
	const url = `http://localhost:9000/callcontract?contract=${body.contract}&method=${body.callMethod}`
	const method = 'get'
	const response = await doFetch({url, method})
	return response
}

export const setCompiled = async() => {
	const url = `/compile`
	const method = 'get'
	const response = await doFetch({url, method})
	return response
}