import Card from "@/components/Card";
import { Repo } from "@/hooks/repo-hooks";

type RepositoryContainerProps = {
  repos: Repo[]
}

function RepositoryContainer(props: RepositoryContainerProps) {
const { repos } = props;

  return (
    <div className="flex flex-col mt-12 gap-8">
      {repos.map((repo, index) => <Card owner={repo.owner} repoName={repo.repoName} key={index} />)}
    </div>
  );
}

export default RepositoryContainer;