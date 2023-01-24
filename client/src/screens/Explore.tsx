import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { getSearchDetailsAPI } from '~/apis/spotify';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { genresAPI } from '~/apis/genres';

const Explore: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams({});

    const artistParam = searchParams.get('artist');
    const pageParam = searchParams.get('page');
    const styleParam = searchParams.get('style');
    const genreParam = searchParams.get('genre');

    const [artists, setArtists] = useState([]);
    const [searchArtist, setSearchArtist] = useState(artistParam || '');
    const [searchGenre, setSearchGenre] = useState(genreParam || '');
    const [searchStyle, setSearchStyle] = useState(styleParam || '');
    const [searchStyles, setSearchStyles] = useState('');
    const [currentPage, setCurrentPage] = useState(pageParam || 1);
    const [pagesNumber, setPagesNumber] = useState();
    const [resultsNumber, setResultsNumber] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const genres = genresAPI();
    const navigate = useNavigate();

    const handlePressKey = (event: any) => {
        if (event.key === 'Enter' && event.target.value === '') {
            setSearchArtist(event.target.value);
            setCurrentPage(1);
        } else if (event.key === 'Enter') {
            setSearchArtist(event.target.value);
        }
    };

    const handlePages = (event: any, value: number) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        navigate(`/explore?artist=${searchArtist}&page=${currentPage}`);
        getSearchDetailsAPI(searchArtist, searchGenre, searchStyle, currentPage).then((data) => {
            console.log(data);
            setResultsNumber(data.pagination?.items);
            setPagesNumber(data.pagination?.pages);
            setArtists(data.results);
            setIsLoading(false);
        });
        return () => console.log('clear');
    }, [searchGenre, searchArtist, searchStyle, currentPage, navigate, searchStyles]);

    return (
        <>
            <div>
                {Object?.values(genres).map((genre: any, index: number) => {
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setSearchGenre(genre.utils.genre);
                                setSearchStyles(genre.styles);
                            }}
                        >
                            {genre.utils.genre.replace('+', '')}
                        </div>
                    );
                })}
            </div>
            <div>
                {searchStyles
                    ? Object.keys(searchStyles)?.map((style) => {
                          return (
                              <div key={style}>
                                  <div onClick={() => setSearchStyle(style)}>
                                      <span>{style}</span>
                                  </div>
                              </div>
                          );
                      })
                    : ''}
            </div>
        </>
    );
};

export default Explore;
