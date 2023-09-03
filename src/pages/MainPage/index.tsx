import { useState } from 'react';

import Header from '@/components/Header'
import RepositoryContainer from '@/components/RepositoryContainer'
import { emojify } from 'node-emoji';
import { Repo } from '@/types/repo';


const handleEmoji = (description?: string) => description ? emojify(description) : '';

function MainPage() {
  const [repos, setRepo] = useState<Repo[]>([]);

  const [search, setSearch] = useState('');

  async function handleSearch() {
    const data = await (await fetch(`https://api.github.com/users/${search}/repos`)).json();


    const newRepos = data?.map((repo: { name: string, description: string }) => {
      const repoResult = {
        owner: search,
        repoName: repo.name,
        repoDescription: handleEmoji(repo.description)
      }

      return repoResult;
    });

    setRepo(newRepos);
  }

  return (
    <>
      <div className="relative isolate overflow-hidden bg-zinc-900 py-16 sm:py-24 lg:py-32 text-white min-h-screen flex flex-col items-center">
        <div className="flex flex-col justify-start">
          <Header setSearch={setSearch} handleSearch={handleSearch} search={search} />
          <RepositoryContainer repos={repos} />
        </div>
      </div>
    </>
  )
}

export default MainPage;