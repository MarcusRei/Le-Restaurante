import { BookingCard } from "./BookingCard";
import { BookingsListWrapper } from "./styled/AdminWrappers";

export const BookingsList = () => {
  return (
    <>
      <BookingsListWrapper>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
      </BookingsListWrapper>
    </>
  );
};
