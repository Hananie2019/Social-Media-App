
import React from 'react';
import Post from './components.js/Post.jsx'; // Correct import path


function App() {
    return (
        <div>
            <h1>Fakebook!</h1>
            <Post /> {/* Render the Post component */}
        </div>
    );
}

export default App;