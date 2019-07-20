<template lang="html">
  <div class="main">
    <Header />
    <div class="posts-list">
      <h2 class="posts-list-title">Posts</h2>
      <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.title}}</n-link></p>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Blog/Header.vue'

export default {
  transition: "page",
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    siteInfo() {
      return this.$store.state.siteInfo;
    }
  },
  components: {
    Header,
  }
}
</script>

<style lang="css" scoped>
</style>
