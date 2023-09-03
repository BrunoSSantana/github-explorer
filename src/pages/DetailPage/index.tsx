import { emojify } from 'node-emoji';
import { useEffect, useState } from 'react';

import { Repo } from '@/types/repo';
import RepoDetail from '@/components/RepoDetail';
import RepositoryContainer from '@/components/RepositoryContainer'

const handleEmoji = (description?: string) => description ? emojify(description) : '';

function DetailPage() {
  const [repos, setRepo] = useState<Repo[]>([]);

  const currentRepo = window.location.pathname.replace('/', '');
  const [repoDescription, setRepoDescription] = useState('');

  const [owner, repoName] = currentRepo.split('/');

  useEffect(() => {
    handleRepos(owner);
  });

  useEffect(() => {
    handleRepoDescription(owner, repoName);
  });


  async function handleRepos(owner: string) {
    const data = await (await fetch(`https://api.github.com/users/${owner}/repos`)).json();


    const newRepos = data?.map((repo: { name: string, description: string }) => {
      const repoResult = {
        owner,
        repoName: repo.name,
        repoDescription: handleEmoji(repo.description)
      }

      return repoResult;
    });

    setRepo(newRepos);
  }

  async function handleRepoDescription(owner: string, repoName: string) {
    const data = await (await fetch(`https://api.github.com/repos/${owner}/${repoName}`)).json();
    setRepoDescription(data.description);
  }


  return (
    <>
      <div className="relative isolate overflow-hidden bg-zinc-900 py-16 sm:py-24 lg:py-32 text-white min-h-screen flex flex-col items-center">
        <div className="flex flex-col justify-start">
          <RepoDetail owner={owner} repoName={repoName} repoDescription={repoDescription} />
          <RepositoryContainer repos={repos} />
        </div>
      </div>
    </>
  )
}

export default DetailPage;