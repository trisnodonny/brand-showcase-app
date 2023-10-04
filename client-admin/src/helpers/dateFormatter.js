const DateFormatter = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const isoDateString = date
  const newDate = new Date(isoDateString)
  return new Intl.DateTimeFormat('id-ID', options).format(newDate);
};

export default DateFormatter;
