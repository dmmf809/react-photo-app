import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

export const FormItems = styled.div`
    width: 350px;
    padding: 40px 55px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
`

export const FormTitle = styled.h1`
    text-align: center;
`

export const FormInput = styled.input`
    width: 240px;
    padding: 10px;
    padding-left: 40px;
    letter-spacing: 1px;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;
    background-color: #f5f5f5;
    outline: 0;

    ${(props) => props.invalid && 
      `outline-color: red; 
       color: black;`}

    &:focus {
      color: black; 
    }
`

export const FormIcon = styled.p`
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 15px;`};
    ${(props) => !props.right && `left: 15px;`};

`

export const FormLabel = styled.p`
    text-align: left;
    font-weight: 13px;
    font-weight: bold;
    margin-top: 10px;
    margin: 0 auto;
`

export const FormButton = styled.button `
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 14px;
    border: 2px solid #47bcc9;
    border-radius: 25px;
    text-decoration: none!important;
    transition: ease-in-out 0.3s;
    margin: 15px auto;
    outline: 0px !important;

    &:hover {
      background-color: #47bcc9;
      color: white;
      cursor: pointer;
    }
`

export const FormErrorMsg = styled.div`
    font-size: 11px;
    color: red;
    margin-top: -5px;
    margin-bottom: 5px;
    text-align: left;
`

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : "blue")};
    padding: 2px;
    margin-top: 10px;
`