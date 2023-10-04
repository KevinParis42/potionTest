type Actions = {
  type: string
}

type ProductCol = {
  val: string
  name: string
  operator: string[]
}

type ProductType = {
  id: string
  category: string
  title: string
  price: string
  imgLink: string
  available: boolean
  categoryId: string
}

type Filter = {
  [key: string]: (string | { prop: string[] })[]
}

type DispatchFunctionMap = {
  [key: string]: (a: string, b: string) => boolean
}

type FilterSelectProp = {
  filterData: { val: string; name: string }[]
  fieldTarget: string
}

type FiltersProp = { column: ProductCol[] }

type FiltersInputSelectProps = { valueData: string[] }

type ProductTableProps = {
  column: { name: string; val: string }[]
  data: ProductType[]
}

type operatorsValuesType = { val: string; name: string }[]
