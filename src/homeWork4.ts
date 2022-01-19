import { debounce } from 'lodash.debounce'

function test (): void {
  console.log('Hello, world!')
}

debounce(test, 6, { loading: true })
