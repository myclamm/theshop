import axios from 'axios';

const API = {
	getProducts: getProducts,
	checkout: checkout
}

function getProducts () {
	return axios
		.get('api/products')
		.catch(handleError);
}

async function checkout (stripe,cart) {
	let { token } = await stripe.createToken({name: "Name"});
	if (!token) {
		return alert('Unable to verify credit card info. Please try again.')
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