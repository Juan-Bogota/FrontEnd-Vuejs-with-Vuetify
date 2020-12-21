<template>
<div>
  <NavBar />
  <LandingPage></LandingPage>
</div>

</template>

<script>
import LandingPage from "../components/LandingPage";
import NavBar from "../components/home/NavBar"

export default {
  components: {
    LandingPage,
    NavBar
  },
};
</script>
