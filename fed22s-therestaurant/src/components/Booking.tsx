import { BookingsCalendar } from "./BookingsCalendar/BookingsCalendar";
import { useState } from "react";
import { Form } from "./Form";
import { CenteringWrapper } from "./styled/Wrappers";

export const Booking = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const switchCalendar = () => {
    setCalendarOpen(true);
  };
  return (
    <>
      <CenteringWrapper>
        <Form switchCalendar={switchCalendar}></Form>
        {calendarOpen && <BookingsCalendar></BookingsCalendar>}
      </CenteringWrapper>
    </>
  );
};
