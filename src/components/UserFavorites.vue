<template>
<div class="favorites">
  <h2>{{ $t('favorites') }}</h2>
  <h3 v-for="city in cities" :key="city">
    {{ getCityName(city) }}
    <button @click="$emit('removeCity', city)">{{ $t('delete') }}</button>
  </h3>
</div>
</template>
  
<script>
export default {
  props: {
    cities: {
      type: Array,
      required: true
    }
  },
  methods: {
    getCityName(city) {
      return this.$t(`cities.${city}`);
    }
  }
}
</script>