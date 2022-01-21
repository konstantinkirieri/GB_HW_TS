//1

//Забавно что по умолчанию TypeScript пишет что localStorage.getItem() возвращает строку,
//хотя на самом деле это может быт и null если нет ключа
//https://developer.mozilla.org/ru/docs/Web/API/Storage/getItem

type UserData = {
  username: string
  avatarUrl: string
}

function isUserData(obj: object | null): obj is UserData {
  const keyOfUserData = ['username', 'avatarUrl']
  if(obj == null)
    return false
  for(const key of keyOfUserData) {
    const condition = key in obj
    if(!condition) return false
  }
  
  return true
}


export function getUserData(): UserData {
  const userDataJSON: unknown = localStorage.getItem('user')

  if (typeof userDataJSON !== 'string')
    return { username: 'none', avatarUrl: '/img/avatar.png' }

  const userData: unknown = JSON.parse(userDataJSON)

  if (typeof userData !== 'object')
    return { username: 'none', avatarUrl: '/img/avatar.png' }

  if (isUserData(userData))
    return userData

  return { username: 'none', avatarUrl: '/img/avatar.png' }
}

export function getFavoritesAmount(): number | undefined {
  const favoritesAmount = localStorage.getItem('favoritesAmount')
  if (favoritesAmount && !isNaN(+favoritesAmount))
    return +favoritesAmount
  return
}

//2
// Создать интерфейс SearchFormData, в котором описать структуру для полей поисковой формы.

interface SearchFormData {
  city: string
  checkin: string
  checkout: string
  price: number
}

// Написать функцию-обработчик формы search,
// которая собирает заполненные пользователем данные в формате описанной структуры
// и передаёт их в функцию поиска.

//название serch оставил для функции поиска

export function processingSearchFormData(searchForm: HTMLFormElement): void {
  const searchFormData: SearchFormData = {
    city: searchForm['city'].value,
    checkin: searchForm['checkin'].value,
    checkout: searchForm['checkout'].value,
    price: +searchForm['price'].value,
  }

  const callback = (arg: Error | Array<Place>) => {
    console.log(arg)
  }

  search(searchFormData, callback)
}


interface Place {
  1: any
}

function search(
  searchFormData: SearchFormData,
  callback: (arg: Error | Array<Place>) => void
) {
  console.log(searchFormData)

  setTimeout(() => {
    const coin = Math.random()
    if(coin < 0.5) {
      callback(new Error('Errro'))
    } else {
      callback([])
    }
  }, 2000)
}
