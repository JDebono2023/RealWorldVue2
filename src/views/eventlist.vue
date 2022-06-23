<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/eventcard.vue";
import EventService from "@/services/eventservice.js";

//import eventcard from "@/components/eventcard.vue";
export default {
  name: "EventList",
  components: { EventCard },
  data() {
    return {
      events: [],
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });
  },
};
</script>
