import React, {useState} from 'react';
import {useHistory} from "react-router";

function Register() {
  const [state, setStatus] = useState({
    id: '',
    username:'',
    password:''
  });

  const history = useHistory();

  const user_data = JSON.parse(localStorage.getItem('users_data'));

  var maxId = user_data.map(function(id) {
    return id.id;
  });
  maxId = Math.max.apply(null, maxId);

  const check_register = (e) => {
    var register_check = true;
    user_data.map((user) => {
      if (user.username == state.username){
        register_check = false;
      }
    });

    if (register_check == true){
      state.id = (maxId+1).toString(); //이거 좀 이상함
      user_data.push(state);
      localStorage['users_data'] = JSON.stringify(user_data);
      alert("등록되었습니다!");
    }
    else {
      alert("등록에 실패하였습니다!");
    }
    e.preventDefault();
  }

  const handleChange = (e) => {
    if(e.target.name == 'username'){
      setStatus(prevState => {
        return {...state, username: e.target.value}
      });
    }
    else if(e.target.name == 'password'){
      setStatus(prevState => {
        return {...state, password: e.target.value}
      });
    }
  }

  return (
    <React.Fragment>
        <h2>Register</h2>
        <form>
            <label for="register_id">ID</label>
            <input type="text" id="register_id" name="username" onChange={handleChange}/> 
            <br/>
            <label for="register_pwd">Password</label>
            <input type="text" id="register_pwd" name="password" onChange={handleChange}/>
            <br/>
            <button onClick={check_register}>등록</button>
        </form>
    </React.Fragment>
  );
}
export default Register;
