import { activValueAtom } from "@/Atoms"
import { Autocomplete, TextField } from "@mui/material"
import { useSetAtom } from "jotai"

const FiltersInputSelect: React.FC<{ valueData: string[] }> = ({ valueData }) => {

  const setActivValue = useSetAtom(activValueAtom)

  return (
    <div>
      <Autocomplete
        options={valueData}
        onInputChange={(event, textVal) => {
          setActivValue(textVal)
        }}
        freeSolo
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Values" />}
      />
    </div>
  )
}

export default FiltersInputSelect
