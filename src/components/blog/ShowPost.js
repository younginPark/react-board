import React from 'react';
import {Link} from 'react-router-dom';
import PostsData from '../../data/PostsData.ts';
import UsersData from '../../data/UsersData.ts';
function ShowPost({match}){

    const post_data = JSON.parse(localStorage.getItem('posts_data'));
    const need_data = post_data.map((post) => {
        if (post.id === match.params.post_id){
            return (
                <React.Fragment>
                    <h1>{post.title}</h1>
                    <div>
                        <span>{post.author_id}</span>
                        <span> / {post.created}</span>
                    </div>
                    <div>
                        <textarea value={post.body} disabled/>
                    </div>
                    <div>
                        <button><Link to={`/update/${post.id}`}>편집</Link></button>
                    </div>
                </React.Fragment>
            )
        }
    })

    return(
        <React.Fragment>
            {need_data}
        </React.Fragment>
    );
}

export default ShowPost;