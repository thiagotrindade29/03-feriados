import "./month-filter.css";

import months from "../../data/months";

export default function MonthFilter({ month, onChange }) {
  return (
    <div className="month-filter">
      <label htmlFor="month">Mês:</label>
      <select className="month-select"
        name="month"
        id="month"
        value={month}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Todos</option>
        {months.map((m) => (
          <option key={m.value} value={m.value}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
}
