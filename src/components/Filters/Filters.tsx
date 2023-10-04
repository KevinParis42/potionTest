import { filterValuesAtom, filtersAtom, productListAtom } from '@/Atoms'
import { useAtomValue, useSetAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import FiltersInputSelect from './FiltersInputSelect'
import FiltersSelect from './FiltersSelect'

const Filters: React.FC<FiltersProp> = ({ column }) => {
  const productList = useAtomValue(productListAtom)
  const filterValues = useAtomValue(filterValuesAtom)
  const setFilter = useSetAtom(filtersAtom)
  const [fieldValues, setFieldValues] = useState<string[]>([])
  const [operatorsValues, setOperatorValues] = useState<operatorsValuesType>([])

  const filterPropertyList = useCallback(() => {
    if (!filterValues.property) {
      return
    }
    const allUniqueFieldVals = new Set(
      productList.map((product) => {
        const val =
          product[filterValues.property as keyof ProductType].toString()
        return val
      })
    )
    setFieldValues(Array.from(allUniqueFieldVals))
  }, [filterValues.property, productList])

  const saveFilter = useCallback(() => {
    filterValues.property &&
      filterValues.operator &&
      filterValues.value &&
      setFilter({
        [filterValues.operator]: [
          filterValues.value,
          { prop: [filterValues.property] },
        ],
      })
  }, [
    filterValues.operator,
    filterValues.property,
    filterValues.value,
    setFilter,
  ])

  const updateOperatorList = useCallback(() => {
    const findPropertyCol = column.find(
      (col) => col.val === filterValues.property
    )
    if (!findPropertyCol) {
      return
    }
    const operatorForProperty = findPropertyCol?.operator.map((operator) => ({
      val: operator,
      name: operator,
    }))
    setOperatorValues(operatorForProperty)
  }, [column, filterValues.property])

  useEffect(() => {
    filterPropertyList()
    saveFilter()
    updateOperatorList()
  }, [filterPropertyList, saveFilter, updateOperatorList])

  return (
    <div style={{ display: 'flex' }}>
      <FiltersSelect filterData={column} fieldTarget="property" />
      <FiltersSelect filterData={operatorsValues} fieldTarget="operator" />
      <FiltersInputSelect valueData={fieldValues} />
    </div>
  )
}

export default Filters
