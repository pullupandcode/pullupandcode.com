import { useLoaderData } from "remix";
import MainNav from "~/components/header/MainNav";
import VideoEmbed from "./embed";
import { getPostByIdQuery } from "~/queries/episodes";

export const loader = async ({ params }: any) => {
    return await getPostByIdQuery(params.id)
}

export default function CodeEpisode() {
    const content = useLoaderData()

    return (
    <section className="max-w-7xl mx-auto text-lg">
        <MainNav />
        <VideoEmbed height={content.streamVideo.height} width={content.streamVideo.width} publicId={content.streamVideo.public_id} version={content.streamVideo.version} />
        <div className="video-metadata-container grid grid-cols-12 mt-5">
            <div className="col-span-4">
                <dl className="mb-4">
                    <dt className="font-bold">Episode {content.streamVideo.version}</dt>
                    <dd>Title would go here</dd>
                </dl>
                <dl className="mb-4">
                    <dt className="font-bold">Runtime: </dt>
                    <dd>{content.runtime}</dd>
                </dl>
                <dl className="mb-4">
                    <dt className="font-bold">Date Streamed: </dt>
                    <dd>{content.broadcastDate}</dd>
                </dl>
                <dl className="mb-4">
                    <dt className="font-bold">Tags</dt>
                    <dd>Code TypeScript CSS Twitch</dd>
                </dl>
            </div>
            <div className="col-span-6 col-start-7 overflow-y-scroll h-96">
                <p className="px-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor sed mi eget facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere enim vel nunc dignissim, quis blandit ante auctor. Curabitur mattis ipsum eu enim finibus, eget cursus purus ornare. Mauris vehicula ultricies egestas. Fusce molestie magna vel dolor venenatis rhoncus. Proin cursus ornare efficitur. Quisque dapibus lorem sit amet augue ornare, sed ornare augue venenatis. Pellentesque placerat viverra diam. Aliquam quis commodo elit. Nam consequat mattis leo. Duis in porta ante, mattis pellentesque felis. Donec sed magna vestibulum, congue ex non, efficitur nibh. In placerat diam sit amet tellus congue, in suscipit est congue.</p>
                 <p className="px-4 mt-2">
                 Curabitur ut dictum massa. Donec luctus nunc sit amet aliquet efficitur. Ut hendrerit maximus arcu ut tristique. Nunc efficitur est arcu, consequat sagittis ante maximus a. Donec ultrices eleifend tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat augue tortor, et dictum tortor vulputate eu. Nulla id volutpat nulla, a semper metus. Fusce faucibus est orci, ac luctus sapien feugiat vel. Donec mollis gravida metus. Integer ultricies sem eget blandit condimentum.
                 </p>
                 <p className="px-4 mt-2">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor sed mi eget facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere enim vel nunc dignissim, quis blandit ante auctor. Curabitur mattis ipsum eu enim finibus, eget cursus purus ornare. Mauris vehicula ultricies egestas. Fusce molestie magna vel dolor venenatis rhoncus. Proin cursus ornare efficitur. Quisque dapibus lorem sit amet augue ornare, sed ornare augue venenatis. Pellentesque placerat viverra diam. Aliquam quis commodo elit. Nam consequat mattis leo. Duis in porta ante, mattis pellentesque felis. Donec sed magna vestibulum, congue ex non, efficitur nibh. In placerat diam sit amet tellus congue, in suscipit est congue.</p>
                 <p className="px-4 mt-2">
                 Curabitur ut dictum massa. Donec luctus nunc sit amet aliquet efficitur. Ut hendrerit maximus arcu ut tristique. Nunc efficitur est arcu, consequat sagittis ante maximus a. Donec ultrices eleifend tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat augue tortor, et dictum tortor vulputate eu. Nulla id volutpat nulla, a semper metus. Fusce faucibus est orci, ac luctus sapien feugiat vel. Donec mollis gravida metus. Integer ultricies sem eget blandit condimentum.
                 </p>
            </div>

        </div>

        <div className="grid grid-cols-12 mt-10">
            <div className="col-span-12">
                <h2 className="text-2xl font-semibold">Recent Episodes of Pull Up &amp; Code</h2>
            </div>

            {/* Video Row */}
            <div className="col-span-4">test</div>
            <div className="col-span-4"> one</div>
            <div className="col-span-4"> two</div>
        </div>
    </section>
    )
}
