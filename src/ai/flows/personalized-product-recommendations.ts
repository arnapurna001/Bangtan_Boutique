// This is a server-side file.
'use server';

/**
 * @fileOverview A personalized product recommendation AI agent.
 *
 * - personalizedProductRecommendations - A function that handles the product recommendation process.
 * - PersonalizedProductRecommendationsInput - The input type for the personalizedProductRecommendations function.
 * - PersonalizedProductRecommendationsOutput - The return type for the personalizedProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedProductRecommendationsInputSchema = z.object({
  viewingHistory: z
    .array(z.string())
    .describe('An array of product names that the user has viewed.'),
  numRecommendations: z
    .number()
    .default(3)
    .describe('The number of product recommendations to return.'),
});
export type PersonalizedProductRecommendationsInput = z.infer<
  typeof PersonalizedProductRecommendationsInputSchema
>;

const PersonalizedProductRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of product recommendations based on viewing history.'),
});
export type PersonalizedProductRecommendationsOutput = z.infer<
  typeof PersonalizedProductRecommendationsOutputSchema
>;

export async function personalizedProductRecommendations(
  input: PersonalizedProductRecommendationsInput
): Promise<PersonalizedProductRecommendationsOutput> {
  return personalizedProductRecommendationsFlow(input);
}

const oftenShowDetailsTool = ai.defineTool({
  name: 'oftenShowDetails',
  description: 'Decide how often to show product details or different categories.',
  inputSchema: z.object({
    frequency: z.enum(['high', 'medium', 'low']).describe('Frequency of showing details.'),
  }),
  outputSchema: z.boolean().describe('Whether to show details often or not.'),
}, async (input) => {
  // This is a mock implementation; replace with actual logic.
  return input.frequency === 'high';
});

const prompt = ai.definePrompt({
  name: 'personalizedProductRecommendationsPrompt',
  input: {schema: PersonalizedProductRecommendationsInputSchema},
  output: {schema: PersonalizedProductRecommendationsOutputSchema},
  tools: [oftenShowDetailsTool],
  prompt: `You are a personal shopping assistant for an e-commerce website specializing in BTS merchandise.

  Based on the user's viewing history, provide personalized product recommendations.
  Return {{numRecommendations}} product recommendations.

  Viewing History:
  {{#each viewingHistory}}
  - {{this}}
  {{/each}}

  Consider the viewing history to recommend related products.

  Show product details often?
  {{#tool_call oftenShowDetailsTool frequency='high'}}{{/tool_call}}
  `,
});

const personalizedProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProductRecommendationsFlow',
    inputSchema: PersonalizedProductRecommendationsInputSchema,
    outputSchema: PersonalizedProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
