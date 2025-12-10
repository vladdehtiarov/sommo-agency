import { BlogPageLayout } from '../../components/BlogPageLayout';

const content = `
<p>OpenAI's ChatGPT has transformed what's possible in application development. From intelligent chatbots to content generation and data analysis, integrating GPT capabilities into your applications can create powerful user experiences. This guide covers everything you need to know to get started.</p>

<h2>Understanding the OpenAI API</h2>

<h3>Available Models</h3>

<p>OpenAI offers several models with different capabilities and pricing:</p>

<ul>
  <li><strong>GPT-4o</strong> — Most capable, best for complex reasoning, multimodal</li>
  <li><strong>GPT-4o mini</strong> — Cost-effective, great balance of capability and price</li>
  <li><strong>GPT-4 Turbo</strong> — Powerful with 128k context window</li>
  <li><strong>GPT-3.5 Turbo</strong> — Fastest and cheapest, good for simple tasks</li>
</ul>

<h3>Key Concepts</h3>

<p><strong>Tokens:</strong> The basic unit of text processing. ~4 characters = 1 token in English. Pricing is per 1,000 tokens.</p>

<p><strong>Context Window:</strong> The maximum amount of text (input + output) a model can process in one request.</p>

<p><strong>Temperature:</strong> Controls randomness (0 = deterministic, 2 = very random). Lower for factual tasks, higher for creative ones.</p>

<h2>Getting Started</h2>

<h3>Step 1: Get API Access</h3>

<ol>
  <li>Create an account at <a href="https://platform.openai.com">platform.openai.com</a></li>
  <li>Navigate to API Keys section</li>
  <li>Create a new secret key</li>
  <li>Add payment method for usage billing</li>
</ol>

<blockquote>Important: Never expose your API key in client-side code. Always call the API from your backend or serverless functions.</blockquote>

<h3>Step 2: Basic API Call</h3>

<p>Here's a simple example using Node.js:</p>

<pre><code>const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function chat(userMessage) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: userMessage }
    ],
    temperature: 0.7,
    max_tokens: 500
  });
  
  return response.choices[0].message.content;
}</code></pre>

<h3>Step 3: Understanding the Message Structure</h3>

<p>ChatGPT uses a conversation format with roles:</p>

<ul>
  <li><strong>system:</strong> Sets the behavior and context for the assistant</li>
  <li><strong>user:</strong> The human's messages</li>
  <li><strong>assistant:</strong> The AI's responses (for multi-turn conversations)</li>
</ul>

<h2>Common Integration Patterns</h2>

<h3>Pattern 1: Customer Support Chatbot</h3>

<pre><code>const systemPrompt = \`You are a customer support agent for [Company].
You help users with:
- Account issues
- Billing questions  
- Product information

If you don't know something, say so and offer to connect them with a human.
Always be professional and helpful.\`;

async function supportChat(conversationHistory, newMessage) {
  const messages = [
    { role: "system", content: systemPrompt },
    ...conversationHistory,
    { role: "user", content: newMessage }
  ];
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    temperature: 0.3 // Lower for more consistent responses
  });
  
  return response.choices[0].message.content;
}</code></pre>

<h3>Pattern 2: Content Generation</h3>

<pre><code>async function generateBlogPost(topic, keywords) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are an expert content writer. Write engaging, SEO-optimized blog posts."
      },
      {
        role: "user", 
        content: \`Write a blog post about "\${topic}". 
                  Include these keywords naturally: \${keywords.join(', ')}.
                  Format with headers, bullet points, and a compelling introduction.\`
      }
    ],
    temperature: 0.8,
    max_tokens: 2000
  });
  
  return response.choices[0].message.content;
}</code></pre>

<h3>Pattern 3: Data Extraction</h3>

<pre><code>async function extractInvoiceData(invoiceText) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Extract structured data from invoices. Return valid JSON only."
      },
      {
        role: "user",
        content: \`Extract the following from this invoice:
                  - vendor_name
                  - invoice_number
                  - date
                  - total_amount
                  - line_items (array)
                  
                  Invoice text: \${invoiceText}\`
      }
    ],
    temperature: 0,
    response_format: { type: "json_object" }
  });
  
  return JSON.parse(response.choices[0].message.content);
}</code></pre>

<h2>Best Practices</h2>

<h3>Prompt Engineering</h3>

<ul>
  <li><strong>Be specific:</strong> Clear instructions produce better results</li>
  <li><strong>Provide examples:</strong> Show the format you want</li>
  <li><strong>Set constraints:</strong> Specify length, format, tone</li>
  <li><strong>Use system prompts:</strong> Define behavior once, use consistently</li>
</ul>

<h3>Cost Optimization</h3>

<ul>
  <li><strong>Choose the right model:</strong> GPT-3.5 Turbo is 10-30x cheaper than GPT-4</li>
  <li><strong>Set max_tokens:</strong> Limit response length when possible</li>
  <li><strong>Cache responses:</strong> Store common responses to avoid repeated calls</li>
  <li><strong>Summarize context:</strong> For long conversations, periodically summarize rather than sending full history</li>
</ul>

<h3>Error Handling</h3>

<pre><code>async function safeAPICall(messages) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      timeout: 30000
    });
    return { success: true, data: response.choices[0].message.content };
  } catch (error) {
    if (error.status === 429) {
      // Rate limited - implement exponential backoff
      return { success: false, error: 'rate_limited' };
    }
    if (error.status === 500) {
      // OpenAI server error - retry
      return { success: false, error: 'server_error' };
    }
    return { success: false, error: error.message };
  }
}</code></pre>

<h3>Security Considerations</h3>

<ul>
  <li><strong>Never trust user input:</strong> Sanitize and validate before including in prompts</li>
  <li><strong>Implement rate limiting:</strong> Protect against abuse</li>
  <li><strong>Monitor usage:</strong> Set up alerts for unusual activity</li>
  <li><strong>Content moderation:</strong> Use OpenAI's moderation endpoint for user-generated content</li>
</ul>

<h2>No-Code Integration Options</h2>

<p>Don't want to write code? Several platforms offer ChatGPT integration:</p>

<ul>
  <li><strong>Bubble.io</strong> — Use the OpenAI plugin or API Connector</li>
  <li><strong>Zapier</strong> — ChatGPT integration for workflow automation</li>
  <li><strong>Make</strong> — OpenAI modules for complex scenarios</li>
  <li><strong>Voiceflow</strong> — Build conversational AI without code</li>
</ul>

<h2>Pricing Breakdown</h2>

<p>As of 2024 (prices in USD per 1M tokens):</p>

<ul>
  <li><strong>GPT-4o:</strong> $5 input / $15 output</li>
  <li><strong>GPT-4o mini:</strong> $0.15 input / $0.60 output</li>
  <li><strong>GPT-3.5 Turbo:</strong> $0.50 input / $1.50 output</li>
</ul>

<p>For a typical chatbot handling 10,000 conversations/month with ~500 tokens each:</p>
<ul>
  <li>GPT-4o mini: ~$4/month</li>
  <li>GPT-4o: ~$100/month</li>
</ul>

<h2>Real-World Applications</h2>

<ul>
  <li><strong>Customer support:</strong> Handle common questions automatically</li>
  <li><strong>Content creation:</strong> Generate drafts, summaries, translations</li>
  <li><strong>Data processing:</strong> Extract and structure unstructured data</li>
  <li><strong>Code assistance:</strong> Help users write queries or formulas</li>
  <li><strong>Personalization:</strong> Generate personalized recommendations</li>
</ul>

<h2>Conclusion</h2>

<p>Integrating ChatGPT into your applications is more accessible than ever. Start with a simple use case, iterate based on results, and scale as you see value. The key is matching the right model and prompting approach to your specific needs.</p>

<p>At Sommo, we've integrated AI capabilities into numerous client applications. Whether you need a simple chatbot or complex AI workflows, we can help you leverage these powerful tools effectively.</p>
`;

const relatedPosts = [
  {
    title: 'How AI Automation is Revolutionizing Business Processes',
    excerpt: 'Discover how artificial intelligence and automation are transforming how businesses operate.',
    category: 'AI',
    href: '/blog/ai-automation-business-processes',
  },
  {
    title: 'Implementing AI-Powered Customer Service: A Complete Blueprint',
    excerpt: 'Everything you need to know about implementing AI chatbots and automated customer service solutions.',
    category: 'AI',
    href: '/blog/ai-customer-service-implementation',
  },
];

export const ChatGPTIntegrationPage = () => {
  return (
    <BlogPageLayout
      title="Integrating ChatGPT API into Your Applications: A Developer's Guide"
      excerpt="Step-by-step instructions for integrating OpenAI's ChatGPT API into your web applications, including best practices and cost optimization."
      author="Vlad Dehtiarov"
      date="November 12, 2024"
      readTime={14}
      category="AI"
      content={content}
      relatedPosts={relatedPosts}
    />
  );
};

