import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300);
        *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        font-weight: 300;
      }

      body{
        font-family: 'Source Sans Pro', sans-serif;
        color: white;
        font-weight: 300;
      }

      @-webkit-keyframes square {
        0%   { transform: translateY(0); }
        100% { transform: translateY(-700px) rotate(600deg); }
      }
      @keyframes square {
        0%   { transform: translateY(0); }
        100% { transform: translateY(-700px) rotate(600deg); }
}

`


// <div>
    //   메인 화면
    //   <br/>
    //   <Link to="/register">회원가입</Link>
    //   <br/>
    //   <Link to="/login">로그인</Link> 
    //   <br/>
    // </div>


function Main() {
  return (
    <Fragment>
    <GlobalStyle/>
    

          <Wrapper>
            <Container>
              <h1>Welcome</h1>
              
              <Form>
                
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    <button id="login-button">
                    로그인
                    </button>
                  </Link>
                
                  <br/>
                
                  <Link to="/register" style={{ textDecoration: 'none' }}>
                    <button id="login-button">
                      회원가입
                      </button>
                    </Link>

                    <br/>

                    <Link to="/createroom" style={{ textDecoration: 'none' }}>
                    <button id="login-button">
                         화상채팅 예제
                      </button>
                    </Link>
          
                
              </Form>
            </Container>
            
          
        </Wrapper>
    </Fragment>
  );
}

const Wrapper = styled.div`
  background: #50a3a2;
  background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 800px;
    margin-top: -400px;
    overflow: hidden;
`;

const Container = styled.div`
  max-width: 600px;
	margin: 0 auto;
	padding: 80px 0;

	height: 400px;
  margin-top: 200px;
	text-align: center;
	
	h1{
		font-size: 40px;
		transition-duration: 1s;
		transition-timing-function: ease-in-put;
		font-weight: 200;
	}
`

const Form = styled.form`
  padding: 20px 0;
	position: relative;
	z-index: 2;
	

	
	button{
		display: block;
		appearance: none;
		outline: 0;
		border: 1px solid fade(white, 40%);
		background-color: rgba(255, 255, 255, 0.2);
		width: 250px;
		
		border-radius: 3px;
		padding: 10px 15px;
		margin: 0 auto 10px auto;
		display: block;
		text-align: center;
		font-size: 18px;
		
		color: white;
		
		transition-duration: 0.25s;
		font-weight: 300;
		
		button:hover{
			background-color: fade(white, 40%);
		}
	}
`






export default Main;
