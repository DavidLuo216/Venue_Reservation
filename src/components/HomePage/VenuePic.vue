<template>
  <div>
    <p>VenuePicturesRollingHere</p>
    <img :src="img" />
  </div>
</template>

<script>
export default {
  name: 'VenuePic',
  data() {
    return {
      img: require('../../assets/hpc26.png')
    }
  }
}
</script>

<style></style>
