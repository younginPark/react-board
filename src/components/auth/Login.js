import React, {useState} from 'react';
import {useHistory} from "react-router";

function Login() {
  const [state, setStatus] = useState({
    'username':'',
    'password':''
  });

  const history = useHistory();

  const user_data = JSON.parse(localStorage.getItem('users_data'));
  const check_bool = () => {
    var login_check = false;
    user_data.map((user) => {
      if (user.username == state.username && user.password == state.password){
        login_check = true;
      }
    });

    if (login_check == true){
      alert("로그인에 성공하셨습니다!");
      window.sessionStorage.setItem("login", true);
      history.push({
        pathname: '/',
        state: {userName: state.username}
      })
    }
    else {
      alert("로그인에 실패하셨습니다!!");
    }
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

// const loginOrLogout = () => {
//   if (props.location.state.login){
//     //Logout

//   }
//   else{

//   }
// }

  return (
    <React.Fragment>
      <h2>Login</h2>
          <form>
              <label for="login_id">ID</label>
              <input type="text" id="login_id" name="username" onChange={handleChange}/> 
              <br/>
              <label for="login_pwd">Password</label>
              <input type="text" id="login_pwd" name="password" onChange={handleChange}/>
              <br/>
              <button onClick={check_bool}>로그인</button>
          </form>
    </React.Fragment>
  );
}

export default Login;
