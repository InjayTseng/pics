import axios from 'axios';

const config = {
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 507d2a3b5dabec6bd21374ea67b1efbb2ad310d457ca037c9ec66c7f4450238c'
  }
};

export default axios.create(config);
