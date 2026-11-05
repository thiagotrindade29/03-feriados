import "./App.css";

/* importa de components */
import Header from "./components/Header";
import HolidayCard from "./components/HolidayCard";
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
          <HolidayCard key={item.date} date={item.date} name={item.name} weekend={item.weekend} type={item.type} />
        ))}
      </main>
    </>
  );
}

export default App;