import {useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import ListaHabitosHoje from './ListaHabitosHoje'
import UserContext from './auxiliares/UserContext'
export default function PaginaHoje(){
    const {porcentagem}=useContext(UserContext)
    const semana=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
    const dayjs=require('dayjs')
    const [diaDaSemana,setDiaDaSemana]=useState('')
    const string=dayjs().format()
    function calcularDiaDaSemana(){
        
        let diasMes=4
        switch(string[6]){
            case '5':diasMes=34;break;
            case '6':diasMes=65;break;
            case '7':diasMes=95;break;
            default:break;
        }
        const [d1,d2,m1,m2]=[string[8],string[9],string[5],string[6]]
        const numero=parseInt(string[8]+string[9])+diasMes
        setDiaDaSemana(`${semana[numero%7]}, ${d1}${d2}/${m1}${m2}`)
    }
    useEffect(calcularDiaDaSemana,[])
    return(
        <Div>
            <h1>{diaDaSemana}</h1>
            <h2>{porcentagem===0?<small>Nenhum hábito concluído ainda</small>:<strong>{porcentagem}% dos hábitos concluídos</strong>}</h2>
            <ListaHabitosHoje />
        </Div>
    )
}
const Div=styled.div`
    
    h1{font-size:30px;color:#126BA5;font-family: 'Lexend Deca', sans-serif;}
    h2{
        font-size:20px;font-family: 'Lexend Deca', sans-serif;
        margin-bottom:10px;margin-top:10px;
    }
    small{color:#BABABA}
    strong{color:#8FC549}
    
`