import { Link, useLoaderData } from 'remix';
import { getClient } from '../../lib/sanity/getClient.js'

// export const loader = async ({ params }) => {
//     console.log(params)
//     const streams = await getClient().fetch(
//         `*[_type == "post" && "${params.category}" in categories[]->title]{_id, title, slug, categories[0]->{title}}`
//     )

//     return streams
// }

export default function CategoryIndex() {
    return <><h1>Episode test</h1></>
}