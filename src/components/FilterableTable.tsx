import { filterValuesAtom, filtersAtom, productListAtom } from '@/Atoms'
import { useAtomValue } from 'jotai'
import Filters from './Filters/Filters'

const operators = {
  eq: { name: '=', f: (a: string, b: string) => a === b },
  ne: { name: '!=', f: (a: string, b: string) => a !== b },
  gt: { name: '>', f: (a: string, b: string) => parseFloat(a) > parseFloat(b) },
  it: { name: '<', f: (a: string, b: string) => parseFloat(a) < parseFloat(b) },
}

const typeOperators = {
  string: ['eq', 'ne'],
  number: ['eq', 'ne', 'gt', 'it'],
}

const FilterableTable = () => {
  const productList = useAtomValue(productListAtom)
  const filter = useAtomValue(filtersAtom)
  const filterValues = useAtomValue(filterValuesAtom)

  // useEffect(() => {
  //   console.log()
  // }, [])

  return (
    <>
      <Filters />
      {/* <ProductTable column={columnNames} data={currentProductList} /> */}
    </>
  )
}

export default FilterableTable
