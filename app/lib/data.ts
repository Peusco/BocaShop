import { sql } from "@vercel/postgres";
import { Product } from "./definitions";

export async function fetchAllProducts() {
  try {
    const data = await sql<Product>`SELECT * From products LIMIT 4`;
    return data.rows;
  } catch (error) {
    console.log(error);
  }
}
