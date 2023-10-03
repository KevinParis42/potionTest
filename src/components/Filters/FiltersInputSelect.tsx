import { filterValuesAtom } from '@/Atoms'
import { Autocomplete, TextField } from '@mui/material'
import { useAtom } from 'jotai'

const FiltersInputSelect: React.FC<FiltersInputSelectProps> = ({
  valueData,
}) => {
  const [filterValues, setFilterValues] = useAtom(filterValuesAtom)

  return (
    <div>
      <Autocomplete
        options={valueData}
        onInputChange={(event, value) => {
          setFilterValues({ ...filterValues, value })
        }}
        freeSolo
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Values" />}
      />
    </div>
  )
}

export default FiltersInputSelect
