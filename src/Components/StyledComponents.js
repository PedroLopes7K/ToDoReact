import style from 'styled-components'

export const Card = style.div`
width: ${props => props.width};
height: ${props => props.height};
background-color: ${props => props.background};
border: 2px solid black;
text-align: center;
margin: 10px 0;
color: white
`
export const Button = style.button`
background-color: rgb(42, 42, 216);
color: white;
width: 120px;
height: 30px;
border-radius: 5px;
cursor: pointer;
`

export const Input = style.input`
margin: 10px 0;
width: 190px;
height: 30px;
border-radius: 10px;
`
