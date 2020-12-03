import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { useForm } from 'react-hook-form';

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
      .wbutton{
        display: block;
        appearance: none;
        outline: 0;
        border: 1px solid fade(white, 40%);
        background-color: rgba(255, 255, 255, 0.2);
        width: 100px;
        
        border-radius: 3px;
        padding: 10px 15px;
        display: block;
        text-align: center;
        font-size: 18px;
        
        color: white;
        
        transition-duration: 0.25s;
        font-weight: 300;
        
        &:hover{
          background-color: fade(white, 40%);
        }
      }

`


function Login() {

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);

    //GraphQL 들어가는 부분
  }


  return (
    <Fragment>
    <GlobalStyle/>
    

          <Wrapper>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <button className={'wbutton'}>
                  홈으로
                </button>
            </Link>

            <Container>
              <h1>로그인</h1>
              
              <Form onSubmit={handleSubmit(onSubmit)}>
                
                  <input type="text" name="id" placeholder="ID" ref={register}/>
			            <input type="password" name="pwd" placeholder="Password" ref={register}/>
            
                
                  <br/>
                
                    <button type="submit" id="login-button">
                      로그인
                      </button>
              

                     <br/>
                    <br/>  
                    
                      <Link to="/register" style={{ textDecoration: 'none' }}>
                          <button>
                            회원가입하기
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
  margin-top: 50px;
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
	
  input{
		display: block;
		appearance: none;
		outline: 0;
		border: 1px solid fade(white, 40%);
		background-color: fade(white, 20%);
		width: 250px;
		
		border-radius: 3px;
		padding: 10px 15px;
		margin: 0 auto 10px auto;
		display: block;
		text-align: center;
		font-size: 18px;
		
		color: #53e3a6;
		
		transition-duration: 0.25s;
		font-weight: 300;
		
		&:hover{
			background-color: fade(white, 40%);
		}
		
		&:focus{
			background-color: white;
			width: 300px;
			
			color: #53e3a6;
		}
	}
	
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
		
		&:hover{
			background-color: fade(white, 40%);
		}
	}
`






export default Login;

