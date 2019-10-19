const rulesMixin = {
  data: () => ({
    mixin_valid: false,
    titleRule: [
      v => !!v || 'El titulo es requerido.',
      v => (v && v.length >= 5) || 'El titulo debe de tener mas de 5 caracteres.',
      v => (v && v.length <= 50) || 'El titulo debe de tener menos de 50 caracteres.'
    ],
    requiredRule: [
      value => !!value || 'El campo es requerido.'
    ]
  })
}

export default rulesMixin
