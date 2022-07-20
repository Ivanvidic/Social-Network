class Post {
    post_id = '';
    post_content = '';
    user_id = '';
    likes = '';
    dislikes = '';
    api_url = 'https://62c019adc134cf51cec921ee.mockapi.io';

    async create(post_content) {
        let session = new Session()

        let data = {
            user_id: session_id,
            content: this.post_content,
            likes: 0,
            dislikes: 0
        }

        data = JSON.stringify(data);

        let response = await fetch(this.api_url + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        data = await response.json();

        return data;
    }

    async getAllPosts() {
        let response = await fetch(this.api_url + '/posts');
        let data = await response.json();
        return data;
    }
}