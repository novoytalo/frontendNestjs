  // // cut repeated data



  export default  function condensedataFunction(dateToCondense:any){
    const sumEqualDataExtractXY: {
        x: Date;
        y: number;
      }[] = Object.values(
        dateToCondense.reduce((r: any, o: any) => {
          r[o.x] = r[o.x] || { x: o.x, y: 0 };
          r[o.x].y += +o.y;
          return r;
        }, {})
      );
    
      const valuesEspt = sumEqualDataExtractXY.map((value) => ({
        x: value.x,
        y: value.y,
      }));
      const dataDate = valuesEspt.map((value) => value.x);
      const dataSet2 = sumEqualDataExtractXY.map((value) => ({
        x: value.x,
        y: value.y / 2,
      }));
      console.log("bruttooo2: ", valuesEspt);
      return {
        valuesEspt:valuesEspt,
        dataDate:dataDate,
        dataSet2:dataSet2
    }
  }


 