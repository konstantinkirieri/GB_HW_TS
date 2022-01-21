import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { processingSearchFormData, getUserData, getFavoritesAmount } from './homeWork2.js'

window.addEventListener('DOMContentLoaded', () => {
  const user = getUserData()
  renderUserBlock(user.username, user.avatarUrl, getFavoritesAmount())
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

  const form = document.forms[0]

  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    processingSearchFormData(form)
  })
})
