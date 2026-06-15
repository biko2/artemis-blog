export function formatDate(aDate: string): string {
  //valida que no sea una fecha inválida
  const date = new Date(aDate + "T12:00:00");
  if (isNaN(date.getTime())) return "Invalid date";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
