import { hardwareList } from "@/lib/hardware";

export const revalidate = 0;

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q")?.toLowerCase();

  if (query) {
    const filtered = hardwareList.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
    return Response.json(filtered);
  }

  return Response.json(hardwareList);
}