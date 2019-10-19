<template>
  <v-flex xs12>
    <v-container grid-list-xs>
      <v-flex xs12>
        <v-card flat color="transparent">
          <v-card-title primary-title>
            <v-btn flat icon color="success" @click="refresh">
              <v-icon>refresh</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              label="Busqueda"
              prepend-icon="search"
              clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            class="transparent"
            :headers="headers"
            :items="getData"
            :search="search"
            :loading="loading"
            :pagination.sync="pagination">
            <v-progress-linear v-slot:progress indeterminate></v-progress-linear>
            <template v-slot:items="props">
              <td>{{ props.item.title }}</td>
              <td
                :class="['text-sm-left', {'red--text': props.item.is_published.toString() === '0'}, {'green--text': props.item.is_published.toString() === '1'}]">
                {{ props.item.code }}
              </td>
              <td class="text-sm-left">{{ props.item.created_at }}</td>
              <td class="text-sm-left">{{ props.item.updated_at }}</td>
              <td v-if="!isEditDelete">
                <v-icon
                  small
                  class="mr-2"
                  @click="moreItem(props.item)">
                  more_horiz
                </v-icon>
              <td v-else>
                <v-icon
                  small
                  class="mr-2"
                  @click="cancel">
                  block
                </v-icon>
              </td>
              
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning" >{{ displayErrorSearch }}</v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-container>
    <v-bottom-sheet v-model="sheet">
      <v-list>
        <v-subheader>Open in</v-subheader>

        <v-list-tile @click="displayItem">
          <v-list-tile-avatar>
            <v-icon
              small>
              visibility
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title>
            Ver
          </v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="editItem">
          <v-list-tile-avatar>
            <v-icon
              small>
              edit
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title>
            Editar
          </v-list-tile-title>
        </v-list-tile>

        <!-- <v-list-tile @click="deleteItem">
          <v-list-tile-avatar>
            <v-icon
              small>
              delete
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title>
            Eliminar
          </v-list-tile-title>
        </v-list-tile> -->
      </v-list>
    </v-bottom-sheet>
    <v-dialog v-model="isEditDelete" persistent max-width="800px">
      <modalEditPostsComponent :item="this.$store.getters.getDisplayPosts"/>
    </v-dialog>
  </v-flex>
</template>

<script>
import modalEditPostsComponent from '@/components/dashboard/modalEditPostsComponent'

import { getData } from '@/helpers/api-queries'

export default {
  name: 'ListPublicationComponent',
  components: {
    modalEditPostsComponent
  },
  data: () => ({
    search: '',
    loading: false,
    editDialog: false,
    deleteDialog: false,
    pagination: { rowsPerPage: -1 },
    headers: [
      { text: 'Titulo', align: 'left', value: 'title' },
      { text: 'Code', value: 'code' },
      { text: 'Creado', value: 'created_at' },
      { text: 'Actualizado', value: 'updated_at' },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    sheet: false,

    snackbar: false,
    snackbar_message: 'Hola!',
    snackbar_color: 'primary'
  }),
  mounted () {
    this.loading = true
    if (this.getData.length) {
      this.loading = false
      return
    }
    this.$store.dispatch('getPostsByUser')
    this.loading = false
  },
  computed: {
    displayErrorSearch () {
      return `Tu busqueda por ${this.search ? this.search : ''} no obtivo resultados.`
    },
    getData () {
      return this.$store.getters.getPosts
    },
    isEditDelete () {
      return !!(this.$store.getters.getEditPosts || this.$store.getters.getDeletePosts)
    }
  },
  methods: {
    async refresh () {
      this.loading = true
      await setTimeout(() => {
        this.$store.dispatch('getPostsByUser')
        this.loading = false
      }, 1000)
    },
    cancel () {
      this.$store.commit('setEditPosts', false)
      this.$store.commit('setDeletePosts', false)
    },
    moreItem (item) {
      this.sheet = true
      this.$store.commit('setDisplayPosts', item)
    },
    displayItem () {
      let code = this.$store.getters.getDisplayPosts.code
      this.$router.push({ name: 'Notice', params: { code: code } })
    },
    editItem () {
      this.sheet = false
      this.editDialog = true
      this.$store.commit('setEditPosts', true)
    },
    deleteItem () {
      this.sheet = false
      this.$store.commit('setDeletePosts', true)
    }
  }
}
</script>
