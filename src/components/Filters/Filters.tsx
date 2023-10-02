
import { filterValuesAtom, filtersAtom, productColumnAtom, productListAtom } from '@/Atoms';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import FiltersInputSelect from './FiltersInputSelect';
import FiltersSelect from './FiltersSelect';


const Filters = () => {

  const productColumns = useAtomValue(productColumnAtom)
  const productList = useAtomValue(productListAtom)
  const filterValues = useAtomValue(filterValuesAtom)
  const setFilter = useSetAtom(filtersAtom)
  const [fieldValues, setFieldValues] = useState<string[]>([])
  const [operatorsValues, setOperatorValues] = useState<{ val: string, name: string }[]>([])
  const operatorList = {
    complete: [{ val: 'ne', name: '!=' }, { val: 'eq', name: '=' }, { val: 'gt', name: '>' }, { val: 'it', name: '<' }],
    equal: [{ val: 'ne', name: '!=' }, { val: 'eq', name: '=' }]
  }

  const filterPropertyList = () => {
    if (!filterValues.property)
      return
    const allUniqueFieldVals = new Set(productList.map((product) => {
      const val = product[filterValues.property as keyof ProductType].toString()
      return val
    }))
    setFieldValues(Array.from(allUniqueFieldVals))
  }

  const saveFilter = () => {
    filterValues.property && filterValues.operator && filterValues.value && setFilter(
      { [filterValues.operator]: [filterValues.value, { prop: [filterValues.property] }] }
    )
  }

  const updateOperatorList = () => {
    if (filterValues.property == 'price' || filterValues.property == 'id') {
      setOperatorValues(operatorList.complete)
      return
    }
    setOperatorValues(operatorList.equal)
  }

  useEffect(() => {
    filterPropertyList()
    saveFilter()
    updateOperatorList()
  }, [filterValues.property, filterValues.operator, filterValues.value])

  return (
    <div style={{ display: 'flex' }}>
      <FiltersSelect data={productColumns} fieldTarget='property' />
      <FiltersSelect data={operatorsValues} fieldTarget='operator' />
      <FiltersInputSelect valueData={fieldValues} />
    </div>
  )
}

export default Filters
