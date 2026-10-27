import { getHardwareById } from "@/lib/hardware";
import { notFound } from "next/navigation";
import RequisitionForm from "@/components/RequisitionForm";

// Prevents Next.js from failing while trying to statically pre-build the dynamic ID
export const instant = false;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = await getHardwareById(id);
  
  if (!item) return { title: "Item Not Found" };
  
  return {
    title: item.name,
    description: `Order the ${item.name} (${item.category}) for $${item.price}.`,
  };
}

export default async function HardwareDetailPage({ params }) {
  const { id } = await params;
  const item = await getHardwareById(id);

  if (!item) {
    notFound();
  }

  return (
    <section className="bg-white p-6 rounded-lg border border-slate-200">
      <p className="text-xs uppercase font-bold tracking-wider text-blue-600 mb-1">Hardware Specification</p>
      <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
      <p className="text-slate-600 mb-4">Category: {item.category}</p>
      <p className="text-2xl font-semibold text-slate-900 mb-6">Estimated Cost: ${item.price}</p>
      
      {/* This is the fixed line! It now passes the actual product name to your form */}
      <RequisitionForm hardwareName={item.name} />
    </section>
  );
}