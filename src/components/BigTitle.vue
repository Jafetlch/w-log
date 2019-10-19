<template>
  <v-flex xs12>
    <v-layout row wrap align-center justify-center>
      <span class="display-3 font-jaapokki">
        {{ firstPart }}<span class="display-2 font-raleway">{{ secondPart }}</span>
      </span>
    </v-layout>
    <v-layout row mb-3 align-center justify-center>
      <span class="title font-raleway">{{ subTitle }}</span>
    </v-layout>
    <v-divider></v-divider>
  </v-flex>
</template>

<script>
export default {
  name: 'BigTitle',
  props: {
    firstPart: {
      type: String,
      required: false,
      default: ''
    },
    secondPart: {
      type: String,
      required: false,
      default: ''
    },
    subTitle: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
