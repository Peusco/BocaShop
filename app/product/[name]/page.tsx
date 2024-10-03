import { fetchProdcut } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";

export default async function EspecificProductPage({
  params,
}: {
  params: Product;
}) {
  const data = await fetchProdcut(params.id);
  console.log(data);
  return (
    <div>
      <ul>
        {data &&
          data.map((product, index) => {
            return <li key={index}>{product.name}</li>;
          })}
      </ul>
    </div>
  );
}
