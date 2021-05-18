import React, {useState, useEffect} from 'react';

Date.prototype.yyyymmdd = function(){
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString();
    var dd = this.getDate().toString();
    return yyyy +"-"+(mm[1] ? mm : '0'+mm[0])+"-"+(dd[1] ? dd : '0'+dd[0]);
};

function Update({match, history}){
    const [state, setStatus] = useState({
        id: '',
        author_id: '',
        created: '',
        deleted: '',
        title: '',
        body: ''
    });

    const [idx, setIdx] = useState(0);
    const [tmp_idx, setTmpIdx] = useState(0);

    // var idx = 0;
    // var tmp_idx = 0;

    const post_data = JSON.parse(localStorage.getItem('posts_data'));

    useEffect(() => {
        post_data.map((post) => {
            setTmpIdx(tmp_idx + 1);
            if (post.id === match.params.post_id){
                setIdx(tmp_idx);
                setStatus({
                    id: match.params.post_id,
                    author_id: '',
                    created: post.created,
                    deleted: '',
                    title: post.title,
                    body: post.body
                })
            }
        })
    }, []);
    

    const save_data = (e) => {
        e.preventDefault();
        post_data[match.params.post_id-1].title = state.title;
        post_data[match.params.post_id-1].body = state.body;
        localStorage['posts_data'] = JSON.stringify(post_data);
        e.preventDefault();
        alert("수정 되었습니다!");
        history.push('/');
    }

    const delete_data = (e) => {
        e.preventDefault();
        post_data[match.params.post_id-1].deleted = (new Date).yyyymmdd();
        localStorage['posts_data'] = JSON.stringify(post_data);
        alert("삭제 되었습니다!");
        history.push('/');
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log("state.id: " + match.params.post_id.id);
        if(e.target.name == 'title'){
            setStatus(prevState => {
                return {...state, title: e.target.value}
            });
        }
        else if(e.target.name == 'body'){
            setStatus(prevState => {
                return {...state, body: e.target.value}
            });
        }
    };

    return(
        <React.Fragment>
            <form>
                <input name="title" value={state.title} onChange={handleChange}/>
                <div>현재 입력되고 있는 값: {state.title}</div>
                <div>{idx}, {tmp_idx}</div>
                <input name="body" value={state.body} onChange={handleChange}/>
                <button onClick={save_data}>수정 저장</button>
                <button onClick={delete_data}>삭제</button>
            </form>
        </React.Fragment>
    );
}

export default Update;