
import React from 'react';
import Post from './components.js/Post.jsx'; // Correct import path


function App(){ 
  return(
    <div>
      <h1>Fakebook!</h1>
      
        {/* CreatePostForm */}
        
        {/* Feed */}
        
        <Post content="This is a test post!" />
        <Post content="This is another test post!" />
    
    </div>
  )
}
export default App