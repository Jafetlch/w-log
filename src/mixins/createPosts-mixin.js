const createPostsMixin = {
  data: () => ({
    title: '',
    is_published: true,
    content: '# your markdown content \n\n ```power by f34th3r.io```'
  }),
  methods: {
    clear () {
      this.title = ''
      this.content = '# your markdown content \n\n ```power by f34th3r.io```'
      this.is_published = true
      this.image = ''
    }
  }
}

export default createPostsMixin
