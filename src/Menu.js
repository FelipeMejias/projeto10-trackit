import styled from 'styled-components'

export default function Menu({linkImagem}){
    return(
        <Header>
            <h1>TrackIt</h1>
            <img src={linkImagem} alt='imagem-de-perfil' />
        </Header>
    )
}
const Header=styled.header`
    width:100vw;height:70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position:fixed;top:0;
    display:flex;
    align-items:center;
    justify-content:space-between;

    h1{
        font-size:40px;
        color:white;
        font-family: 'Playball', cursive;
        margin-left:10px;
    }
    img{
        width:50px;height:50px;
        border-radius:50%;
        margin-right:10px;
    }
`