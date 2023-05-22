import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

export const quoteSchema = z.object({
	quote: z.string(),
	createdAt: z.date().default(() => new Date()),
});

export type Quote = z.infer<typeof quoteSchema>;
