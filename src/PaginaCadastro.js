import {useState} from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function PaginaCadastro(){
    const navigate=useNavigate()
    const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const [dados,setDados]=useState({email:'',name:'',image:'',password:''})
    
    function finalizarCadastro(event){
        event.preventDefault()
        
        const promessa=axios.post(URL,dados)
        promessa.then((resposta)=>{
            console.log('conta criada')
            navigate('/')
        })
        promessa.catch((erro)=>{
            console.log(erro.status)
            alert('Algo deu errado')
        })
    
    }
    return(
        <Div>
            <div></div>
            <h1>TrackIt</h1>
            <form onSubmit={finalizarCadastro}>
                <input
                    placeholder='email'
                    onChange={(e)=>setDados({...dados,email:e.target.value})}
                    value={dados.email} />
                <input
                    placeholder='senha'
                    type='password'
                    onChange={(e)=>setDados({...dados,password:e.target.value})}
                    value={dados.password} />
                <input
                    placeholder='nome'
                    onChange={(e)=>setDados({...dados,name:e.target.value})}
                    value={dados.name} />
                <input
                    placeholder='foto'
                    onChange={(e)=>setDados({...dados,image:e.target.value})}
                    value={dados.image} />
                <button type='submit'>Cadastrar</button>
            </form>
            <Link to='/'>
                <h2>Já tem uma conta? Faça login!</h2>
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
        color:#757575;font-size:20px;
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