import Card from "@/components/RepositoryContainer/Card";
import { Repo } from "@/types/repo";

type RepositoryContainerProps = {
  repos: Repo[]
}

function RepositoryContainer(props: RepositoryContainerProps) {
  const { repos } = props;

  return (
    <div className="flex flex-col mt-12 gap-8">
      {repos.map((repo, index) => <Card owner={repo.owner} repoName={repo.repoName} repoDescription={repo.repoDescription ?? ''} key={index} />)}
    </div>
  );
}

export default RepositoryContainer;