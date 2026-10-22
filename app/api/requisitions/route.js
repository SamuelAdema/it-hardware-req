export async function POST(request) {
  const body = await request.json();

  if (!body.hardwareId || !body.department) {
    return Response.json(
      { error: "Hardware ID and Department are required." },
      { status: 400 }
    );
  }

  const newRequisition = {
    id: `REQ-${Math.floor(Math.random() * 10000)}`,
    hardwareId: body.hardwareId,
    department: body.department,
    status: "Pending Approval",
  };

  return Response.json(newRequisition, { status: 201 });
}