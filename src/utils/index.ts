export function CalculateBox(targetArr: [number, number?, number?, number?]): string {
    let resultArr: [number, number, number, number] = [targetArr[0], targetArr[0], targetArr[0], targetArr[0]]
  
    if (targetArr.length === 2) {
      if(targetArr[1] !== undefined) resultArr = [targetArr[0], targetArr[1], targetArr[0], targetArr[1]]
    } else if (targetArr.length === 3) {
      if(targetArr[1] !== undefined && targetArr[2] !== undefined) resultArr = [targetArr[0], targetArr[1], targetArr[2], targetArr[1]]
    } else if (targetArr.length === 4) {
      if(targetArr[1] !== undefined && targetArr[2] !== undefined && targetArr[3] !== undefined) resultArr = [targetArr[0], targetArr[1], targetArr[2], targetArr[3]]
    }
    
    return `${resultArr.toString().replace(/,/gi, 'px ')}px`
  }

  export const formatNumberToComma = (number: number): string => {
    if (Number.isNaN(number)) {
      return '0';
    }
    const formattedNumber = parseInt(Number(number).toString().replace(/\D/g, ''), 10);
    const comma = formattedNumber.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    return comma;
  };