import React from 'react';
import spinner from '../../img/spinner.gif'

function Spiner() {
    return (
        <img src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading'
        />
    )
}

export default Spiner
