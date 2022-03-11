export type EpisodeCategory = {
    name: string;
    slug: string;
    description: string;
}

export function getEpisodeCategories() {
    const data: EpisodeCategory[] = [
        {
            name: "Pull Up & Code",
            slug: "code",
            description: "Flagship twice-weekly stream where we discuss all things related to code"
        },
        {
            name: "Kicks of the Stream",
            slug: "kicks",
            description: "See all the pairs of kicks we've highlighted from our collection on Pull Up & Code "
        },
        {
            name: "Pull Up & Chill",
            slug: "chill",
            description: "Pull up to our past community streams where we chat, game, cook or... just chill!"
        }
    ]

    return data;
}