import { filterValuesAtom } from '@/Atoms'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useAtom } from 'jotai'
import { useState } from 'react'

const FiltersSelect: React.FC<FilterSelectProp> = ({
  filterData,
  fieldTarget,
}) => {
  const [activ, setActiv] = useState('')
  const [filterValues, setFilterValues] = useAtom(filterValuesAtom)

  const handleChange = (e: SelectChangeEvent) => {
    setActiv(e.target.value)
    setFilterValues({
      ...filterValues,
      [fieldTarget as string]: e.target.value,
    })
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={activ}
          onChange={handleChange}
          name={`${fieldTarget}-select`}
        >
          <MenuItem value={''}>-</MenuItem>
          {filterData.map((value, index) => (
            <MenuItem key={index} value={value.val}>
              {value.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default FiltersSelect
