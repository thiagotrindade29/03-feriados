import './Holiday-card.css';


export default function HolidayCard({ date, name, weekend, type }) {
  return (
    <article key={date} className="holiday-card">
      <p className="holiday-date">{date}</p>

      <div className="holiday-info">
        <h2>{name}</h2>
        <p>{weekend}</p>
      </div>

      <span className="tag weekend">{type}</span>
    </article>
  )
}
