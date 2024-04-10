const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5aad582d66msh13ddcf2987f6fb0p11f309jsnf53da9b43eb8',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}