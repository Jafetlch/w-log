const rulesMixin = {
  data: () => ({
    imageLoadind: false,
    imageCharge: false,
    image: ''
  }),
  methods: {
    // Image
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      this.imageLoadind = true
      const files = e.target.files
      if (files[0] !== undefined) {
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.image = fr.result
          this.imageLoadind = false
        })
      } else {
        this.image = ''
        this.imageLoadind = false
      }
    },
    onDrop (e) {
      e.preventDefault()
      e.stopPropagation()
      const files = e.dataTransfer.files
      Array.from(files).forEach(file => this.addImage(file))
    },
    addImage (file) {
      if (!file.type.match('image.*')) {
        return
      }
      const reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}

export default rulesMixin
