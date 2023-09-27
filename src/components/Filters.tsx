
import { activOperatorAtom, activPropertyAtom, activValueAtom, filtersAtom, productColumnAtom, productListAtom } from '@/Atoms';
import { ProductType } from '@/Types';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import FiltersInputSelect from './FiltersInputSelect';
import FiltersSelect from './FiltersSelect';


const Filters = () => {

  const productColumns = useAtomValue(productColumnAtom)
  const productList = useAtomValue(productListAtom)
  const activProperty = useAtomValue(activPropertyAtom)
  const activValue = useAtomValue(activValueAtom)
  const activOperator = useAtomValue(activOperatorAtom)
  const [filter, setFilter] = useAtom(filtersAtom)
  const [fieldValues, setFieldValues] = useState<string[]>([])
  const [operatorsValues, setOperatorValues] = useState<{ val: string, name: string }[]>([])
  const operatorList = {
    complete: [{ val: 'ne', name: '!=' }, { val: 'eq', name: '=' }, { val: 'gt', name: '>' }, { val: 'it', name: '<' }],
    equal: [{ val: 'ne', name: '!=' }, { val: 'eq', name: '=' }]
  }

  const filterPropertyList = () => {
    if (!activProperty)
      return
    const allFieldVals = productList.map((product) => {
      const val = product[activProperty as keyof ProductType].toString()
      return val
    })
    const uniqueIds = new Set()
    setFieldValues(allFieldVals.filter(fieldVal => {
      const isDuplicate = uniqueIds.has(fieldVal)
      uniqueIds.add(fieldVal)
      return !isDuplicate
    }))
  }

  const saveFilter = () => {
    activProperty && activOperator && activValue && setFilter(
      { [activOperator]: [activValue, { prop: [activProperty] }] }
    )
  }

  const updateOperatorList = () => {
    if (activProperty == 'price' || activProperty == 'id') {
      setOperatorValues(operatorList.complete)
      return
    }
    setOperatorValues(operatorList.equal)
  }

  useEffect(() => {
    filterPropertyList()
    saveFilter()
    updateOperatorList()
  }, [activProperty, activOperator, activValue])

  return (
    <div style={{ display: 'flex' }}>
      <FiltersSelect data={productColumns} fieldTarget='prop' />
      <FiltersSelect data={operatorsValues} fieldTarget='op' />
      <FiltersInputSelect valueData={fieldValues} />
    </div>
  )
}

export default Filters
