import React, { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

export const AddItem: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState("");

  return (
    <form className="form"
          onSubmit={(event) => {
            event.preventDefault();
            onAdd(value);
            setValue("")
          }}
    >
      <input className="form__input"
             onChange={(event) => setValue(event.target.value)}
             value={value}
      />
      <button className="form__button"
              type={"submit"}
              disabled={!value}
      >
        &#43;
      </button>
    </form>
  )
}
