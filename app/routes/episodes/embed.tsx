import { useLoaderData } from 'remix';
import {AdvancedVideo} from '@cloudinary/react';
import { CloudinaryVideo } from '@cloudinary/url-gen';
import { Actions, Qualifiers } from '@cloudinary/url-gen'

export type VideoOptions = {
    episodeId?: string;
    publicId: string;
    width: number;
    height: number;
    version: number;
}

export default function VideoEmbed(opts: VideoOptions) {
    console.log("opts", opts)
    const { height, width, publicId, version } = opts;

    const cld = new CloudinaryVideo(publicId, {cloudName: 'breakpointt-studio-llc'})
    const vid = cld.setVersion(version)


    return (
        <AdvancedVideo cldVid={vid} controls />
    )
}