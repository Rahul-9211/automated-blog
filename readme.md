# 🤖 AI-Powered Blog Generator

An automated blog post generator that creates high-quality technical content using AI. This project automatically generates and publishes blog posts about React and React Native topics every 4 hours.

## 🌟 Features

- **Automated Content Generation**: Uses Google's Gemini AI to create detailed technical blog posts
- **Smart Topic Selection**: Rotates through carefully curated React/React Native topics
- **Image Integration**: Automatically fetches relevant images from Unsplash
- **MongoDB Storage**: Stores posts with proper schema and slugs
- **GitHub Actions**: Automated publishing every 4 hours
- **Markdown Format**: All content is generated in markdown for easy rendering

## 🛠️ Tech Stack

- **AI**: Google Gemini Pro
- **Database**: MongoDB
- **Images**: Unsplash API
- **Runtime**: Node.js
- **Automation**: GitHub Actions
- **Dependencies**: 
  - @google/generative-ai
  - mongoose
  - axios
  - dotenv
  - slugify

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- MongoDB instance
- Google AI API key
- Unsplash API key

### Environment Variables

Create a `.env` file with the following variables:

- `GOOGLE_API_KEY`: Your Google Gemini API key
- `MONGODB_URI`: Your MongoDB connection string
- `UNSPLASH_API_KEY`: Your Unsplash API key

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ai-powered-blog-generator.git
   cd ai-powered-blog-generator
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your environment variables:
   ```sh
   touch .env
   ```

   Add the following to your `.env` file:
   ```
   GOOGLE_API_KEY=your_gemini_api_key
   MONGODB_URI=your_mongodb_connection_string
   UNSPLASH_API_KEY=your_unsplash_api_key
   ```

4. Run the blog generator:
   ```sh
   node blogGenerator.js
   ```

## ⚙️ How It Works

1. **Topic Selection**: 
   - Selects a topic based on the current day
   - Topics rotate through React/React Native questions

2. **Content Generation**:
   - Uses Gemini AI to generate detailed blog content
   - Follows a consistent structure with sections
   - Includes code examples where relevant

3. **Image Integration**:
   - Fetches relevant images from Unsplash
   - Integrates images into the blog content

4. **Storage**:
   - Saves to MongoDB with proper schema
   - Generates SEO-friendly slugs
   - Stores metadata and tags

5. **Automation**:
   - Runs every 4 hours via GitHub Actions
   - Handles failures gracefully
   - Logs execution details

## 🔄 Automation Schedule

The blog generator runs automatically:
- Every 4 hours (00:00, 04:00, 08:00, 12:00, 16:00, 20:00 UTC)
- Can be triggered manually through GitHub Actions

## 🛠️ Customization

### Adding New Topics

Add new topics in `topic.js`:

- Ensure topics are relevant to React/React Native
- Update the topic list to include new entries

### Modifying Generation Frequency

Update the cron schedule in `.github/workflows/generate-blog.yml`:

- Adjust the cron expression to change the frequency
- Ensure the new schedule aligns with your content strategy

## 📝 License

ISC License

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 🐛 Troubleshooting

- Check GitHub Actions logs for execution details
- Verify environment variables are properly set
- Ensure MongoDB connection is active
- Check API rate limits for Unsplash and Google AI

## 📞 Support

Create an issue in the repository for:
- Bug reports
- Feature requests
- General questions