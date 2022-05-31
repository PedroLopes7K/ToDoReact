import style from 'styled-components'

export const Card = style.div`
width: ${props => props.width};
padding: 10px;
background-color: ${props => props.background};
border: none;
display: flex;
flex-direction: column;
text-align: center;
margin: 10px 0;
color: white
`
export const Button = style.button`
background-color: rgb(42, 42, 216);
color: white;
width: 100px;
height: 30px;
border-radius: 5px;
cursor: pointer;
border: none;
margin: 0 5px;
`

export const Input = style.input`
margin: 10px 0;
width: 190px;
height: 30px;
border-radius: 10px;
`
