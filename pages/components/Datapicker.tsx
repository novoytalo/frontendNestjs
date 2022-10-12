import { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
//datapicker 

type drill ={
  setgetIntervalDate: any;
  getIntervalDate:any;
}

export default function Datapicker ({setgetIntervalDate, getIntervalDate}:drill) {
  
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

//   const onChange = dates => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);
// }

//.toISOString()

const placeholder = 'place holder'
const displayFormat= 'yyyy/mm/dd'
// const startDateId = true
// const [dateRange, setDateRange] = useState<[null|Date,null|Date]>([new Date(),new Date()]);
const [dateRangeStart, setDateRangeStart] = useState<null|Date>(new Date());
const [dateRangeFinish, setDateRangeFinish] = useState<null|Date>(new Date());
const [startDate, endDate] = [dateRangeStart, dateRangeFinish];

// if(dateRange[0]!==null&&dateRange[1]!==null){
//   // pinitialPag:0, finalPag2:200
//   setgetIntervalDate({interval_date_start:dateRange[0],interval_date_end:dateRange[1]})
// }


// const yearRange= Array.from(new Array(50), (x, i) => i+2000)
// const [startDate, setStartDate] = useState(new Date());
// const years = range(1990, getYear(new Date()) + 1, 1);
// const years = Array.from(new Array(50), (x, i) => i+2000)
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// function getYear (valueYear:any){
//   console.log(valueYear)

// }

// const [getYear, setgetYear] = useState(new Date().getFullYear())
// const [getMonth, setgetMonth] = useState(new Date().getMonth())
// const [getday, setGetDay] = useState(new Date().getMonth())
// const [completeDate, setCompleteDate] = useState<Date | null>(new Date())
  return(


<div>
   {/* <DatePicker
      selectsRange={true}
      
      startDate={startDate}
      endDate={endDate}
      dateFormat="yyyy-mm-dd"
      className="text-center"
      // peekNextMonth
      // showMonthDropdown
      showYearDropdown
      yearDropdownItemNumber={15}
      // showTimeSelect
      monthsShown={2}
      placeholderText="Escolha uma data"
      onChange={(update) => {
        // setDateRange(update);
        // console.log(update)
        update.map(value=>{ 
          if(value !=null){
            value.toISOString();
            setDateRange(update);
           };
            if(startDate!==null&&endDate!==null){
              // pinitialPag:0, finalPag2:200
              setgetIntervalDate({interval_date_start:dateRange[0],interval_date_end:dateRange[1]})
            }
         })
      }}
 
    /> */}
    <div>
      Start
       <DatePicker
      selected={startDate}
      onChange={(date) => {
        setDateRangeStart(date);
        if(date!==null)
        setgetIntervalDate({interval_date_start:new Date(date).toISOString(),interval_date_end:getIntervalDate.interval_date_end});}}
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
        if(date!==null)
        setgetIntervalDate({interval_date_start:getIntervalDate.interval_date_start,interval_date_end:new Date(date).toISOString()})
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