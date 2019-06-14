import React from 'react'
const SitePage=(props)=> {
    const post = props.data.post
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />
}

export default SitePage
