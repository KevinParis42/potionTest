interface Actions {
  type: string
}

interface ProductType {
  id: string
  category: string
  title: string
  price: string
  imgLink: string
  available: boolean
  categoryId: string
}

interface Filter {
  [key: string]: (string | { prop: string[] })[]
}

interface DispatchFunctionMap {
  [key: string]: (a: string, b: string) => boolean
}
