const axios = require('axios');

class ImageService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getImage(topic) {
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                params: {
                    query: topic,
                    client_id: this.apiKey,
                    per_page: 1
                }
            });

            if (response.data.results && response.data.results.length > 0) {
                return response.data.results[0].urls.regular;
            }
            
            return this.getDefaultImage();
        } catch (error) {
            console.error('Error fetching image:', error);
            return this.getDefaultImage();
        }
    }

    getDefaultImage() {
        return 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2';
    }
}

module.exports = ImageService; 