import UserContext from './auxiliares/UserContext'
import { useContext,useEffect,useState } from 'react'
import axios from 'axios'
import HabitoHoje from './HabitoHoje'
import styled from 'styled-components'
export default function ListaHabitosHoje(){
    const {token}=useContext(UserContext)
    const {setPorcentagem}=useContext(UserContext)
    const [listaHabitosHoje,setListaHabitosHoje]=useState([])
    const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    const config = {headers: {"Authorization": `Bearer ${token}`}}
    function buscarHabitosHoje(){
        const promessa=axios.get(URL,config)
        promessa.then((resposta)=>{
            setListaHabitosHoje(resposta.data)
            let done=0
            for(let i=0;i<resposta.data.length;i++){
                if(resposta.data[i].done===true){done++}
            }
            if(resposta.data.length>0){
                setPorcentagem(Math.round(done*100/resposta.data.length))
            }else{setPorcentagem(0)}
            
        })
        promessa.catch((erro)=>console.log(erro.response.data))
    }
    useEffect(()=>{buscarHabitosHoje()},[])
    return (
        <Ul>
            {listaHabitosHoje.map((info)=><HabitoHoje info={info} refresh={buscarHabitosHoje} />)}
        </Ul>
    )
}
const Ul=styled.ul`
    height:58vh;overflow:hidden;overflow-y:scroll;
`