import { useLoaderData } from "remix";
import TwitchEmbed from "../embed";
import { Episode, getEpisodeById } from "../episode.module";

export const loader = async ({ params }) => {
    return getEpisodeById(params.episodeId)
}

export default function CodeEpisode() {
    const episode = useLoaderData<Episode[]>()[0];
    console.log(episode)
    return (
    <>
        <h2 className="h2">{episode.title}</h2>
        <TwitchEmbed episodeId={episode.id} />
    </>
    )
}

//1255096231