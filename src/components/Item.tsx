import React from 'react';
import { ToDoItem } from "../types";

interface Props {
  data: ToDoItem;
  onRemove: (task: ToDoItem) => void;
  onToggle: (task: ToDoItem) => void;
}

const Item: React.FC<Props> = ({ data , onRemove, onToggle }) => (
  <li className="list-item">
    <label>
      <input
        className="list-item__checkbox"
        type="checkbox"
        checked={data.checked}
        onChange={() => onToggle(data)}
      />
      <div className="list-item__text">{data.name}</div>
    </label>
    <button className="list-item__btn-del" onClick={() => onRemove(data)}>&times;</button>
  </li>
)


export default Item;
