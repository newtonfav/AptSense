import fs from "fs";
import path from "path";

export function convertToBase64(filePath: string): string {
  const imagePath = path.join(process.cwd(), `public/${filePath}`);
  const base64 = fs.readFileSync(imagePath, { encoding: "base64" });
  const mimeType = "image/png";

  return `data:${mimeType};base64,${base64}`;
}
