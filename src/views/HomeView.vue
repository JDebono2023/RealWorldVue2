<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="This is a home page" />
    <eventcard></eventcard>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
//import EventCard from '@/components/eventcard.vue';
import Eventcard from "../components/eventcard.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    //EventCard
    Eventcard,
  },
};
</script>
