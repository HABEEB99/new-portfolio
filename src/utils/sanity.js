import {
	createClient,
	createPortableTextComponent,
	// createImageUrlBuilder,
	createPreviewSubscriptionHook,
} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
// import ReactTooltip from "react-tooltip";

export const config = {
	/**
	 * Find your project ID and dataset in `sanity.json` in your studio project.
	 * These are considered “public”, but you can use environment variables
	 * if you want differ between local dev and production.
	 *
	 * https://nextjs.org/docs/basic-features/environment-variables
	 **/
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: '2022-06-30', // or today's date for latest
	/**
	 * Set useCdn to `false` if your application require the freshest possible
	 * data always (potentially slightly slower and a bit more expensive).
	 * Authenticated request (like preview) will always bypass the CDN
	 **/
	useCdn: process.env.NODE_ENV === 'production',
};

if (!config.projectId) {
	throw Error('The Project ID is not set. Check your environment variables.');
}

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
// export const PortableText = createPortableTextComponent({
//   ...config,
//   // Serializers passed to @sanity/block-content-to-react
//   // (https://github.com/sanity-io/block-content-to-react)
//   serializers: {
//     types: {
//       code: (props) => (
//         <pre data-language={props.node.language}>
//           <code>{props.node.code}</code>
//         </pre>
//       ),
//     },
//   },
// });

export const client = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(client).image(source);
export const imageBuilder = (source) =>
	createImageUrlBuilder(config).image(source);

export const previewClient = createClient({
	...config,
	useCdn: false,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;

// import sanityClient from '@sanity/client';
// // import { imageUrlBuilder } from '@sanity/image-url';

// // See the image above on how to get your projectId and add a new API token
// // I added one called "landing page"
// const client = sanityClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: 'production',
//   apiVersion: '2022-02-01',
//   useCdn: true, // `false` if you want to ensure fresh data
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
//   //   ignoreBrowserTokenWarning: true,
//   //   token: 'api-token', // or leave blank to be anonymous user
// });

// // const builder = imageUrlBuilder(client);

// // export const urlFor = (source) => builder.image(source);

// export default client;
