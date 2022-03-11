export type Episode = {
    streamVideo: CloudinaryVideo;
    title: string;
    runtime: string;
    slug: SanitySlug;
    broadcastDate: string;
    publishedAt: string;
    body: PortableText;
    author: SanityAuthor;
    categories: Array<SanityCategory>;
    tags: Array<SanityTag>;
    mainImage: SanityImage;
}

export type CloudinaryVideo = {
    _key: string;
    _type: string;
    _version: Number;
    access_mode: string;
    bytes: Number;
    created_at: string;
    created_by:{
        id: string;
        type: string;
    }
    duration: Number;
    format: string;
    height: Number;
    metadata:[];
    public_id: string;
    resource_type: string;
    secure_url: string;
    tags: Array<any>;
    type: string;
    uploaded_by:{
        id: string;
        type: string;
    }
    url: string;
    version: Number;
    width: Number;
}

export type SanitySlug = {
    _type: string;
    current: string;
}

export type SanityAuthor = {
    _ref: string;
    type: "reference";
}

// TODO: How does the shape of a category or tag change when getting it via GROQ?
export type SanityCategory = {} 
export type SanityTag = {}

export type SanityImage = {
    type: string;
    asset: {
        _ref: string;
        type: "reference";
    }
}

export type PortableText = Array<any>;