import './year-form.css';

export default function YearForm() {
  return (
    <form className="year-form">
      <label htmlFor="year">Ano:</label>
      <div className="year-row">
        <input
          type="number"
          name="year"
          id="year"
          placeholder="2026"
          required
        />
      </div>
    </form>
  );
}