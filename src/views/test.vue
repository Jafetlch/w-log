<template>
  <v-container>
    <v-textarea
      v-model="content"
      name="input-7-1"
      label="Default style"
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      hint="Hint text"
    ></v-textarea>
    <markdown-it-vue class="md-body" :content="content"/>
  </v-container>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
export default {
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content: '# your markdown content'
    }
  }
}
</script>
