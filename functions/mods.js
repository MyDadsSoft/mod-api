export async function onRequestGet() {
  return new Response(
    JSON.stringify([
      {
        name: "SkinPack 1.54++",
        mod_id: "145",
        version: "1.54",
        access_type: "FREE",
        leaked_by: "The Best",
        category: "Skins",
        download_link: "https://modsfire.com/eFr4aB7yzhxz6Z7",
        image_url: "https://i.postimg.cc/placeholder1.png",
        created_at: "2025-07-19T13:16:00.000Z"
      },
      {
        name: "Realistic Physics Mod",
        mod_id: "146",
        version: "2.0",
        access_type: "FREE",
        leaked_by: "PhysicsGuy",
        category: "Gameplay",
        download_link: "https://modsfire.com/someOtherLink",
        image_url: "https://i.postimg.cc/placeholder2.png",
        created_at: "2025-07-19T13:16:00.000Z"
      },
      {
        name: "Interior Addon Pack",
        mod_id: "147",
        version: "1.1",
        access_type: "FREE",
        leaked_by: "ModderX",
        category: "Interiors",
        download_link: "https://modsfire.com/anotherLinkHere",
        image_url: "https://i.postimg.cc/placeholder3.png",
        created_at: "2025-07-19T13:16:00.000Z"
      }
    ]),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
