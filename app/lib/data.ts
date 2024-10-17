"use server";

import { sql } from "@vercel/postgres";
import { Product, User } from "./definitions";
import bcrypt from "bcrypt";

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

export async function fetchUser(email: string) {
  try {
    const data =
      await sql<User>`SELECT * FROM users where users.email = ${email}`;

    return data.rows;
  } catch (e) {
    console.log(e);
  }
}

export async function createUser(
  name: string,
  email: string,
  password: string,
  rol: string
) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await sql<User>`INSERT INTO users (name,email,password,rol) VALUES(${name},${email},${hashedPassword}, ${rol})`;
  } catch (e) {
    console.log(e);
  }
}

export async function addProductToUser(userId: string, productId: string) {
  try {
    await sql<User>`INSERT INTO user_products (user_id,product_id) VALUES(${userId},${productId})`;
  } catch (e) {
    console.log(e);
  }
}
