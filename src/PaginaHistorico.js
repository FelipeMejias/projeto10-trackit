import {useState} from 'react'
import styled from 'styled-components'

export default function PaginaHistorico(){
    return(
        <Div>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Div>
    )
}
const Div=styled.div`

    h1{font-size:30px;color:#126BA5;font-family: 'Lexend Deca', sans-serif;}
    h2{font-size:24px;color:#666666;margin-top:20px;font-family: 'Lexend Deca', sans-serif;}
`