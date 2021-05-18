import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';

function PostList(){
    // console.log(window.sessionStorage.getItem("login")); // null
    var userName = "로그인을 하세요";
    var login = false;
    const location = useLocation();
    if(location.state !== undefined){
        userName = location.state.userName;
        login = true;
    }
    const post_data = JSON.parse(localStorage.getItem('posts_data'));
    const post_map = post_data.map((post) => {
        if(post.deleted === ''){
            const post_id = post.id
            return (
                <tr>
                    <th>{post.id}</th>
                    <th><Link to={`/post/${post_id}`}>{post.title}</Link></th>
                    <th>{post.author_id}</th>
                    <th>{post.created}</th>
                </tr>
            )
        }
    })

    const loginRegister = () => {
        console.log("로그인되어있나: " + window.sessionStorage.getItem("login"));
        if(window.sessionStorage.getItem("login")){
            return <React.Fragment>
                {userName}님 안녕하세요!
            </React.Fragment>
            
        }
        else{
            return <React.Fragment>
                        <button>
                            <Link to={`/login`}>Login</Link>
                        </button>
                        <button>
                            <Link to={`/register`}>Register</Link>
                        </button>
                    </React.Fragment>
        }
    }

    return(
        <React.Fragment>
            <div>
                {loginRegister()}
            </div>
            <h1>게시판</h1>
            <table>
            <tr>
                <th>순번</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
            </tr>
            {post_map}
            </table>
            <button>
                <Link to={`/create`}>글쓰기</Link>
            </button>
        </React.Fragment>
    );
}

export default PostList;