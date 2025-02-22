import { Button } from "@mui/material"
import { SortOrder } from "../../types/SortOrder";

interface Props {
  setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>;
}

const SortOptions: React.FC<Props> = ({setSortOrder}) => (
    <div className="SortOptions__Container">
        <Button onClick={() => setSortOrder(SortOrder.ASC)}>Sort by Size (Asc)</Button>
        <Button onClick={() => setSortOrder(SortOrder.DESC)}>Sort by Size (Desc)</Button>
    </div>
)

export default SortOptions;