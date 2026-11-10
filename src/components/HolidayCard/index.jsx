import './Holiday-card.css';

const openedAt = new Date();

export default function HolidayCard({ date, name, weekend }) {
  const day = new Date(`${date}T00:00:00`);
  const formattedDate = day.toLocaleDateString('pt-BR');
  const isLongWeekend = weekend == 'segunda-feira' || weekend == 'sexta-feira';
  const isWeekend = weekend == 'sábado' || weekend == 'domingo';
  const isBrigde = weekend == 'terça-feira' || weekend == 'quinta-feira';

  const isPast = new Date(`${date}T23:59:59`) < openedAt;

  return (
    <article key={date} className={`holiday-card ${isPast ? 'past' : ''}`}>
      <p className="holiday-date">{formattedDate}</p>

      <div className="holiday-info">
        <h2>{name}</h2>
        <p>{weekend} {isPast && 'Já passou'}</p>
      </div>

      {isLongWeekend && <span className="tag long-weekend">Feriadão</span>}
      {isWeekend && <span className="tag weekend">Fim de semana</span>}
      {isBrigde && <span className="tag bridge">Emenda</span>}
    </article>
  )
}
