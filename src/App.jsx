import "./App.css";

/* Components Imports */
import Header from "./components/Header";
import Holidaycard from "./components/HolidayCard";
import NextHoliday from "./components/NextHoliday";
import MonthFilter from "./components/MothFilter";

/* React Imports */
import { useState } from "react";

/* Mocked data */
import holidays from "./data/holidays";

function App() {
  const [month, setMonth] = useState("");
  return (
    <>
      <Header />

      <NextHoliday />

      <p className="count">14 feriados em 2026</p>

      <section className="filter">
        {/* <YearForm year={year} onSearch={setYear} /> */}
        <MonthFilter month={month} onChange={setMonth} />

      </section>

      <main className="holiday-list">
        {holidays.map((item) => (
          <Holidaycard
            key={item.date}
            date={item.date}
            name={item.name}
            weekday={item.weekday}
          />
        ))}
      </main>
    </>
  );
}

export default App;