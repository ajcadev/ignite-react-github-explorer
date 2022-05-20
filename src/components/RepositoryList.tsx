import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react";

type Repo = {
  name: string
  description: string
  html_url: string
} 

export function RepositoryList() {
  const [repos, setRepos] = useState<Repo[]>([])
  useEffect(()=> {
    fetch('https://api.github.com/users/ajcadev/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }, [])
  return (
    <section className="repository-list">
      <h1>Listagem dos Repositórios</h1>
      <ul>
        {repos.map(repo => {
          return <RepositoryItem key={repo.name} repo={ repo } />  
        })}
      </ul>
    </section>
  )
}