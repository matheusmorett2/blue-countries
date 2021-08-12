import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TabelaPaises from './../components/tabelaPaises'
import axios from 'axios'

export default function Regiao(props) {
    const region = props.match.params.nome
    const [paises, setPaises] = useState([])

    async function buscarPaises() {
        const resposta = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
        setPaises(resposta.data)
    }

    useEffect(() => {
        buscarPaises()
    }, [])

    return (
        <div>
            <h1>Lista de Paises por Regiao</h1>
            <Link to="/">Voltar</Link>
            <TabelaPaises paises={paises}/>
        </div>
    )
}