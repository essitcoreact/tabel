import fs from "fs";
import path from "path";

export const loadEmailTemplate = (
  fileName: string,
  data: Record<string, string>
): string => {
  const filePath = path.join(process.cwd(), "emails", fileName);
  let template = fs.readFileSync(filePath, "utf8");

  Object.keys(data).forEach((key) => {
    template = template.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  });

  return template;
};
