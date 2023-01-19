import React from "react";
import Item from "./Item";
import { ToDoItem } from "../types";

interface Props {
  items: ToDoItem[];
  onRemove: (task: ToDoItem) => void;
  onToggle: (task: ToDoItem) => void;
}

export const List: React.FC<Props> = ({ items, onRemove, onToggle }) => (
  <ul>
    {items.map(item => (
      <Item data={item} key={item.id} onRemove={onRemove} onToggle={onToggle}/>
    ))}
  </ul>
)
