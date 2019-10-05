<template>
  <div>Search Result</div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    searchVenue: function() {
      console.log('search: ' + this.$route.query.q)
    }
  },
  created() {
    this.searchVenue()
  },
  watch: {
    $route: 'searchVenue'
  }
}
</script>

<style scoped>
</style>