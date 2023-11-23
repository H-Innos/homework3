<template>
    <div class="post">
      <ul class="post-header">
        <li style="float: left">
          <img :src="post.profile_picture || '/img/no-profile-picture-icon.png'" alt="img" />
        </li>
        <li>{{ formatDate(post.date) }}</li>
      </ul>
      
      <div class="post-content">
        <img v-if="post.content_type === 'image' || post.content_type === 'mixed'" :src="post.image_content" alt="image" />
        <p v-if="post.content_type === 'text' || post.content_type === 'mixed'">{{ post.text_content }}</p>
      </div>
  
      <ul class="post-footer">
        <li style="float: left">
          <button class="likeBtn"><img src="/img/like-icon.png" alt="like" /></button>
        </li>
        <li>
            {{ post.likes }} Likes
        </li>
        <!-- Add other footer elements as needed -->
      </ul>
    </div>
  </template>
  
<script>
    export default {    
        props: {
            post: Object,
        },
        methods: {
            formatDate(inputDate) {
            const parts = inputDate.split('-');
            const year = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const day = parseInt(parts[2], 10);

            const date = new Date(year, month - 1, day);

            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

            const formattedDate = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

            return formattedDate;
            },
        },
        };
</script>

<style scoped>
    .post {
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    margin: 5px 0;
    }

    ul.post-header, ul.post-footer {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;   
    }

    ul.post-header li {
        padding: 14px 0px;
        text-decoration: none;
        font-size: 17px;
        float: right;
    }   

    ul.post-header li>img {
        width: 50px;
        height: 50px;
    }

    .post div p {
        position: relative;
        width: 100%;
        overflow: visible;
        padding: 0 10px;
        text-align: justify;
    }

    .post div img {
        display: block;
        max-width: 70%;
        max-height: 400px;
    }

    ul.post-footer li {
        position: relative;
        float: right;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    ul.post-footer li img {
        width: 25px;
        height: 25px;
    }
    .likeBtn {
        background: none;
        border: none;
        display: block;
    }
    .likeBtn:hover {
        cursor: pointer;
    }
</style>