import { Link } from 'react-router-dom'

export default function TabelaPaises({ paises }) {
    return (
        <div className="App">
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Continente</th>
                    <th>Capital</th>
                    <th>Bandeira</th>
                </thead>
                <tbody>
                    {paises.map((pais) => 
                        <tr>
                            <td>{pais.name}</td>
                            <td>
                                <Link to={`/regiao/${pais.region}`}>
                                    {pais.region}
                                </Link>
                            </td>
                            <td>{pais.capital}</td>
                            <td>
                                <img src={pais.flag} width="100" height="100" />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}