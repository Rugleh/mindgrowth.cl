<template lang="html">
<div>
  <Header/>
  <Features />
  <Timeline />
  <Form />
</div>
</template>

<script>
import Header from "~/components/Home/Header.vue";
import Features from "~/components/Home/Features.vue";
import Timeline from "~/components/Home/Timeline.vue";
import Form from "~/components/Form.vue";

export default {
  components: {
    Header,
    Features,
    Timeline,
    Form
  }
};
</script>

<style>
</style>
