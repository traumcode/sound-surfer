import axios from "axios";

const clientId = '9e0293bb1bb04d9d925398a17946aeb4';
const clientSecret = '81eb2d6d45b54f40ac00c96a94b1f7d1';
const url = 'https://accounts.spotify.com/api/token';

function getTokenFromLocalStorage() {
    return localStorage.getItem('token');
}

export async function authorizeAttempt() {
    let token = await fetchToken();

    if (!token) {
        return;
    }
    localStorage.setItem('token', token);
    console.log('TOKEN OK');
}

const fetchToken = async function () {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: 'grant_type=client_credentials',
    });
    if (response.ok) {
        console.log('bomba');
    } else {
        console.log('mata');
        return false;
    }
    const data = await response.json();
    console.log(data);
    return data.access_token;
};

export async function getArtist(artistId: any) {
    let token = getTokenFromLocalStorage();
    try {
        const res = await fetch('https://api.spotify.com/v1/artists/' + artistId, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export async function getSearchDetails(text:any) {
    let token = getTokenFromLocalStorage();
    try {
        const res = await fetch(`https://api.discogs.com/artists?per_page=100`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getSearchDetailsAPI = async (artist: string, genre: string, style: any, page: any) => {
	const URL = `https://api.discogs.com/database/search?q=${artist}&genre=${genre}&style=${style}&per_page=20&page=${page}&key=VqZUFKLkvLwyMDTEGzsX&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY`;

	try {
		const { data } = await axios.get(URL);
		console.log(data)
		return data;
	} catch (error) {
		console.log(error)
	}
}