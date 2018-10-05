import axios from 'axios';

const API = {
	getProducts: getProducts,
	checkout: checkout
}

function getProducts () {
	// Returns a promise
	return axios
		.get('api/products') 
		.catch(handleError)
}

async function checkout (stripe,cart) {
	// Create transaction token with card info (infers Element)
	let { token, error } = await stripe.createToken();

	if (error) {
		alert('Unable to verify credit card info. Please try again.')
		return null
	}
	return axios
		.post('api/checkout', {
			token: token.id,
			cart: cart
		})
		.catch(handleError);
}

function handleError (err) {
	if(process.env.NODE_ENV === 'production'){
			alert('an error occurred: ' + err.response.status)
	} else {
			console.log('err',err)
	}
}

export default API