'use client'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const ProductTable: React.FC<ProductTableProps> = ({ column, data }) => {
  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {column.map((col) => (
                <TableCell key={col.val}>{col.name.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product) => (
              <TableRow key={product.id}>
                {Object.values(product).map((categ, index) => (
                  <TableCell key={index}>
                    {typeof categ === 'boolean' ? (
                      categ ? (
                        <CheckBoxOutlinedIcon />
                      ) : (
                        <CheckBoxOutlineBlankOutlinedIcon />
                      )
                    ) : (
                      categ
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProductTable
