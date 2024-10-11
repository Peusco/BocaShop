import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { users, products } from "../lib/placeholder-data";
const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
     CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      rol VARCHAR(255) NOT NULL
    );
  `;

  await client.sql`
  CREATE TABLE IF NOT EXISTS user_products (
  user_id UUID NOT NULL,
  product_id UUID NOT NULL,
  PRIMARY KEY (user_id, product_id),
  CONSTRAINT fk_user
    FOREIGN KEY(user_id) 
    REFERENCES users(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_product
    FOREIGN KEY(product_id) 
    REFERENCES products(id)
    ON DELETE CASCADE
);
`;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const { id, name, email, rol } = user;

      await client.sql`
        INSERT INTO users (id, name, email, password,rol)
        VALUES (${id}, ${name}, ${email}, ${hashedPassword}, ${rol})
        ON CONFLICT (id) DO NOTHING;
      `;

      await Promise.all(
        user.products_id.map(async (productId) => {
          return client.sql`
            INSERT INTO user_products (user_id, product_id)
            VALUES (${id}, ${productId})  
            ON CONFLICT (user_id, product_id) DO NOTHING;
          `;
        })
      );
    })
  );

  return insertedUsers;
}

async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
      CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 3) NOT NULL,
      description TEXT NOT NULL,
      sexo VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL,
      size TEXT[] NOT NULL,
      img TEXT[] NOT NULL,
      quantity INTEGER NOT NULL
     );
   `;

  const insertedProducts = await Promise.all(
    products.map(async (product) => {
      const { id, name, price, description, sexo, type, size, img, quantity } =
        product;
      return client.sql`
      INSERT INTO products (id, name, price, description, sexo, type, size, img, quantity)
VALUES (
    ${id}, 
    ${name},                     
    ${price},                                  
    ${description},
    ${sexo},                                
    ${type},                                  
    ARRAY[${size.map((s) => s).join(",")}],              
    ARRAY[${img.map((i) => i).join(",")}] ,
    ${quantity}
);
    `;
    })
  );

  return insertedProducts;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedProducts();
    await seedUsers();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
