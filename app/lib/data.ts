import { sql } from "@vercel/postgres";
import { Product } from "./definitions";

export async function fetchFirstFourProducts() {
  try {
    const data = await sql<Product>`SELECT * From products LIMIT 4`;
    return data.rows;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProduct(id: string) {
  try {
    const data =
      await sql<Product>`SELECT * From products p WHERE p.id = ${id}`;
    return data.rows;
  } catch (error) {
    console.log(error);
  }
}
