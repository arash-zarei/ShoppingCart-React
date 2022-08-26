import React from 'react';

//Gif
import loading from '../Gifs/loading.gif'

const Loading = () => {
    return (
        <div style={{width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'center', minHeight: '100vh'}}>
            <img src={loading} alt="Loading..." />
        </div>
    );
};

export default Loading;