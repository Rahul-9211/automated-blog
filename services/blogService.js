const mongoose = require('mongoose');
const slugify = require('slugify');

class BlogService {
    constructor(dbConnection) {
        this.mongoose = dbConnection;
        this.blogSchema = new this.mongoose.Schema({
            title: String,
            slug: String,
            content: String,
            tags: [String],
            publishDate: Date,
            featuredImage: String
        });

        this.Blog = this.mongoose.model('Blog', this.blogSchema);
    }

    async createBlog(blogData) {
        try {
            const blog = new this.Blog({
                title: blogData.title,
                slug: slugify(blogData.title, { lower: true, strict: true }),
                content: blogData.content,
                tags: blogData.tags,
                publishDate: new Date(),
                featuredImage: blogData.featuredImage
            });

            await blog.save();
            return blog;
        } catch (error) {
            console.error('Error creating blog:', error);
            throw error;
        }
    }

    async getBlogPosts(tag = null) {
        try {
            const query = tag ? { tags: tag } : {};
            return await this.Blog.find(query)
                .sort({ publishDate: -1 })
                .select('title slug tags publishDate featuredImage');
        } catch (error) {
            console.error('Error retrieving blog posts:', error);
            throw error;
        }
    }

    extractTitle(content) {
        return content.split('\n')[0].replace('#', '').trim();
    }
}

module.exports = BlogService; 