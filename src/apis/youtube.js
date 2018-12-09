import axios from 'axios';

const KEY = 'AIzaSyDvJvfCiF4fcPkjXdmMelA90fZR4EDaF1o';

export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResult: 5,
		key: KEY

	}
});