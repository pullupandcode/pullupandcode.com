import { Link, useLoaderData } from "remix";
import { EpisodeCategory, getEpisodeCategories } from "./episode.module";

export const loader = () => {
    return getEpisodeCategories()
}

export default function EpisodeIndex() {
    const data = useLoaderData<EpisodeCategory[]>()
    console.log(data)
    return (
        <div className="max-w-7xl">
            <header className="ml-4 p-4">
                <h1 className="font-bold text-3xl">Episodes of Pull Up &amp; Code</h1>
            </header>

            {/* start category section of videos */}
            <section className="p-4">
                {data.map(category => (
                    <div className="category-card" key={category.slug}>
                        <h2 className="category-card-title"><Link to={category.slug}>{category.name}</Link></h2>
                        <p className="italic">{category.description}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}