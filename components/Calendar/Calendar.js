{/*import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Example = () => {
    const [value, onChange] = useState(new Date());
  return (
      <Calendar onChange={onChange} value={value} />
  );
};

export default Example
*/}

import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

const Calendar = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });



  return (
    <DatePicker
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      inputPlaceholder="Выберите период"
      shouldHighlightWeekends
    />
  );
};

export default Calendar;
