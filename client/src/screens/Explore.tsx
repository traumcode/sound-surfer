import React, { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';

interface ExploreProps {
    userId: string;
    token: string;
    searchHistory: string[];
    location: {
        search: string;
    };
}

function useQuery(): URLSearchParams {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const Explore: React.FC<ExploreProps> = ({ userId, token, searchHistory, location }) => {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);

    const {search} = useLocation()

    let query = useQuery();

    const artistQuery = query.get('artist');
    const pageQuery = query.get('page');
    const styleQuery = query.get('style');
    const genreQuery = query.get('genre');

console.log(artistQuery);
console.log(query);



    useEffect(() => {
        axios
            .get(`https://api.spotify.com/v1/search?q=${initialQuery}&type=artist,album,genre`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [query, token]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Fetch data from Spotify API
        axios
            .get(`https://api.spotify.com/v1/search?q=${input}&type=artist,album,genre`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return <div>Explore</div>;
};

export default Explore;
