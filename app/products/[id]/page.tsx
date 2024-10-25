import { fetchProduct } from "@/app/lib/data";
import { SpecificProduct } from "@/app/ui/Components/specificProduct";

export default async function SpecificProductPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetchProduct(params.id);

  return (
    <section className="h-auto">
      <div className="h-full">
        {data ? (
          <SpecificProduct product={data[0]} />
        ) : (
          "Error al Cargar el Product"
        )}
      </div>
    </section>
  );
}
