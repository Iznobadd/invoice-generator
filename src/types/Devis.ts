import { z } from "zod";

export const devisSchema = z.object({
  companyName: z.string(),
});
