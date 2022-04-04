import { useState,useEffect} from 'react'
import styled from 'styled-components'
import TelaExclusao from './TelaExclusao'
export default function Habito({info,buscarHabitos}){
    const [dias,setDias]=useState([])
    const [excluindo,setExcluindo]=useState(false)
    function determinarDiaSelecionado(){
        const lista=[]
        for(let i=0;i<7;i++){
            if(info.days.includes(i)){lista.push(true)}
            else{lista.push(false)}
        }
        setDias(lista)
    }
    useEffect(()=>{determinarDiaSelecionado()},[])
    return(
        <>
            <Div>
                <button onClick={()=>{setExcluindo(true)}}>
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
                <span><h1>{info.name}</h1></span>
                <ul>
                    {dias.map((dia,i)=>{
                        let texto
                        switch (i) {
                            case 0:texto='D'; break;
                            case 1:texto='S'; break;
                            case 2:texto='T'; break;
                            case 3:texto='Q'; break;
                            case 4:texto='Q'; break;
                            case 5:texto='S'; break;
                            case 6:texto='S'; break;
                            default:break;
                        }
                        return <Dia habilitado={dia}><p>{texto}</p></Dia>
                    })}
                </ul>
            </Div>
            {excluindo?<TelaExclusao id={info.id} buscarHabitos={buscarHabitos} setExcluindo={setExcluindo}/>:<></>}
        </>
    )
}
const Div=styled.div`
    width: 100%; height: 99px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom:10px;
    position:relative;
    ul{display:flex;align-items:center}
    h1{
        color:#7D7D7D;font-size:25px;margin:10px;
        font-family: 'Lexend Deca', sans-serif;
    }
    button{
        position:absolute;right:10px;top:10px;
        background-color:white;border:0;
    }
    ion-icon{
        font-size:20px;
    }
`
const Dia=styled.div`
    width:45px;height:45px;
    background: ${props => props.habilitado ? '#D5D5D5' : 'white'}};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;margin-left:10px;
    font-size:20px;
    font-family: 'Lexend Deca', sans-serif;
    display:flex;align-items:center;justify-content:center;
    p{color:${props => props.habilitado ? 'white' : '#D5D5D5'};font-size:20px;
        font-family: 'Lexend Deca', sans-serif;}
`