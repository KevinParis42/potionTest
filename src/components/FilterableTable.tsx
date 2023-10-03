import {
  filterValuesAtom,
  filtersAtom,
  productColumnAtom,
  productListAtom,
} from '@/Atoms'
import { useAtomValue } from 'jotai'
import { useEffect, useReducer } from 'react'
import Filters from './Filters/Filters'
import ProductTable from './ProductTable'

const FilterableTable = () => {
  const productList = useAtomValue(productListAtom)
  const productColumn = useAtomValue(productColumnAtom)
  const filter = useAtomValue(filtersAtom)
  const filterValues = useAtomValue(filterValuesAtom)

  const productListReducer = (state: ProductType[], action: Actions) => {
    if (action.type === '') return productList
    if (!filter[action.type] || !filter[action.type][1]) return productList
    const val = filter[action.type][0] as string
    const propObject = filter[action.type][1] as { prop: string[] }
    const prop = propObject.prop[0]

    const x: DispatchFunctionMap = {
      ne: (a: string, b: string) => a !== b,
      eq: (a: string, b: string) => a === b,
      gt: (a: string, b: string) => parseFloat(a) > parseFloat(b),
      it: (a: string, b: string) => parseFloat(a) < parseFloat(b),
    }

    return productList.filter((product) =>
      x[action.type](product[prop as keyof ProductType].toString(), val)
    )
  }

  const [currentProductList, dispatch] = useReducer(
    productListReducer,
    productList
  )

  const updateTable = () => {
    if (
      !filterValues.operator ||
      !filterValues.value ||
      !filterValues.property
    ) {
      dispatch({ type: '' })
      return
    }
    const key = Object.keys(filter)[0]
    if (!filter[key]) return
    dispatch({ type: key })
  }

  useEffect(() => {
    updateTable()
  }, [filter])

  return (
    <>
      <Filters />
      <ProductTable column={productColumn} data={currentProductList} />
    </>
  )
}

export default FilterableTable
