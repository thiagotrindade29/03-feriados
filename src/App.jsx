import "./App.css";

/* importa de components */
import Header from "./components/Header";
import NextHoliday from "./components/NextHoliday";
/* importa de data */
import holidays from "./data/holiday";

function App() {
  return (
    <>
      <Header />
      <NextHoliday />
      
      <p className="count">14 feriados em 2026</p>

      <main className="holiday-list">
        {holidays.map((item) => (
          <article key={item.date} className="holiday-card">
            <p className="holiday-date">{item.date}</p>

            <div className="holiday-info">
              <h2>{item.name}</h2>
              <p>{item.weekend}</p>
            </div>

            <span className="tag weekend">{item.type}</span>
          </article>
        ))}
      </main>
    </>
  );
}

export default App;