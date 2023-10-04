import { filterValuesAtom, filtersAtom, productListAtom } from '@/Atoms'
import { useAtomValue } from 'jotai'
import { useCallback, useEffect, useReducer } from 'react'
import Filters from './Filters/Filters'
import ProductTable from './ProductTable'

const productColumn = [
  { val: 'id', name: 'ID', operator: ['eq', 'ne', 'gt', 'it'] },
  { val: 'category', name: 'Category', operator: ['eq', 'ne'] },
  { val: 'title', name: 'Title', operator: ['eq', 'ne'] },
  { val: 'price', name: 'Price', operator: ['eq', 'ne', 'gt', 'it'] },
  { val: 'imgLink', name: 'Image Link', operator: ['eq', 'ne'] },
  { val: 'available', name: 'Available', operator: ['eq', 'ne'] },
  { val: 'categoryId', name: 'Category ID', operator: ['eq', 'ne'] },
]

const FilterableTable = () => {
  const productList = useAtomValue(productListAtom)
  const filter = useAtomValue(filtersAtom)
  const filterValues = useAtomValue(filterValuesAtom)

  const productListReducer = (state: ProductType[], action: Actions) => {
    if (action.type === '') {
      return productList
    }
    if (!filter[action.type] || !filter[action.type][1]) {
      return productList
    }
    const val = filter[action.type][0] as string
    const propObject = filter[action.type][1] as { prop: string[] }
    const prop = propObject.prop[0]

    const dispatchFunctions: DispatchFunctionMap = {
      ne: (a: string, b: string) => a !== b,
      eq: (a: string, b: string) => a === b,
      gt: (a: string, b: string) => parseFloat(a) > parseFloat(b),
      it: (a: string, b: string) => parseFloat(a) < parseFloat(b),
    }

    return productList.filter((product) =>
      dispatchFunctions[action.type](
        product[prop as keyof ProductType].toString(),
        val
      )
    )
  }

  const [currentProductList, dispatch] = useReducer(
    productListReducer,
    productList
  )

  const updateTable = useCallback(() => {
    if (
      !filterValues.operator ||
      !filterValues.value ||
      !filterValues.property
    ) {
      dispatch({ type: '' })
      return
    }
    const key = Object.keys(filter)[0]
    if (!filter[key]) {
      return
    }
    dispatch({ type: key })
  }, [filter, filterValues.operator, filterValues.property, filterValues.value])

  useEffect(() => {
    updateTable()
  }, [filter, updateTable])

  return (
    <>
      <Filters column={productColumn} />
      <ProductTable column={productColumn} data={currentProductList} />
    </>
  )
}

export default FilterableTable
