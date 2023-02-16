
import React, { useState } from 'react'
import { createContext } from "react";

export const PostContext= createContext(null)


function Post({children}) {
  const [postDetailes,setPostDetailes] = useState(null)
 return(
    <PostContext.Provider value={{postDetailes,setPostDetailes}}>
        {children}
    </PostContext.Provider>
 )
}

export default Post