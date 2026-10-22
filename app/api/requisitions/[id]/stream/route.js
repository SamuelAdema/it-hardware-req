export async function GET(request, { params }) {
  const { id } = await params;
  
  const encoder = new TextEncoder();
  
  const stream = new ReadableStream({
    async start(controller) {
      const statuses = [
        "Pending IT Approval",
        "Approved - Sourcing Hardware",
        "Provisioning Device",
        "Ready for Pickup"
      ];
      
      let step = 0;
      
      const interval = setInterval(() => {
        if (step < statuses.length) {
          const data = JSON.stringify({ status: statuses[step] });
          controller.enqueue(encoder.encode(`data: ${data}\n\n`));
          step++;
        } else {
          clearInterval(interval);
          controller.close();
        }
      }, 5000); // Push an update every 5 seconds
      
      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
      });
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
    },
  });
}