import  SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: '6vgf23kp',
    dataset: 'production',
    apiVersion: '2024-03-16',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

