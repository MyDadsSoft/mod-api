export async function onRequestGet() {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        name: "Realistic Physics Mod",
        description: "Makes driving realistic",
        url: "https://modsfire.com/YOUR_MODSFIRE_LINK"
      }
    ]),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
