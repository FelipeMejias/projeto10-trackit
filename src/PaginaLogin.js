import {Link,useNavigate} from 'react-router-dom'
import {useState,useContext} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserContext from './auxiliares/UserContext'

export default function PaginaLogin({setLinkImagem}){
    const navigate=useNavigate()
    const {setToken}=useContext(UserContext)
    const URL= 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
    const [dados,setDados]=useState({email:'',password:''})
    function finalizarLogin(event){
        event.preventDefault()
        const promessa=axios.post(URL,dados)
        promessa.then((resposta)=>{
            setLinkImagem(resposta.data.image)
            setToken(resposta.data.token)
            navigate('/hoje')
        })
        promessa.catch((erro)=>{
            console.log(erro.response.data)
            alert('Algo deu errado')
        })
    }
    
    return(
        <Div>
            <div></div>
            <h1>TrackIt</h1>
            <form onSubmit={finalizarLogin}>
                <input 
                    placeholder='email'
                    onChange={(e)=>setDados({...dados,email:e.target.value})}
                    value={dados.email} />
                <input 
                    placeholder='senha'
                    type='password'
                    onChange={(e)=>setDados({...dados,password:e.target.value})}
                    value={dados.password} />
                <button type='submit'>Entrar</button>
            </form>
            <Link to='/cadastro'>
                <h2>Não tem uma conta? Cadastre-se!</h2>
            </Link>
        </Div>
    )
}
const Div =styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100vw;height:100vh;
    background-color:#FFFFFF;
    position:absolute;z-index:2;top:0;left:0;
    div{
        background-color:blue;
        width:300px; heigth:60px;
    }

    form{
        display:flex;
        flex-direction:column
    }

    input{
        width:300px;height:45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;;margin:3px;
        color:#666666;font-size:20px;
        font-family: 'Lexend Deca', sans-serif;
    }

    button{
        width: 300px;height: 45px;
        background-color: #52B6FF;
        border-radius: 4.63636px;border:0;margin:3px;
        color:white;font-size:20px;
        font-family: 'Lexend Deca', sans-serif;
    }

    h1{
        font-size:70px;color:#126BA5;
        font-family: 'Playball', cursive;
        margin-bottom:40px;
    }

    h2{
        font-size:14px;color:#52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        margin-top:25px;
    }
`