
import { activOperatorAtom, activPropertyAtom } from '@/Atoms';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

const FiltersSelect: React.FC<{ data: { val: string, name: string }[], fieldTarget: string }> = ({ data, fieldTarget }) => {

  const [activ, setActiv] = useState('')
  const setActivProperty = useSetAtom(activPropertyAtom)
  const setActivOperator = useSetAtom(activOperatorAtom)


  const handleChange = (e: SelectChangeEvent) => {
    setActiv(e.target.value)
    fieldTarget === 'prop' ? setActivProperty(e.target.value) : setActivOperator(e.target.value)
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={activ}
          onChange={handleChange}
        >
          <MenuItem value={''}>-</MenuItem>
          {data.map((value) => <MenuItem key={value.val} value={value.val}>{value.name}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}

export default FiltersSelect
