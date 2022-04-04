import styled from 'styled-components'
import {useState,useContext} from 'react'
import Caixinha from './Caixinha'
import axios from 'axios'

import UserContext from './auxiliares/UserContext'
export default function TelaCriacao({setCriandoHabito,buscarHabitos}){
    const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
    const {token}=useContext(UserContext)
    const [nome,setNome]=useState('')
    const [listaDias,setListaDias]=useState([false,false,false,false,false,false,false])
    function cancelarCriacao(){
        setCriandoHabito(false)
        setNome('')
        setListaDias([false,false,false,false,false,false,false])
    }
    function salvarCriacao(){
        const dias= []
        for(let i=0;i<listaDias.length;i++){if(listaDias[i]){dias.push(i)}}
        const config = {headers: {"Authorization": `Bearer ${token}`}}
        const promessa =axios.post(URL,{
            name:nome,
            days:dias
        },config)
        promessa.then((resposta)=>{
            buscarHabitos()
            setCriandoHabito(false)
            setNome('')
            setListaDias([false,false,false,false,false,false,false])
        })
        promessa.catch((erro)=>console.log(erro.response.data))
    }
    return(
        <Div>
            <input 
                placeholder='nome do hábito'
                onChange={(e)=>setNome(e.target.value)}
                value={nome} />
            <div>
                <Caixinha letra='D' numero={1} estado={listaDias[0]} listaDias={listaDias} setListaDias={setListaDias}/>
                <Caixinha letra='S' numero={2} estado={listaDias[1]} listaDias={listaDias} setListaDias={setListaDias} />
                <Caixinha letra='T' numero={3} estado={listaDias[2]} listaDias={listaDias} setListaDias={setListaDias} />
                <Caixinha letra='Q' numero={4} estado={listaDias[3]} listaDias={listaDias} setListaDias={setListaDias} />
                <Caixinha letra='Q' numero={5} estado={listaDias[4]} listaDias={listaDias} setListaDias={setListaDias} />
                <Caixinha letra='S' numero={6} estado={listaDias[5]} listaDias={listaDias} setListaDias={setListaDias} />
                <Caixinha letra='S' numero={7} estado={listaDias[6]} listaDias={listaDias} setListaDias={setListaDias} />
            </div>
            <Botoes>
                <button onClick={()=>cancelarCriacao()}>
                    Cancelar
                </button>
                <button onClick={()=>salvarCriacao()} className='salvar'>
                    Salvar
                </button>
            </Botoes>
        </Div>
    )
}
const Div=styled.div`
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;

    input{
        width:90%;height:45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;;margin:10px;
        color:#666666;font-size:20px;
        font-family: 'Lexend Deca', sans-serif;
    }
    div{
        display:flex;align-items:center;
    }
    button{
        width: 120px;height: 45px;
        background-color: white;
        border-radius: 4.63636px;border:0;margin-right:10px;
        color:#52B6FF;font-size:20px;
        font-family: 'Lexend Deca', sans-serif;
    }
    .salvar{background-color:#52B6FF;color:white}
`
const Botoes=styled.div`
    width:100%;display:flex;align-items:center;
    justify-content:flex-end;height:70px
`