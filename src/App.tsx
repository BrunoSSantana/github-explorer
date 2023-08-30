import { useState } from 'react';

import Header from '@/components/Header'
import RepositoryContainer from '@/components/RepositoryContainer'

const reposDefault = [
  {
    owner: 'diego3g',
    repoName: 'rocketredis'
  },
  {
    owner: 'BrunoSSantana',
    repoName: '30diasDeCSS'
  },
  {
    owner: 'BrunoSSantana',
    repoName: 'mongo-jwt'
  },
  {
    owner: 'BrunoSSantana',
    repoName: 'acomasq-api'
  },
];

function App() {
  const [repos, setRepo] = useState(reposDefault);

  const [search, setSearch] = useState('');

  function handleSearch() {
    const newRepos = search ? repos.filter(repo => repo.repoName.includes(search)) : reposDefault;
    setRepo(newRepos);
  }

  return (
    <>
      <div className="relative isolate overflow-hidden bg-zinc-900 py-16 sm:py-24 lg:py-32 text-white h-screen flex flex-col items-center">
        <div className="flex flex-col justify-start">
          <Header setSearch={setSearch} handleSearch={handleSearch} search={search} />
          <RepositoryContainer repos={repos} />
        </div>
      </div>
    </>
  )
}

export default App
