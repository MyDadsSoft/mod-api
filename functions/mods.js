export async function onRequestGet() {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        name: "SkinPack 1.54++",
        description: "Leaked By The Best",
        url: "https://modsfire.com/eFr4aB7yzhxz6Z7"
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
