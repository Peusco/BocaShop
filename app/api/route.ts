import { db } from "@vercel/postgres";
import { products } from "../lib/placheholer-data";

const client = await db.connect();

async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price INT NOT NULL UNIQUE,
      size TEXT ARRAY NOT NULL
      desc TEXT NOT NULL
      sexo TEXT NOT NULL
      type TEXT NOT NULL
      img TEXT ARRAY NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    products.map(async (product) => {
      return client.sql`
        INSERT INTO products (id, name, price, size,desc,sexo,type,img)
        VALUES (${product.id}, ${product.name}, ${product.price}, {${product.size[0]}, ${product.size[1]}},${product.desc}, ${product.sexo}, ${product.type} ,${product.img[0]} )
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

export async function GET() {
  try {
    console.log("entra aca");
    await client.sql`BEGIN`;
    await seedProducts();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
