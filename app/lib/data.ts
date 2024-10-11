"use server";

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

export async function fetchFilteredNameProducts(type: string) {
  try {
    const data = await sql<Product>`
      SELECT * FROM products p WHERE p.name ILIKE ${type + "%"}
    `;

    return data.rows;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFilteredTypeProducts(type: string) {
  try {
    const data = await sql<Product>`
      SELECT * FROM products p WHERE p.type ILIKE ${type + "%"}
    `;

    return data.rows;
  } catch (error) {
    console.log(error);
  }
}
export async function fetchFilteredSexoProducts(type: string) {
  try {
    const data = await sql<Product>`
      SELECT * FROM products p WHERE p.sexo ILIKE ${type + "%"}
    `;

    return data.rows;
  } catch (error) {
    console.log(error);
  }
}
