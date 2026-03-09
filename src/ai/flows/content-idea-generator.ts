'use server';
/**
 * @fileOverview A Genkit flow for generating diverse content ideas and initial drafts
 * for service descriptions or blog posts for ColserDev team members.
 *
 * - generateContentIdeas - A function that handles the content idea generation process.
 * - ContentIdeaGeneratorInput - The input type for the generateContentIdeas function.
 * - ContentIdeaGeneratorOutput - The return type for the generateContentIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentIdeaGeneratorInputSchema = z.object({
  topic: z.string().describe('The main topic or subject for the content idea.'),
  contentType: z.enum(['service description', 'blog post']).describe('The type of content to generate ideas for (e.g., "service description" or "blog post").'),
  targetAudience: z.string().optional().describe('The intended audience for the content.'),
  keywords: z.array(z.string()).optional().describe('A list of keywords to incorporate into the content ideas.'),
  tone: z.enum(['professional', 'innovative', 'friendly', 'authoritative', 'marketing']).default('professional').describe('The desired tone for the content.'),
});
export type ContentIdeaGeneratorInput = z.infer<typeof ContentIdeaGeneratorInputSchema>;

const ContentIdea = z.object({
  title: z.string().describe('A catchy and relevant title for the content.'),
  shortDescription: z.string().describe('A brief, engaging description of the content idea.'),
  draftText: z.string().describe('An initial draft or outline for the content, focusing on key points.'),
});

const ContentIdeaGeneratorOutputSchema = z.object({
  ideas: z.array(ContentIdea).describe('A list of diverse content ideas.'),
});
export type ContentIdeaGeneratorOutput = z.infer<typeof ContentIdeaGeneratorOutputSchema>;

export async function generateContentIdeas(input: ContentIdeaGeneratorInput): Promise<ContentIdeaGeneratorOutput> {
  return contentIdeaGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentIdeaGeneratorPrompt',
  input: {schema: ContentIdeaGeneratorInputSchema},
  output: {schema: ContentIdeaGeneratorOutputSchema},
  prompt: `You are an expert content strategist for a professional web development company named ColserDev. Your goal is to generate diverse content ideas and initial draft texts for our team members. We want to accelerate content creation and maintain consistent messaging.

You need to create 3-5 distinct content ideas based on the provided topic, content type, target audience, keywords, and desired tone. Ensure the ideas are innovative, professional, and relevant to modern web development trends. For each idea, provide a catchy title, a short description, and an initial draft text.

Topic: {{{topic}}}
Content Type: {{{contentType}}}
{{#if targetAudience}}Target Audience: {{{targetAudience}}}{{/if}}
{{#if keywords}}Keywords: {{#each keywords}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}{{/if}}
Tone: {{{tone}}}`,
});

const contentIdeaGeneratorFlow = ai.defineFlow(
  {
    name: 'contentIdeaGeneratorFlow',
    inputSchema: ContentIdeaGeneratorInputSchema,
    outputSchema: ContentIdeaGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate content ideas.');
    }
    return output;
  }
);
