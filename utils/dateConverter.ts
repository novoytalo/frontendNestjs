    
    
  export default  function dateConvertFunc(dateToConvert:any){  

    const date = new Date(dateToConvert);
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });

    const dateToConvertEnd = year + "/" + month + "/" + day;
    return dateToConvertEnd  
    //output ex: 2020/10/14
  }