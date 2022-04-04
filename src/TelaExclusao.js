import styled from 'styled-components'
import axios from 'axios'
import { useContext } from 'react'
import UserContext from './auxiliares/UserContext'
export default function TelaExclusao({id,setExcluindo,buscarHabitos}){
    const URL=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
    const {token}=useContext(UserContext)
    function excluirHabito(){
        const config = {headers: {"Authorization": `Bearer ${token}`}}
        const promessa=axios.delete(URL,config)
        promessa.then((resposta)=>{console.log(resposta.data);
            setExcluindo(false);buscarHabitos()})
        promessa.catch((erro)=>console.log(erro.response.data))
    }
    
    return(
        <Div>
            <h1>Você quer excluir o hábito?</h1>
            <div>
                <button onClick={()=>setExcluindo(false)}>
                    Cancelar
                </button>
                <button onClick={()=>excluirHabito()} className='excluir'>
                    Excluir
                </button>
            </div>
        </Div>
    )
}
const Div=styled.div`
    width: 100%;
    height: 99px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display:flex;flex-direction:column;
    align-items:center;
    h1{
        color:#7D7D7D;font-size:25px;margin-top:10px;
        font-family: 'Lexend Deca', sans-serif;
    }
    div{
        width:100%;display:flex;align-items:center;
        justify-content:center;height:65px
    }
    button{
        width: 120px;height: 45px;
        background-color: white;
        border-radius: 4.63636px;border:0;margin:10px;
        color:#52B6FF;font-size:20px;
        font-family: 'Lexend Deca', sans-serif;
    }
    .excluir{background-color:red;color:white}
`
