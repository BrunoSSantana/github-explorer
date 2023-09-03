import { Repo } from "@/types/repo";

type RepoDetailProps = Repo;

function RepoDetail({ owner, repoName, repoDescription }: RepoDetailProps) {

  const avatarUrl = `https://github.com/${owner}.png`;

  const userUrl = `https://github.com/${owner}`

  return (<>
    <div className="flex flex-row items-start gap-4 p-2 rounded-lg max-w-lg">
      <a className="flex-none" href={userUrl} target="_blank">
        <img src={avatarUrl} className="rounded-full w-32" alt="profile woner" />
      </a>
      <div className="flex flex-col pt-2 pl-4">
        <h3 className="text-white font-roboto font-normal flex-none text-xl" >{owner}/{repoName}</h3>
        <p className="text-zinc-500 font-roboto flex-initial">{repoDescription}</p>
      </div>

    </div >
    <div className="flex gap-8 pt-8">
      <div>
        <p className="text-xl font-semibold text-zinc-100">1808</p>
        <p className="text-zinc-200 font-light">Stars</p>
      </div>
      <div>
        <p className="text-xl font-semibold text-zinc-100">48</p>
        <p className="text-zinc-200 font-light">Forks</p>
      </div>
      <div>
        <p className="text-xl font-semibold text-zinc-100">67</p>
        <p className="text-zinc-200 font-light">Issues abertas</p>
      </div>
    </div>
  </>
  );
}

export default RepoDetail;