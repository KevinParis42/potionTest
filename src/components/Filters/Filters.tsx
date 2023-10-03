import {
  filterValuesAtom,
  filtersAtom,
  productColumnAtom,
  productListAtom,
} from '@/Atoms'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import FiltersInputSelect from './FiltersInputSelect'
import FiltersSelect from './FiltersSelect'
// import * as R from 'ramda'

const Filters = () => {
  const productColumns = useAtomValue(productColumnAtom)
  const productList = useAtomValue(productListAtom)
  const filterValues = useAtomValue(filterValuesAtom)
  const setFilter = useSetAtom(filtersAtom)
  const [fieldValues, setFieldValues] = useState<string[]>([])
  const [operatorsValues, setOperatorValues] = useState<
    { val: string; name: string }[]
  >([])

  const filterPropertyList = () => {
    if (!filterValues.property) return
    const allUniqueFieldVals = new Set(
      productList.map((product) => {
        const val =
          product[filterValues.property as keyof ProductType].toString()
        return val
      })
    )
    setFieldValues(Array.from(allUniqueFieldVals))
  }

  const saveFilter = () => {
    filterValues.property &&
      filterValues.operator &&
      filterValues.value &&
      setFilter({
        [filterValues.operator]: [
          filterValues.value,
          { prop: [filterValues.property] },
        ],
      })
  }

  const updateOperatorList = () => {
    const findPropertyCol = productColumns.find(
      (col) => col.val === filterValues.property
    )
    if (!findPropertyCol) return
    const operatorForProperty = findPropertyCol?.operator.map((operator) => ({
      val: operator,
      name: operator,
    }))
    setOperatorValues(operatorForProperty)
  }

  useEffect(() => {
    filterPropertyList()
    saveFilter()
    updateOperatorList()
  }, [filterValues.property, filterValues.operator, filterValues.value])

  return (
    <div style={{ display: 'flex' }}>
      <FiltersSelect data={productColumns} fieldTarget="property" />
      <FiltersSelect data={operatorsValues} fieldTarget="operator" />
      <FiltersInputSelect valueData={fieldValues} />
    </div>
  )
}

export default Filters
