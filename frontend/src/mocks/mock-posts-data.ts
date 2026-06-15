import type { Post } from "../types/post";

export const mockPostsData: Post[] = [
  {
    id: "6",
    publishedAt: "2026-04-10",
    title: "Splashdown! Artemis II Crew Returns Safely to Earth",
    slug: "artemis-ii-splashdown-crew-returns-earth",
    excerpt:
      "After nearly 10 days and 694,481 miles around the Moon and back, the Orion spacecraft splashed down safely off the coast of San Diego on April 10, 2026.",
    coverImage: {
      src: "http://localhost:3000/images/art002e008487~large.jpg",
      alt: "Orion spacecraft with crew during recovery after splashdown",
    },
    author: "NASA Recovery Team",
    // Etiqueta principal: "artemis ii"
    tags: "artemis II, splashdown, reentry, recovery, orion, Pacific Ocean, San Diego",
    content:
      "<h2>Welcome Home: Artemis II Closes a Historic Chapter</h2><p>On April 10, 2026, the Orion spacecraft splashed down in the Pacific Ocean off the coast of San Diego...</p>",
    readingTime: 4,
  },
  {
    id: "5",
    publishedAt: "2026-04-07",
    title:
      "Orion's Lunar Flyby: Seeing the Far Side of the Moon Like Never Before",
    slug: "orion-lunar-flyby-far-side-moon",
    excerpt:
      "During the Artemis II lunar flyby, the crew captured unprecedented imagery of the Moon's far side...",
    coverImage: {
      src: "http://localhost:3000/images/art002e009287~large.jpg",
      alt: "Orion spacecraft approaching the Moon during Artemis II flyby",
    },
    author: "NASA Science Team",
    // Relacionado 1: Comparte "artemis ii" (mismo caso)
    tags: "artemis II, lunar flyby, moon far side, orion",
    content:
      "<h2>A Unique Vantage Point: The Far Side of the Moon</h2><p>During the Artemis II lunar flyby...</p>",
    readingTime: 5,
  },
  {
    id: "4",
    publishedAt: "2026-04-06",
    title:
      "Artemis II Crew Breaks the All-Time Human Spaceflight Distance Record",
    slug: "artemis-ii-crew-breaks-human-spaceflight-distance-record",
    excerpt:
      "Six days into their mission, the four Artemis II astronauts surpassed 248,655 miles from Earth...",
    coverImage: {
      src: "http://localhost:3000/images/art002e016198~large.jpg",
      alt: "Artemis II crew in Orion during lunar flyby",
    },
    author: "NASA Public Affairs",
    // Relacionado 2: Comparte "artemis ii" (con espacios extra a los lados)
    tags: "  artemis II  , record, farthest humans, deep space",
    content:
      "<h2>Farther Than Any Human Has Ever Been</h2><p>On April 6, 2026...</p>",
    readingTime: 6,
  },
  {
    id: "3",
    publishedAt: "2026-04-02",
    title: "Translunar Injection: Artemis II Crew Leaves Earth's Orbit",
    slug: "artemis-ii-translunar-injection-leaves-earth-orbit",
    excerpt:
      "For the first time since Apollo 17, human beings broke free of Earth's orbit...",
    coverImage: {
      src: "http://localhost:3000/images/art002e000191~large.jpg",
      alt: "Earth crescent seen from Orion during Artemis II",
    },
    author: "NASA Johnson Space Center",
    // Relacionado 3: Comparte "artemis ii" (en MAYÚSCULAS para probar el .toLowerCase())
    tags: "ARTEMIS II, translunar injection, earth orbit, orion",
    content:
      "<h2>Breaking Free: The Translunar Injection Burn</h2><p>On the second day...</p>",
    readingTime: 4,
  },
  {
    id: "2",
    publishedAt: "2026-04-01",
    title: "Artemis II Launch Day: Humanity Returns to Deep Space",
    slug: "artemis-ii-launch-day-humanity-returns-deep-space",
    excerpt:
      "NASA's SLS rocket lifted off from Kennedy Space Center on April 1, 2026...",
    coverImage: {
      src: "http://localhost:3000/images/art002e012278~large.jpg",
      alt: "Artemis II launch from Kennedy Space Center",
    },
    author: "NASA Launch Team",
    // Relacionado 4: Comparte "artemis ii", pero debería quedar fuera por el .slice(0, 3)
    tags: "artemis II, launch, SLS, orion",
    content:
      "<h2>April 1, 2026: A Historic Day for Human Spaceflight</h2><p>At 6:35 p.m. EDT...</p>",
    readingTime: 5,
  },
  {
    id: "1",
    publishedAt: "2026-03-13",
    title: "NASA's Artemis II Moon Mission Daily Agenda",
    slug: "artemis-ii-moon-mission-daily-agenda",
    excerpt:
      "A detailed breakdown of the 10-day schedule for the Artemis II crewed mission...",
    coverImage: {
      src: "http://localhost:3000/images/art002e009301~large.jpg",
      alt: "Artemis II mission suit patch",
    },
    author: "NASA Editorial Team",
    // NO Relacionado: No comparte la primera etiqueta del post base
    tags: "apollo, history, moon, spaceflight",
    content:
      "<h2>Artemis II: The First Crewed Flight Around the Moon</h2><p>Artemis II is NASA's first...</p>",
    readingTime: 11,
  },
];
