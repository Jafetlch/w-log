<template>
  <v-flex xs12>
    <v-layout row align-center justify-center mt-3>
      <span class="title-b font-libre">
        {{ titleFirstCharacter }}<span class="title-s font-libre">{{ titleSecondCharacter }}</span>
      </span>
      <div :class="[ getTheme, divider_vertical, 'hidden-sm-and-down']"></div>
      <div class="date date-margin hidden-sm-and-down">
        <span class="date-day">{{ day }}</span>
        <span class="date-month text-uppercase">{{ month }}</span>
        <span class="date-year">{{ year }}</span>
      </div>
    </v-layout>
    <v-layout row wrap hidden-md-and-up>
      <v-flex xs12>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12>
        <v-layout row align-center justify-center mt-2>
          <span>{{ day }} - <span class="text-capitalize">{{ month }}</span> - {{ year }}</span>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: 'TitleContent',
  props: {
    titleFirstCharacter: {
      type: String,
      required: true
    },
    titleSecondCharacter: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    }
  },
  data: () => ({
    divider_vertical: 'divider-vertical'
  }),
  computed: {
    getTheme () {
      if (this.$store.getters.getLocalTheme) {
        return 'white'
      } else {
        return 'black'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// * TitleComponent
.title-b {
  font-size: 90px;
}
.title-s {
  font-size: 46px;
}

.divider-vertical {
  height: 60px;
  width: 2px;
  margin-top: 64px;
  margin-left: 10px;

}
.date-margin {
  margin-left: 10px;
  margin-top: 90px;
}
.date {
  font-family: 'Mandali' !important;
  .date-day {
    font-size: 46px;
  }
  .date-month {
    font-size: 23px;
  }
  .date-year {
    font-size: 12px;
  }
}
</style>
