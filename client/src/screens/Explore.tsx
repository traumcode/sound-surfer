import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import {getArtist} from '~/apis/spotify';


const Explore: React.FC = () => {
  
  useEffect(() => {
    getArtist('0b9ukmbg0MO5eMlorcgOwz')
  })


    return  (
        <div>

        </div>
      );
};

export default Explore;
