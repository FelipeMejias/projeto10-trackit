import axios from 'axios'
import {useState,useContext,useEffect} from 'react'
import styled from 'styled-components'
import UserContext from './auxiliares/UserContext'
import TelaCriacao from './TelaCriacao'
import Habito from './Habito'

export default function PaginaHabitos(){
    const {token}=useContext(UserContext)
    const [criandoHabito,setCriandoHabito]=useState(false)
    const [existemHabitos,setExistemHabitos]=useState(false)
    const [listaDeHabitos,setListaDeHabitos]=useState([])

    function mapearHabitos(lista){
        return lista.map((info)=><Habito buscarHabitos={buscarHabitos} info={info}/>)
    }
    
    function buscarHabitos(){
        const URL='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const config = {headers: {"Authorization": `Bearer ${token}`}}
        const promessa=axios.get(URL,config)
        promessa.then((resposta)=>{
            setListaDeHabitos(mapearHabitos(resposta.data))
            if(resposta.data.length>0){
            setExistemHabitos(true)}
        })
    }
    useEffect(()=>{buscarHabitos()},[])
    const mensagemNenhumHabito= <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
    return(
        <>
            <Topo>
                <h1>Meus hábitos</h1>
                <button onClick={()=>setCriandoHabito(true)}>+</button>
            </Topo>
            <Container>
                {criandoHabito ? <TelaCriacao setCriandoHabito={setCriandoHabito} buscarHabitos={buscarHabitos} />:<></>}
                {existemHabitos ? listaDeHabitos : mensagemNenhumHabito}
            </Container>
        </>
    )
}
const Topo=styled.div`
    display:flex;justify-content:space-between;align-items:center;
    height:50px;margin-bottom:10px;
    h1{font-size:30px;color:#126BA5;font-family: 'Lexend Deca', sans-serif;}
    button{
        width: 45px;height: 45px;
        background-color: #52B6FF;
        border-radius: 4.63636px;border:0;
        color:white;font-size:25px;
        font-family: 'Lexend Deca', sans-serif;
    }
`

const Container=styled.div`
    height:60vh;overflow:hidden;overflow-y:scroll;
    h2{font-size:24px;color:#666666;margin-top:20px;font-family: 'Lexend Deca', sans-serif;}
`