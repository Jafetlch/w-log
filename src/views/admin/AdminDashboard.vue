<template>
  <v-flex xs12>
    <BigTitle first-part="A" second-part="dmin" sub-title="Menu"/>
    <v-layout row wrap align-center justify-center>
      <!-- // * this is a horizontal menu -->
      <v-tabs
        v-model="tabs"
        centered
        color="transparent"
        slider-color="primary">
        <v-tab
          v-for="(header, index) in initHeader"
          :key="index">
          {{ header.title }}
        </v-tab>
      </v-tabs>
    </v-layout>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <ListPublicationComponent/>
      </v-tab-item>
      <v-tab-item>
        <CreatePublicationComponent/>
      </v-tab-item>
      <v-tab-item>
        <SettingsComponent/>
      </v-tab-item>
    </v-tabs-items>
    <v-layout row wrap>
    </v-layout>
  </v-flex>
</template>

<script>
import BigTitle from '@/components/BigTitle'
import CreatePublicationComponent from '@/components/dashboard/CreatePublicationv2Component'
import ListPublicationComponent from '@/components/dashboard/ListPublicationComponent'
import SettingsComponent from '@/components/dashboard/SettingsComponent'

export default {
  name: 'AdminDashboard',
  components: {
    BigTitle,
    CreatePublicationComponent,
    ListPublicationComponent,
    SettingsComponent
  },
  data: () => ({
    tabs: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  computed: {
    initHeader () {
      let menuHeader = [
        {
          title: 'My Publications'
        },
        {
          title: 'Create'
        },
        {
          title: 'Settings'
        }
      ]
      return menuHeader
    }
  }
}
</script>
