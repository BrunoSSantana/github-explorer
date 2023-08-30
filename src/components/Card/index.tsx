import { emojify } from "node-emoji"
import { useState } from "react";

import { pipe } from "@/utils/pipe";
import { env } from "@/config";

const { APP_GITHUB_TOKEN } = env;

type CardProps = {
    owner: string;
    repoName: string;
}

const handleEmoji = (description: string) => emojify(description);

function Card(props: CardProps) {
    const { owner, repoName } = props;

    const repoUrl = `https://github.com/${owner}/${repoName}`;
    const avatarUrl = `https://github.com/${owner}.png`;

    const [repoDescription, setRepoDescription] = useState<string>('');

    fetch(
        `https://api.github.com/repos/${owner}/${repoName}`, {
        headers: {
                Authorization: `Bearer ${APP_GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28',
        }
    }
    ).then(response => response.json()).then(data => {
        pipe(
            handleEmoji,
            setRepoDescription
        )(data.description)
    });

    const userUrl = `https://github.com/${owner}`

    return (
        <div className="flex flex-row items-center gap-4 hover:border-2 hover:border-white hover:ease-in-out duration-150 p-2 rounded-lg max-w-lg bg-zinc-800">
            <a className="flex-none" href={userUrl} target="_blank">
                <img src={avatarUrl} className="rounded-full w-20" alt="profile woner" />
            </a>
            <div className="flex flex-col">
                <h3 className="text-white font-roboto font-semibold" >{owner}/{repoName}</h3>
                <p className="text-zinc-500 font-roboto">{repoDescription}</p>
            </div>
            <a href={repoUrl} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </a>
        </div >
    );
}

export default Card;