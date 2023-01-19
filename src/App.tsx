import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { List } from "./components/List";
import { FilterState, ToDoItem } from "./types";
import { AddItem } from "./components/AddItem"
import { Filter } from "./components/Filter";

function App() {
  const [items, setItems] = useState<ToDoItem[]>([])
  const [filterState, setFilterState] = useState<FilterState>(FilterState.ALL);

  const filteredItems = () => {
    if (filterState === FilterState.ALL) {
      return items
    }
    if (filterState === FilterState.DONE) {
      return items.filter(item => item.checked)
    }
    if (filterState === FilterState.UNDONE) {
      return items.filter(item => !item.checked)
    }
    return items
  }

  const onChangeFilterState = (value: FilterState) => {
    setFilterState(value);
  }

  const handleRemoveTask = (task: ToDoItem) => {
    setItems(items.filter(item => task.id !== item.id))
  }

  const handleToggle = (task: ToDoItem) => {
    const result = items.map(item => {
      if (item.id === task.id) {
        return {
          ...item,
          checked: !item.checked
        }
      }
      return item
    })
    setItems(result);
  }

  const handleAddTask = (name: string) => {
    const newTask = { id: uuid(), name, checked: false}
    setItems([...items, newTask])
  }

  return (
   <div>
     <header>
       <h1>ToDo List</h1>
     </header>
     <AddItem onAdd={handleAddTask}/>
     <Filter onChange={onChangeFilterState}/>
     {items.length
       ? <List items={filteredItems()} onRemove={handleRemoveTask} onToggle={handleToggle}/>
       : <p>Список задач пуст</p>
     }
   </div>
  );
}

export default App;
