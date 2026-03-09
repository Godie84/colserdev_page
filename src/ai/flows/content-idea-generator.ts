'use server';
/**
 * @fileOverview A Genkit flow for generating diverse content ideas and initial drafts
 * for service descriptions or blog posts for ColserDev team members.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentIdeaGeneratorInputSchema = z.object({
  topic: z.string().describe('The main topic or subject for the content idea.'),
  contentType: z.enum(['service description', 'blog post']).describe('The type of content to generate ideas for.'),
  targetAudience: z.string().optional().describe('The intended audience for the content.'),
  keywords: z.array(z.string()).optional().describe('Keywords to incorporate.'),
  tone: z.enum(['professional', 'innovative', 'friendly', 'authoritative', 'marketing']).default('professional').describe('Desired tone.'),
});
export type ContentIdeaGeneratorInput = z.infer<typeof ContentIdeaGeneratorInputSchema>;

const ContentIdea = z.object({
  title: z.string().describe('A catchy title.'),
  shortDescription: z.string().describe('A brief description.'),
  draftText: z.string().describe('An initial draft focusing on key points.'),
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
  prompt: `Eres un estratega de contenido experto para ColserDev, una empresa líder en ingeniería de software y desarrollo web profesional. Tu objetivo es generar ideas de contenido innovadoras y borradores iniciales que reflejen la excelencia técnica de ColserDev.

Debes crear 3 ideas distintas basadas en los siguientes parámetros. El contenido debe estar en ESPAÑOL y mantener la identidad de marca de ColserDev.

Tema: {{{topic}}}
Tipo de Contenido: {{{contentType}}}
{{#if targetAudience}}Audiencia: {{{targetAudience}}}{{/if}}
{{#if keywords}}Keywords: {{#each keywords}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}{{/if}}
Tono: {{{tone}}}`,
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
      throw new Error('Error al generar ideas de contenido para ColserDev.');
    }
    return output;
  }
);
