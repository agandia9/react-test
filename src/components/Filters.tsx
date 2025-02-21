import { FormControl, TextField } from "@mui/material";
import { Filters } from "../types/Filters";

interface Props {
  filters: { material: string; category: string; color: string; type: string };
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FILTER_KEYS: (keyof Filters)[] = ["material", "category", "color", "type"];

const FiltersComponent: React.FC<Props> = ({ filters, setFilters }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, filterKey: keyof Filters) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [filterKey]: event.target.value,
        }));
      };


  return (
    <div>
      {FILTER_KEYS.map((filterKey) => (
        <FormControl key={filterKey} style={{ margin: 10, minWidth: 120 }}>
          <TextField
          key={filterKey}
          label={filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
          variant="outlined"
          fullWidth
          margin="normal"
          value={filters[filterKey]}
          onChange={(e) => handleChange(e, filterKey)}
        />
      
        </FormControl>
      ))}
    </div>
  );
};

export default FiltersComponent;
