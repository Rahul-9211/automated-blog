require('dotenv').config();
const { getTopicForDay } = require('./topic.js');

// Import services
const AIServiceGoogle = require('./services/aiService');
const ImageService = require('./services/imageService');
const BlogService = require('./services/blogService');
const DatabaseService = require('./services/databaseService');
const models = require('./aiModelList.js');

// Initialize database
const dbService = new DatabaseService(process.env.MONGODB_URI);

// Initialize other services
const aiService = new AIServiceGoogle(process.env.GOOGLE_API_KEY, models.gemini_pro);
const imageService = new ImageService(process.env.UNSPLASH_API_KEY);

async function generateBlogPost(blogService) {
    try {
        const todaysTopic = getTopicForDay();

        // Get image
        const imageUrl = await imageService.getImage(todaysTopic.name);

        // Generate blog content
        const prompt = aiService.generateBlogPrompt(
            todaysTopic, 
            imageUrl, 
            todaysTopic.outline.sections
        );
        const blogContent = await aiService.generateContent(prompt);
        //quil content
        const quilContent = await aiService.quilGeneratedContent(blogContent);
        // Create blog post
        const blog = await blogService.createBlog({
            title: todaysTopic.name,
            content: quilContent,
            tags: todaysTopic.tags,
            featuredImage: imageUrl,
        });

        console.log('Blog post generated and saved successfully!');
        return blog;

    } catch (error) {
        console.error('Error generating blog post:', error);
        throw error;
    }
}

async function main() {
    try {
        // Connect to database
        await dbService.connect();
        
        // Initialize blog service with database connection
        const blogService = new BlogService(dbService.getConnection());

        // Generate today's blog post
        const newBlog = await generateBlogPost(blogService);
        console.log('Generated Blog:', {
            title: newBlog.title,
            slug: newBlog.slug,
            tags: newBlog.tags,
            publishDate: newBlog.publishDate
        });

        // Retrieve all blogs
        // const allBlogs = await blogService.getBlogPosts();
        // console.log('All Blogs:', allBlogs);

    } catch (error) {
        console.error('Error in main function:', error);
    } finally {
        // Always disconnect from database
        await dbService.disconnect();
    }
}

// Run the script
main(); 