export async function onRequestGet() {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        name: "1.54 Wrecker Mod",
        description: "Leaked By The Best",
        url: "https://modsfire.com/8SfISvp5gY3BB3q"
      },
      {
        id: 2,
        name: "Realistic Physics Mod",
        description: "Makes driving realistic",
        url: "https://modsfire.com/someOtherLink"
      },
      {
        id: 3,
        name: "Interior Addon Pack",
        description: "New steering wheels & interiors",
        url: "https://modsfire.com/anotherLinkHere"
      }
    ]),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
