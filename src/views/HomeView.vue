<template>
  <div class="home">
    <StatusInformation />
  </div>
</template>

<script>
import StatusInformation from "@/components/StatusInformation.vue";

// @ is an alias to /src
export default {
  name: "HomeView",
  components: { StatusInformation },
};
</script>
