const GOOGLE_API = "AIzaSyCFSy51_HORY6c4t5i1Fw9FLXDcu8jyyvg"

export const LIVE_CHAT_COUNT = 25

export const MOST_POPULAR_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=In&key="+GOOGLE_API;

export const YOUTUBE_SEARCH_API = 'https://auto-suggest-queries.p.rapidapi.com/suggestqueries?query=';

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e3c387d8emsh22c1ba45b9bd86bp141122jsn163071535568',
		'X-RapidAPI-Host': 'auto-suggest-queries.p.rapidapi.com'
	}
};

