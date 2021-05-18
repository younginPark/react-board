import React, {useState} from 'react';

Date.prototype.yyyymmdd = function(){
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth() + 1).toString();
  var dd = this.getDate().toString();
  return yyyy +"-"+(mm[1] ? mm : '0'+mm[0])+"-"+(dd[1] ? dd : '0'+dd[0]);
};

function Create({history}) {

  const [state, setState] = useState({
    id: '',
    author_id: '',
    created: '',
    deleted: '',
    title: '',
    body: ''
  });

  const post_data = JSON.parse(localStorage.getItem('posts_data'));

  var maxId = post_data.map(function(id) {
    return id.id;
  });
  maxId = Math.max.apply(null, maxId);

  const save_post = () => {
    state.id = (maxId+1).toString();
    state.created = (new Date).yyyymmdd();
    post_data.push(state);
    localStorage['posts_data'] = JSON.stringify(post_data);
    alert('저장되었습니다!');
    history.push('/');
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    if(e.target.name == 'title'){
        state.title = e.target.value;
    }
    else if(e.target.name == 'author'){
        state.author_id = e.target.value;
    }

    else if(e.target.name == 'content'){
      state.body = e.target.value;
  }
};

  return (
    <React.Fragment>
        <h2>새글 쓰기</h2>
            <form>
                <label for="title">제목</label>
                <input type="text" id="title" name="title" onChange={handleChange}/> 
                <label for="author">글쓴이</label>
                <input type="text" id="author" name="author" onChange={handleChange}/>
                <br/>
                <textarea id="content" name="content" rows='30' cols='100' class="content-text" onChange={handleChange}></textarea>
                <br/>
                <button onClick={save_post}>저장하기</button>
            </form>
    </React.Fragment>
  );
}

export default Create;
