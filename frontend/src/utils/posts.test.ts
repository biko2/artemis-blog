import { describe, it, expect } from "vitest";
import { getRelatedPostByFirstTag } from "./posts";
import { mockPostsData } from "../mocks/mock-posts-data";

describe("getRelatedPostByFirstTag", () => {
  it("devuelve los 3 posts relacionados ignorando mayúsculas y espacios", () => {
    const resultado = getRelatedPostByFirstTag(
      mockPostsData[0].tags,
      mockPostsData,
    );

    expect(resultado).toHaveLength(3);
    const ids = resultado.map((p) => p.id);
    expect(ids).toEqual(["5", "4", "3"]);
  });

  it("devuelve array vacío cuando no hay tags", () => {
    const resultado = getRelatedPostByFirstTag("", mockPostsData);
    expect(resultado).toHaveLength(0);
  });
});
