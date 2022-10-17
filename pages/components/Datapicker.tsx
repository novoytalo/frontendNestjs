
// import React from "react";
// import { useField, useFormikContext } from "formik";
// import DatePicker from "react-datepicker";

// export const DatePickerField = ({ ...props }:any) => {
//   const { setFieldValue } = useFormikContext();
//   const [field] = useField(props);
//   return (
//     <DatePicker
//       {...field}
//       {...props}
//       selected={(field.value && new Date(field.value)) || null}
//       onChange={val => {
//         setFieldValue(field.name, val);
//       }}
//     />
//   );
// };




//FROMIC




import { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
//datapicker

type drill = {
  setgetIntervalDate: any;
  getIntervalDate: any;
};

export default function Datapicker({
  setgetIntervalDate,
  getIntervalDate,
}: drill) {
  // const startDateId = true
  // const [dateRange, setDateRange] = useState<[null|Date,null|Date]>([new Date(),new Date()]);
  const [dateRangeStart, setDateRangeStart] = useState<null | Date>(new Date());
  const [dateRangeFinish, setDateRangeFinish] = useState<null | Date>(
    new Date()
  );
  const [startDate, endDate] = [dateRangeStart, dateRangeFinish];

  return (
    <div>
      <div>
        Start
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setDateRangeStart(date);
            if (date !== null)
              setgetIntervalDate({
                interval_date_start: new Date(date).toISOString(),
                interval_date_end: getIntervalDate.interval_date_end,
              });
          }}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dateFormat="yyyy/MM/dd"
          placeholderText="Select a date initial date"
          dropdownMode="select"
        />
      </div>
      End
      <div>
        <DatePicker
          selected={endDate}
          onChange={(date) => {
            setDateRangeFinish(date);
            if (date !== null)
              setgetIntervalDate({
                interval_date_start: getIntervalDate.interval_date_start,
                interval_date_end: new Date(date).toISOString(),
              });
          }}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dateFormat="yyyy/MM/dd"
          placeholderText="Select a final date"
          dropdownMode="select"
        />
      </div>
    </div>
  );
}
