import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss'
import { createGlobalStyle } from 'styled-components';
import { useForm } from 'react-hook-form';
//import axios from "axios";



function Register() {

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
  
    const pwdPattern = /^[a-z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    const nickPattern = /^[a-zA-Z/0-9[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{5,15}/;
    const namePattern = /^[a-zA-Z/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    
    
 

      if(!pwdPattern.test(data.pwd)) {

        alert("비밀번호는 영문 대문자, 특수문자, 숫자 8~16글자입니다. ")
        return;
      }
      if(!nickPattern.test(data.nickname)) {

        alert("닉네임은 영문, 한글, 숫자 5~15글자입니다.")
        return;
      }
      if(!namePattern.test(data.lastname)) {

        alert("이름은 영어와 한글만 들어갈수있습니다.")
        return;
      }
      if(!namePattern.test(data.fisrtname)) {

        alert("성은 영어와 한글만 들어갈수있습니다.")
        return;
      }
      

      // axios({
      //   url: '',
      //   method: 'post',
      //   data: {
      //     query: `
      //       query PostsForAuthor {
      //         author(id: 1) {
      //           ${data}
      //           }
      //         }
      //       `
      //   }
      // }).then((result) => {
      //   console.log(result.data)
      // });

    //GraphQL 들어가는 부분
  }


  return (
    
              
              // <Form onSubmit={handleSubmit(onSubmit)}>
                
              //     <input type="text" name="id" placeholder="Email" ref={register}/>
			        //     <input type="password" name="pwd" placeholder="Password" ref={register}/>
              //     <input type="text" name="nickname" placeholder="NickName" ref={register}/>
              //     <input type="text" name="lastname" placeholder="LastName" ref={register}/>
              //     <input type="text" name="firstname" placeholder="FirstName" ref={register}/>
            
                
              //     <br/>
                
              //       <button type="submit" id="login-button">
              //         회원가입
              //         </button>

              //       <br/>
              //       <br/>  
                    
              //         <Link to="/" style={{ textDecoration: 'none' }}>
              //             <button>
              //               로그인하기
              //             </button>
              //         </Link>
          
                
              // </Form>

            <div id="container">
        <div id="inviteContainerR">
          <div className="acceptContainer loadIn">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="loadIn">계정 만들기</h1>
              <div className="formContainer">

                <div className="formDiv loadIn">
                  <p>이메일</p>
                  <input type="email" name="email" ref={register}/>
                </div>

                <div className="formDiv loadIn">
                  <p>비밀번호</p>
                  <input type="password" name="pwd" ref={register} />
                </div>

                <div className="formDiv loadIn">
                  <p>닉네임</p>
                  <input type="input" name="nickname" ref={register} />
                </div>

                <div className="formDiv loadIn">
                  <p>성</p>
                  <input type="input" name="lastname" ref={register} />
                </div>
                
                <div className="formDiv loadIn">
                  <p>이름</p>
                  <input type="input" name="fisrtname" ref={register} />
                </div>

                <div className="formDiv loadIn" >
                  <button className="acceptBtn" type="submit">Register</button>
                  <span className="register">계정이 있으신가요?<Link to="/">로그인</Link></span>
                </div>

              </div>
            </form>
          </div>
        </div>
        </div>
          
  );
}






export default Register;

