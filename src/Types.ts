export interface Actions {
  type: string
}

export interface ProductType {
  id: string
  category: string
  title: string
  price: string
  imgLink: string
  available: boolean
  categoryId: string
}

export interface Filter {
  [key: string]: (string | { prop: string[] })[]
}
