export async function onRequestGet() {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        name: "1.54 Wrecker Mod",
        description: "Leaked By The Best",
        url: "https://modsfire.com/8SfISvp5gY3BB3q"
      }
    ]),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
