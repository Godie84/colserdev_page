'use server';
/**
 * @fileOverview An AI tool for ColserDev team members to generate SEO-optimized meta titles and descriptions for website pages and blog posts.
 *
 * - generateSeoContent - A function that handles the SEO content generation process.
 * - SeoContentOptimizerInput - The input type for the generateSeoContent function.
 * - SeoContentOptimizerOutput - The return type for the generateSeoContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SeoContentOptimizerInputSchema = z
  .object({
    pageType: z
      .enum(['homepage', 'service page', 'blog post', 'other'])
      .describe('The type of page the content is for.'),
    keyTopics: z
      .array(z.string())
      .optional()
      .describe(
        'A list of keywords or key topics to focus on for SEO optimization.'
      ),
    existingContent: z
      .string()
      .optional()
      .describe(
        'Existing content of the page or blog post for which to generate meta tags. Provide this or keyTopics, or both.'
      ),
  })
  .refine(data => data.keyTopics || data.existingContent, {
    message: 'Either keyTopics or existingContent must be provided.',
    path: ['keyTopics', 'existingContent'],
  });
export type SeoContentOptimizerInput = z.infer<
  typeof SeoContentOptimizerInputSchema
>;

const SeoContentOptimizerOutputSchema = z.object({
  metaTitle: z
    .string()
    .describe(
      'An SEO-optimized meta title for the page, typically 50-60 characters.'
    ),
  metaDescription: z
    .string()
    .describe(
      'An SEO-optimized meta description for the page, typically 150-160 characters.'
    ),
});
export type SeoContentOptimizerOutput = z.infer<
  typeof SeoContentOptimizerOutputSchema
>;

export async function generateSeoContent(
  input: SeoContentOptimizerInput
): Promise<SeoContentOptimizerOutput> {
  return seoContentOptimizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seoContentOptimizerPrompt',
  input: {schema: SeoContentOptimizerInputSchema},
  output: {schema: SeoContentOptimizerOutputSchema},
  prompt: `You are an expert SEO specialist. Your task is to generate an SEO-optimized meta title and a meta description for a "{{pageType}}".

The meta title should be concise, around 50-60 characters, and include relevant keywords. It should accurately reflect the page's content and attract clicks.
The meta description should be compelling, around 150-160 characters, summarize the page content, and include a call to action if appropriate. It should entice users to click through from search results.

Here is the information to base the generation on:

{{#if keyTopics}}
Key Topics:
{{#each keyTopics}}
- {{this}}
{{/each}}
{{/if}}

{{#if existingContent}}
Existing Content:
{{{existingContent}}}
{{/if}}

Ensure the output is in JSON format with "metaTitle" and "metaDescription" keys, as specified by the output schema.`,
});

const seoContentOptimizerFlow = ai.defineFlow(
  {
    name: 'seoContentOptimizerFlow',
    inputSchema: SeoContentOptimizerInputSchema,
    outputSchema: SeoContentOptimizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
