import type { Post } from "../types/post";

export async function getPosts(): Promise<Post[]> {
  const PUBLIC_API_BASE =
    import.meta.env.PUBLIC_API_BASE ?? "http://localhost:3000";
  const res = await fetch(`${PUBLIC_API_BASE}/api/v1/posts`);
  if (!res.ok) throw new Error(`Error al obtener los posts: ${res.status}`);
  return res.json();
}

export function getRelatedPostByFirstTag(
  tags: string,
  allPosts: Post[],
): Post[] {
  const firstTag = String(tags).split(",")[0].trim().toLowerCase();
  return allPosts
    .filter(
      (articulo) =>
        articulo.tags !== tags &&
        String(articulo.tags)
          .split(",")
          .map((tramo) => tramo.trim().toLowerCase())
          .includes(firstTag),
    )
    .slice(0, 3);
  //se puede convertir en constante
}
