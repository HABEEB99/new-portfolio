import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-06-30", // or today's date for latest
  useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(client).image(source);

export default client;
