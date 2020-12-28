import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchResult from './components/users/SearchResult';
import Header from './components/ui/Header';
import SearchBox from './components/ui/SearchBox';


function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const userPromise = axios.get(`https://api.github.com/users/${user}`);
        const repoPromise = axios.get(`https://api.github.com/users/${user}/repos`);

        const [data, repo] = await Promise.all([userPromise, repoPromise]);

        setItems(data.data);
        setRepositories(repo.data)
        setError(null);
        setLoading(false);

      } catch (err) {
        setError(err.response.data);
        setLoading(false);
      }
    }
    fetchItems();


  }, [user]);

  return (
    <div className='containers'>
      <Header />
      <SearchBox query={(q) => setUser(q)} />
      <SearchResult
        loading={loading}
        items={items}
        repos={repositories}
        error={error}
        repo={repositories}
      />
    </div>
  )
}

export default App

