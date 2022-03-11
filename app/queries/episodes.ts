import { getClient } from "~/lib/sanity/getClient";
import { Episode } from "~/types/episodes";

export const getPostByIdQuery = async (id: string) => {
    const result: Array<Episode> = await getClient().fetch(
        `
            *[_type == "post" && _id == "${id}"]
            {_id, title, slug, broadcastDate, runtime, categories[0]->{title}, streamVideo}
        `)

    return result.length && result[0];
}

export const getPostsByCategoryQuery = async (category: string) => {}