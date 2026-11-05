import './Holiday-card.css';



export default function HolidayCard({ date, name, weekend }) {
  const day = new Date(`${date}T00:00:00`);
  const formattedDate = day.toLocaleDateString('pt-BR');
  const isLongWeekend = weekend == 'segunda-feira' || weekend == 'sexta-feira';
  const isWeekend = weekend == 'sábado' || weekend == 'domingo';
  const isBrigde = weekend == 'terça-feira' || weekend == 'quinta-feira';

  return (
    <article key={date} className="holiday-card">
      <p className="holiday-date">{formattedDate}</p>

      <div className="holiday-info">
        <h2>{name}</h2>
        <p>{weekend}</p>
      </div>

      {isLongWeekend && <span className="tag long-weekend">Feriadão</span>}
      {isWeekend && <span className="tag weekend">Fim de semana</span>}
      {isBrigde && <span className="tag bridge">Emenda</span>}
    </article>
  )
}
