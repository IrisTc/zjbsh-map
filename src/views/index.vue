<template>
  <div>index</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'index',

    async created() {
        let res = await axios.get('/maps/api.json')
        console.log(res)
    }
}
</script>

<style>

</style>