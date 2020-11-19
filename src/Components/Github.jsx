import { useState, useEffect } from 'react'

const Github = () => {
    const [repositories, setRepositories] = useState([])
    const [filtroRepos, setFiltroRepos] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.github.com/users/LarisseLima/repos')
            const data = await response.json()
            setRepositories(data)
        }
        getData()

    }, [])

    useEffect(() => {
        setFiltroRepos(
            repositories.filter(repo => {
                return repo.name.includes(busca)
            }
            )
        )
    }, [busca, repositories])

    return (
        <div>
            <h1>Meus repositórios no GitHub 😻</h1>
            <input
                type="text"
                placeholder="Digite um repo"
                onChange={e => { setBusca(e.target.value) }}
            />


            <ul>{filtroRepos.map(repo => {
                return <li key={repo.id}>{repo.name}</li>
            })}</ul>
        </div>
    )
}

export default Github