import React from 'react';
import MessageBox from '../ui/MessageBox';
import Spinner from '../ui/Spinner';


function SearchResult({ items, loading, repositories, error, repo }) {
    function handleAdd() {
        const user = { name: items.login, publicrepo: items.public_repos, repoUrl: items.repos_url };
        localStorage.setItem('userinfo', JSON.stringify(user));
        window.alert("Item has been added to localStorage")
    }

    function handleRemove() {
        localStorage.removeItem('userinfo');
        window.alert("Item has been deleted from localStorage ");
    }

    return loading ? (<Spinner />) :
        error ? (<MessageBox variant="danger">{error.message}</MessageBox>)
            // error ? (<h1 className='center'>{error.message}</h1>)
            : (
                <div className="container center">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={items.avatar_url} className="card-img-top" alt="..." />

                    </div>
                    <div className="card-body">
                        <button onClick={handleAdd} className="btn btn-primary  btn-sm">Add to local storage</button>
                        <button onClick={handleRemove} className="btn btn-primary  btn-sm">remove from localstroge</button>
                        <h5 className="card-title">Name : {items.login} </h5>
                        <h5 className="card-title">Public Repositories : {items.public_repos} </h5>
                        <h5 className="card-title">Location : {items.location} </h5>

                        <ul>
                            {repo.slice(0, 5).map((repo, index) => (
                                <li key={index + 1}>
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {repo.html_url}
                                    </a>
                                </li>

                            ))}

                        </ul>

                    </div>
                </div>





            )
}

export default SearchResult
