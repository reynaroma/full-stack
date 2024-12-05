import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllProducts = async () => {
  // Define the query to fetch all products
  const ALL_PRODUCTS_QUERY = defineQuery(`
    *[
      _type == "product"
    ] | order(name asc)
    `);
  try {
    // use sanityFecth to send the query
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });
    return products.data || [];
  } catch (error) {
    console.error("Error fetching all products", error);
    return [];
  };
};