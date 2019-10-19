export function inilializer (store, router) {
  router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.requiredAuth)
    const currentUser = store.getters.getUser

    if (requireAuth && !currentUser) {
      next({ name: 'Login' })
    } else if (to.path === '/login' && currentUser) {
      next({ name: 'Dashboard' })
    } else {
      next()
    }
  })
}
