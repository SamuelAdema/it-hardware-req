import { hardwareList } from "@/lib/hardware";

export async function GET() {
  return Response.json(hardwareList);
}