import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { v1 as uuid } from "uuid";
import { createHashHistory } from 'history'

//import axios from "axios";


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



function CreateRoom() {
  const history = createHashHistory()
  function create(props) {
        const id = uuid();
        history.push(`room/${id}/`);
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
                <button onClick={create}>Create room</button>
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







export default CreateRoom;

