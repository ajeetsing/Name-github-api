import React, { useState } from 'react';


function Search({ query }) {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        query(q)
    };

    return (
        <section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search github user '
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
