import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { useForm } from 'react-hook-form';
// import axios from "axios";


function Login() {

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    // axios({
    //     url: '',
    //     method: 'post',
    //     data: {
    //       query: `
    //         query PostsForAuthor {
    //           author(id: 1) {
    //             ${data}
    //             }
    //           }
    //         `
    //     }
    //   }).then((result) => {
    //     console.log(result.data)
    //   });

    //GraphQL 들어가는 부분

    
  }

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  // setRoom('general')


  return (
            <div id="container">
        <div id="inviteContainer">
          <div className="logoContainer">
              <img className="logo loadIn" alt="logo" src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png"/>
              <img className="text loadIn" alt="logo-text" src="https://monsterratdata.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Image_2020-12-15-10-47-59.png"/>
            </div>
          <div className="acceptContainer loadIn">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="loadIn">돌아오신 것을 환영해요!</h1>
              <div className="formContainer">
                <div className="formDiv loadIn">
                  <p>이메일</p>
                  <input type="email" name="email" onChange={(event) => setName(event.target.value)} ref={register}/>
                </div>
                <div className="formDiv loadIn">
                  <p>비밀번호</p>
                  <input type="password" name="pwd" onChange={(event) => setRoom('general')} ref={register} />
                  <Link className="forgotPas" to="">비밀번호를 잊으셨나요?</Link>
                </div>
                <div className="formDiv loadIn" >
                        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className="acceptBtn" type="submit">Login</button>
              </Link>
                  
                  <span className="register">계정이 필요한가요?<Link to="/register">가입하기</Link></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}






export default Login;

