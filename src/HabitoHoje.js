import UserContext from './auxiliares/UserContext'
import { useContext} from 'react'
import styled from 'styled-components'
import axios from 'axios'
export default function HabitoHoje({refresh,info}){
    const {token}=useContext(UserContext)
    const URL_feito=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/check`
    const URL_desfeito=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/uncheck`
    const config = {headers: {"Authorization": `Bearer ${token}`}}
    function marcarComoFeito(){
        const promessa=axios.post(URL_feito,{},config)
        promessa.then((resposta)=>{
            refresh()
        })
    }
    function marcarComoDesfeito(){
        const promessa=axios.post(URL_desfeito,{},config)
        promessa.then((resposta)=>{
            refresh()
        })
    }
    return(
        <Div>
            <div>
                <h3>{info.name}</h3>
                <h4>Sequência atual: {info.currentSequence} dias</h4>
                <h4>Seu recorde: {info.highestSequence} dias</h4>
            </div>
            <Botao onClick={info.done ? marcarComoDesfeito : marcarComoFeito} habilitado={info.done}>
                <ion-icon name="checkbox-outline"></ion-icon>
            </Botao>
        </Div>
    )
}
const Div=styled.div`
    width: 100%; height: 110px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom:10px;
    display:flex;justify-content:space-between;
    h3{
        color:#666666;font-size:24px;margin:10px;
        font-family: 'Lexend Deca', sans-serif;
    }
    h4{font-size:18px;font-family: 'Lexend Deca', sans-serif;color:#666666;margin-left:10px;}
    ion-icon{
       
    
`
const Botao=styled.button`
    display:flex;justify-content:center;align-items:center;
    background-color:white;border:0;


    ion-icon{ font-size:85px;margin-right:5px;
        color:white;background-color:${props => props.habilitado ? '#8FC549' : '#E7E7E7'};}
`