// italicize the word RAM in the title
export function italicizeRam(title) {
  const parts = title.split(/(RAM)/);
  return parts.map((part, index) =>
    part === "RAM" ? <i key={index}>{part}</i> : part,
  );
}
