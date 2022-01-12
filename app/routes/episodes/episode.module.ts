export type EpisodeCategory = {
    name: string;
    slug: string;
    description: string;
}

export type Episode = {
    id: string;
    title: string;

}

export function getEpisodeCategories() {
    const data: EpisodeCategory[] = [
        {
            name: "Pull Up & Code",
            slug: "code",
            description: "Flagship twice-weekly stream where we discuss all things related to code"
        }
    ]

    return data;
}

export function getEpisodeById(episodeId: string) {
    const data: Episode[]  = [
        { 
            id: "1255096231",
            title: "Kicks of the Stream: Pull this from API"
        }
    ]

    return data.filter( ep => ep.id === episodeId)
}