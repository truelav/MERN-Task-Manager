import React from "react";

export default function MySelect({ defaultValue, options, value, onChange }) {
  return (
    <div className="MySelect">
      <select>
        <option disabled value={defaultValue}>
          {defaultValue}
        </option>

        {options.map((o, i) => {
          return (
            <option value={o.value} key={i}>
              {o.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
