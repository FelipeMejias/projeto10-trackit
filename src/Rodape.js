import {useContext} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import UserContext from './auxiliares/UserContext'
import "react-circular-progressbar/dist/styles.css";

export default function Rodape(){
    const {porcentagem}=useContext(UserContext)
    return(
        <>
            <Footer>
                <Link to='/habitos'><h2>Hábitos</h2></Link>
                <Container>
                    <div>
                    <Link to='/hoje'>
                        <CircularProgressbar 
                        value={porcentagem} text={`Hoje`} styles={buildStyles({
                            textColor: "white",
                            pathColor: "white",
                            trailColor: "#52B6FF",
                            textSize: "25px"
                          })}
                    />
                    </Link></div>
                </Container>
                <Link to='/historico'><h2>Histórico</h2></Link>
            </Footer>
            
        </>
    )
}
const Footer=styled.footer`
    width:100vw;height:70px;
    background-color: #FFFFFF;
    position:fixed;bottom:0;
    display:flex;
    align-items:center;
    justify-content:space-between;

    h2{
        font-size:25px;color:#52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        margin:30px;
    }
`
const Container=styled.div`
    position:fixed;left:calc(50% - 60px);bottom:10px;
    width:120px;height:120px;border-radius:50%;
    background-color:#52B6FF;z-index:2;
    display:flex;justify-content:center;align-items:center;
    div{
        width:100px;height:100px;border-radius:50%;
        background-color:#52B6FF;
        
    }
`