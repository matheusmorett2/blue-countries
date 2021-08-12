import { useEffect, useState } from 'react'
import TabelaPaises from './../components/tabelaPaises'
import axios from 'axios'

function App() {
  const [paises, setPaises] = useState([])
  const [loading, setLoading] = useState(true)

  async function buscarPaises() {
    const resposta = await axios.get('https://restcountries.eu/rest/v2/all')
    setPaises(resposta.data)
    setLoading(false)
  }

  useEffect(() => {
    buscarPaises()
  }, [])

  if(loading) {
    return (
      <h2>Carregando...</h2>
    )
  }

  return (
      <div>
          <h1>Lista de Paises no Geral</h1>
          <TabelaPaises paises={paises} />
      </div>
  );
}

export default App;
