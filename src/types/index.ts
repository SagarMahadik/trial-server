import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

export const quoteSchema = z.object({
	quote: z.string(),
	createdAt: z.date().default(() => new Date()),
});

export const tagsSchema = z.object({
	tags: z.array(z.string()),
});

export type Tags = z.infer<typeof tagsSchema>;
export type Quote = z.infer<typeof quoteSchema>;
