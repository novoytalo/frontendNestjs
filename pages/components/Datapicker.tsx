import { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
//datapicker 

type drill ={
  setgetIntervalDate: any;
}

export default function Datapicker ({setgetIntervalDate}:drill) {
  
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
const [dateRange, setDateRange] = useState<[null|Date,null|Date]>([new Date(),new Date()]);
const [startDate, endDate] = dateRange;


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
    //showTimeSelect
    //monthsShown={2}

    // const [dateRange, setDateRange] = useState([null, null]);
    // const [startDate, endDate] = dateRange;
    // return (
    //   <DatePicker
    //     selectsRange={true}
    //     startDate={startDate}
    //     endDate={endDate}
    //     onChange={(update) => {
    //       setDateRange(update);
    //     }}
    //     isClearable={true}
    //   />
    // );



    // <div>

<div>
   <DatePicker
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
            if(dateRange[0]!==null&&dateRange[1]!==null){
              // pinitialPag:0, finalPag2:200
              setgetIntervalDate({interval_date_start:dateRange[0],interval_date_end:dateRange[1]})
            }
         })
      }}
      // withPortal
      // popperPlacement='top'

    />
</div>

  )
}