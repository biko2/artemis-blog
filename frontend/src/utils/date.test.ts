import { describe, it, expect } from "vitest";
import { formatDate } from "./date";

describe("formatDate", () => {
  describe("Camino feliz", () => {
    it("formatea una fecha normal", () => {
      expect(formatDate("2024-01-01")).toBe("Jan 1, 2024");
    });

    it("formatea mes de junio", () => {
      expect(formatDate("2024-06-15")).toBe("Jun 15, 2024");
    });

    it("formatea diciembre", () => {
      expect(formatDate("2024-12-31")).toBe("Dec 31, 2024");
    });

    it("formatea 29 de febrero en año bisiesto", () => {
      expect(formatDate("2024-02-29")).toBe("Feb 29, 2024");
    });

    it("devuelve un string", () => {
      expect(typeof formatDate("2024-01-01")).toBe("string");
    });
    //esto es una prueba de comentario
    it("no devuelve string vacío para fecha válida", () => {
      expect(formatDate("2024-01-01")).not.toBe("");
    });
  });

  describe("Camino feo", () => {
    it("devuelve 'Invalid date' para fecha inválida", () => {
      expect(formatDate("no-es-una-fecha")).toBe("Invalid date");
    });

    it("devuelve 'Invalid date' para string vacío", () => {
      expect(formatDate("")).toBe("Invalid date");
    });

    it("devuelve 'Invalid date' para undefined", () => {
      expect(formatDate(undefined as unknown as string)).toBe("Invalid date");
    });

    it("devuelve 'Invalid date' para null", () => {
      expect(formatDate(null as unknown as string)).toBe("Invalid date");
    });

    it("devuelve 'Invalid date' para fecha con formato incorrecto", () => {
      expect(formatDate("01-01-2024")).toBe("Invalid date");
    });

    it("devuelve 'Invalid date' para mes inválido (13)", () => {
      expect(formatDate("2024-13-01")).toBe("Invalid date");
    });

    it("devuelve 'Invalid date' para día inválido (32)", () => {
      expect(formatDate("2024-01-32")).toBe("Invalid date");
    });

    it("29 de febrero en año no bisiesto se ajusta al 1 de marzo", () => {
      expect(formatDate("2023-02-29")).toBe("Mar 1, 2023");
    });
  });
});
