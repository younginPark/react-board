import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PostsData from '../data/PostsData.ts';
import UsersData from '../data/UsersData.ts';
function SaveData(){

    const save_data = (event) => {
        localStorage.setItem('users_data', JSON.stringify(UsersData.users_data));
        localStorage.setItem('posts_data', JSON.stringify(PostsData.posts_data));
        // localStorage.setItem('posts_data2', JSON.stringify(PostsData.posts_data2));
        // localStorage.setItem('posts_data3', JSON.stringify(PostsData.posts_data3));
        // localStorage.setItem('posts_data4', JSON.stringify(PostsData.posts_data4));
        event.preventDefault();
    }

    const get_data = (event) => {
        const data1 = JSON.parse(localStorage.getItem('posts_data'));
        console.log(data1[0]);
        event.preventDefault();
    }
    return(
        <React.Fragment>
            <button onClick={save_data}>데이터 저장 버튼</button>
            <button onClick={get_data}>데이터 호출 버튼</button>
        </React.Fragment>
    );
}

export default SaveData;