import { createStore } from 'vuex';

export default createStore({
    strict: true,
    state: {
        "posts": [
        {
            "id": 0,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-10-22",
            "content_type": "text",
            "text_content": "test post 1",
            "image_content": null,
            "likes": 0
        },
        {
            "id": 1,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-10-22",
            "content_type": "image",
            "text_content": null,
            "image_content": "/img/testpilt1.png",
            "likes": 0
        },
        {
            "id": 2,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-10-22",
            "content_type": "text",
            "text_content": "test post 2",
            "image_content": null ,
            "likes": 0
        },
        {
            "id": 3,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-10-22",
            "content_type": "mixed",
            "text_content": "dog",
            "image_content": "/img/testpilt2.jpg",
            "likes": 0
        },
        {
            "id": 4,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-06-15",
            "content_type": "text",
            "text_content": "longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext longtext",
            "image_content": null,
            "likes": 0
        },
        {
            "id": 5,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-05-23",
            "content_type": "mixed", 
            "text_content": "mike",
            "image_content": "/img/testpilt3.png",
            "likes": 0
        },
        {
            "id": 6,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-05-22",
            "content_type": "text",
            "text_content": "test post 3",
            "image_content": null,
            "likes": 0
        },
        {
            "id": 7,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-04-13",
            "content_type": "image",
            "text_content": null,
            "image_content": "/img/testpilt4.png",
            "likes": 0
        },
        {
            "id": 8,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-03-03",
            "content_type": "text",
            "text_content": "test post 4",
            "image_content": null,
            "likes": 0
        },
        {
            "id": 9,
            "author_name": null,
            "profile_picture": null,
            "date": "2023-01-01",
            "content_type": "text",
            "text_content": "test post 5",
            "image_content": null,
            "likes": 0
        }
    ]
    },

    getters: {
        getPosts: state => state.posts,
    },
    mutations: {
        resetLikes: (state) => {
            state.posts.forEach((post) => {
                post.likes = 0;
            })
        },
        incrementLikes: (state, postId) => {
            const post = state.posts.find((post) => post.id === postId);
            if (post) {
                post.likes += 1;
            }
        }
    },
    actions: {
        resetLikes({ commit }) {
            commit('resetLikes');
        }, 
        incrementLikes({ commit }, postId) {
            commit('incrementLikes', postId);
        }
    },
});