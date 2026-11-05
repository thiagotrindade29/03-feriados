import './Holiday-card.css';



export default function HolidayCard({ date, name, weekend, type }) {
  const day = new Date(`${date}T00:00:00`);
  const formattedDate = day.toLocaleDateString('pt-BR');

  return (
    <article key={date} className="holiday-card">
      <p className="holiday-date">{formattedDate}</p>

      <div className="holiday-info">
        <h2>{name}</h2>
        <p>{weekend}</p>
      </div>

      <span className="tag weekend">{type}</span>
    </article>
  )
}
