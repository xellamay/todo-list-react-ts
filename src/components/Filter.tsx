import React from "react";
import { FilterState } from "../types";

interface Props {
 onChange: (value: FilterState) => void;
}

export const Filter: React.FC<Props> = ({ onChange}) => {
  return (
    <div className="mt-5">
      <button onClick={() => onChange(FilterState.ALL)}>Все задачи</button>
      <button onClick={() => onChange(FilterState.DONE)}>Сделано</button>
      <button onClick={() => onChange(FilterState.UNDONE)}>На очереди</button>
    </div>
  )
}
