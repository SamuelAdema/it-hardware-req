import { getHardwareById } from "@/lib/hardware";
import { notFound } from "next/navigation";
import RequisitionForm from "@/components/RequisitionForm";

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
      
      <RequisitionForm hardwareId={id} />
    </section>
  );
}