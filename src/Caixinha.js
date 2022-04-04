
import styled from 'styled-components'
export default function Caixinha({listaDias,setListaDias,letra,numero,estado}){
    function alterarListaDias(){
        const novaLista=[]
        for(let i=0;i<listaDias.length;i++){
            if(i===numero-1){novaLista.push(!listaDias[i])}
            else{novaLista.push(listaDias[i])}
        }
        setListaDias(novaLista)
    }
    
    return(
        <Caixa onClick={alterarListaDias} habilitado={estado} >{letra}</Caixa>
        
        
    )
}
const Caixa=styled.div`
    width:45px;height:45px;
    background: ${props => props.habilitado ? '#52B6FF' : 'white'}};
    border: 1px solid ${props => props.habilitado ? '#52B6FF' : '#D5D5D5'};
    box-sizing: border-box;
    border-radius: 5px;margin-left:10px;
    color:${props => props.habilitado ? 'white' : '#D5D5D5'};font-size:20px;
    font-family: 'Lexend Deca', sans-serif;
    display:flex;align-items:center;justify-content:center;

`