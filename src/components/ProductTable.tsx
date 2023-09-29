"use client"
import { activOperatorAtom, activPropertyAtom, activValueAtom, filtersAtom, productColumnAtom, productListAtom } from '@/Atoms';
import { Actions, ProductType } from '@/Types';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAtomValue } from 'jotai';
import { useEffect, useReducer } from 'react';


const ProductTable = () => {

  const productList = useAtomValue(productListAtom)
  const productColumn = useAtomValue(productColumnAtom)
  const activProperty = useAtomValue(activPropertyAtom)
  const activOperator = useAtomValue(activOperatorAtom)
  const activValue = useAtomValue(activValueAtom)
  const filter = useAtomValue(filtersAtom)

  const productListReducer = (state: ProductType[], action: Actions) => {
    if (action.type === '')
      return productList
    if (!filter[action.type] || !filter[action.type][1])
      return productList
    const val = filter[action.type][0] as string
    const propObject = filter[action.type][1] as { prop: string[] }
    const prop = propObject.prop[0]

    if (!prop)
      return productList

    switch (action.type) {
      case 'ne':
        return productList.filter(product =>
          product[prop as keyof ProductType].toString() != val
        )

      case 'eq':
        return productList.filter(product =>
          product[prop as keyof ProductType].toString() == val
        )

      case 'gt':
        return productList.filter(product => {
          const _product = product[prop as keyof ProductType] as string
          return parseFloat(_product) > parseFloat(val)
        })

      case 'it':
        return productList.filter(product => {
          const _product = product[prop as keyof ProductType] as string
          return parseFloat(_product) < parseFloat(val)
        })
      default:
        return productList;
    }
  }

  const [currentProductList, dispatch] = useReducer(productListReducer, productList)

  useEffect(() => {
    if (!activOperator || !activValue || !activProperty) {
      dispatch({ type: '' })
      return
    }
    const keys = Object.keys(filter)
    if (!filter[keys[0]])
      return
    dispatch({ type: keys[0] })
  }, [filter, activOperator, activProperty, activValue])

  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {productColumn.map(col => <TableCell key={col.val}>{col.name.toUpperCase()}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentProductList.map((product) => (
              <TableRow key={product.id} >
                <TableCell component="th" scope="row">{product.id}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.imgLink}</TableCell>
                <TableCell>{product.available ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}</TableCell>
                <TableCell>{product.categoryId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductTable
