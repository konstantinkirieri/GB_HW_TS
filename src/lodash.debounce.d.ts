declare module 'lodash.debounce' {
  interface Options {
    loading?: boolean,
    maxWait?: number,
    trailing?: boolean
  }

  export function debounce(
    func: (...arg: any[]) => any,
    wait?: number,
    options?: Options
  ): (...arg: any[]) => any
}
