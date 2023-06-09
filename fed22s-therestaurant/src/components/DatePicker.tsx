import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  selected: Date;
  onChange: (date: Date) => void;
}

const AdminDatePicker = ({ selected, onChange }: DatePickerProps) => {
  console.log("selected", selected);
  return <DatePicker selected={new Date()} onChange={onChange} />;
};
export default AdminDatePicker;
