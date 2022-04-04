import ReactDOM from 'react-dom'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import PaginaHabitos from './PaginaHabitos'
import PaginaHoje from './PaginaHoje'
import PaginaCadastro from './PaginaCadastro'
import Menu from './Menu'
import Rodape from './Rodape'
import PaginaLogin from './PaginaLogin'
import PaginaHistorico from './PaginaHistorico'
import './auxiliares/reset.css'
import UserContext from './auxiliares/UserContext'
import { useState } from 'react'
import styled from 'styled-components'

function App(){
    const [token,setToken]=useState()
    const [porcentagem,setPorcentagem]=useState(0)
    const [linkImagem,setLinkImagem]=useState('')
    return(
        <UserContext.Provider value={{token,setToken,porcentagem,setPorcentagem}}>
        <BrowserRouter>
            <Menu linkImagem={linkImagem} />
            <Rodape />
            <Fundo><main>
            <Routes>
                <Route path='/' element={<PaginaLogin setLinkImagem={setLinkImagem} />} />
                <Route path='/cadastro' element={<PaginaCadastro />} />
                
                <Route path='/habitos' element={<PaginaHabitos />} />
                <Route path='/hoje' element={<PaginaHoje />} />
                <Route path='/historico' element={<PaginaHistorico />} />
            </Routes>
            </main></Fundo>
        </BrowserRouter>
        </UserContext.Provider>
    )
}
const Fundo=styled.div`
    width:100vw;height: calc(100vh - 140px);
    background-color: #F2F2F2;
    margin-top:70px;
    display:flex;align-items:center;justify-content:center;
    main{width:94%;height:92%}
`
ReactDOM.render(<App />,document.querySelector('.root'))