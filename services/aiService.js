const { GoogleGenerativeAI } = require('@google/generative-ai');

class AIServiceGoogle {
    constructor(apiKey, model = "gemini-pro") {
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = model;
    }

    async generateContent(prompt) {
        try {
            const model = this.genAI.getGenerativeModel({ model: this.model });
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (error) {
            console.error('Error generating content:', error);
            throw error;
        }
    }

    setModel(model) {
        this.model = model;
    }

    generateBlogPrompt(topic, imageUrl, sections) {
        return `Write a detailed technical blog post about ${topic.name} following this specific format:

        1. Start with a catchy title using # (H1 heading)
        
        2. Add a featured image using this markdown:
        ![${topic.name}](${imageUrl})
        
        3. Begin with a compelling introduction that:
           - Hooks the reader
           - Explains why this topic matters
           - Briefly outlines what will be covered
        
        4. For each main section:
           - Use ## for section headings
           - Include relevant code examples using \`\`\`javascript if its about coding 
           - Explain concepts with simple analogies
           - Add practical examples
           - Include pros and cons where relevant
        
        5. Include these specific sections:
        ${sections.map(section => `   ## ${section}`).join('\n')}
        
        6. Style guidelines:
           - Write in a conversational tone
           - Use short paragraphs
           - Include bullet points for lists
           - Add code snippets that readers can try
           - Use bold for important concepts
           - Add relevant emojis for visual appeal
        
        7. End with:
           - A clear summary
           - Next steps or call to action
           - Related resources
        
        Make it informative yet easy to understand, similar to popular Medium articles.
        Format everything in markdown.`;
    }
}

module.exports = AIServiceGoogle; 