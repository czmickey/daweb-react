const weekdays = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];

const months = [
  {
    name: 'leden',
    days: 31,
  },
  {
    name: 'únor',
    days: 28,
  },
  {
    name: 'březen',
    days: 31,
  },
  {
    name: 'duben',
    days: 30,
  },
  {
    name: 'květen',
    days: 31,
  },
  {
    name: 'červen',
    days: 30,
  },
  {
    name: 'červenec',
    days: 31,
  },
  {
    name: 'srpen',
    days: 31,
  },
  {
    name: 'září',
    days: 30,
  },
  {
    name: 'říjen',
    days: 31,
  },
  {
    name: 'listopad',
    days: 30,
  },
  {
    name: 'prosinec',
    days: 31,
  },
];

// 1.
const weekdaysCapitalize = weekdays.map((item) => item.toUpperCase());

// případně kdybychom chtěli posílat parametr, který zpracujeme:
const weekdaysCapitalize = (weekdays) =>
  weekdays.map((item) => item.toUpperCase());

// 2.
const weekdaysFirstTwoLetters = weekdays.map((item) => item.slice(0, 2));

// 3.
const daysInMonths = months.map((month) => month.days);

// 4.
const firstDayInMonth = months.map((month) => `1. ${month.name} 2020`);

// 5.
const monthsInSpan = months.map(
  (month) => `<span class="month">${month.name}</span>`,
);
