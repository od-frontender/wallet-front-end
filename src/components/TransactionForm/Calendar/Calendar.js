import React from 'react';
import c from './Calendar.module.scss';

import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

export default function CalendarReact() {
  return (
    <div className={c.calendar}>
      <DateTimePickerComponent
        format={'dd-MMM-yy HH:mm'}
        value={new Date()}
      ></DateTimePickerComponent>
    </div>
  );
}
