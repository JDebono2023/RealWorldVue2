<template>
  <div class="user">
    <h1>This is {{ username }}'s page</h1>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  props: ["username"],
};
</script>
