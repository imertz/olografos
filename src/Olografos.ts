import data from './data'
import type { Options } from './types'
// export class Olografos {
//   value: number

//   constructor(n: number) {
//     this.value = n
//   }

//   static val(num: number): string {
//     if (typeof num !== 'number') {
//       throw new TypeError('Please enter a number')
//     }
//     if (num < 0) {
//       throw new TypeError('Please enter a valid number')
//     }
//     let result = ''
//     if (num >= 100 && num < 1000) {
//       const numStr = parseInt(num.toString()[0])
//       switch (numStr) {
//         case 1:
//           result = 'εκατό'
//           break
//         case 2:
//           result = 'διακόσια'
//           break
//         case 3:
//           result = 'τρία'
//           break
//         case 4:
//           result = 'τέσσερα'
//           break
//         case 5:
//           result = 'πέντε'
//           break
//         case 6:
//           result = 'έξι'
//           break
//       }
//     } else {
//       switch (num) {
//         case 1:
//           result = 'ένα'
//           break
//         case 2:
//           result = 'δύο'
//           break
//         case 3:
//           result = 'τρία'
//           break
//         case 4:
//           result = 'τέσσερα'
//           break
//         case 5:
//           result = 'πέντε'
//           break
//         case 6:
//           result = 'έξι'
//           break
//         case 7:
//           result = 'επτά'
//           break
//         case 8:
//           result = 'οκτώ'
//           break
//         case 9:
//           result = 'εννιά'
//           break
//         case 10:
//           result = 'δέκα'
//           break
//         case 11:
//           result = 'έντεκα'
//           break
//         case 12:
//           result = 'δώδεκα'
//           break
//         case 13:
//           result = 'δεκατρία'
//           break
//         case 14:
//           result = 'δεκατέσσερα'
//           break
//         case 15:
//           result = 'δεκαπέντε'
//           break
//         case 16:
//           result = 'δεκαέξι'
//           break
//         case 17:
//           result = 'δεκαεπτά'
//           break
//         case 18:
//           result = 'δεκαοκτώ'
//           break
//         case 19:
//           result = 'δεκαεννιά'
//           break
//         case 20:
//           result = 'είκοσι'
//           break
//         case 21:
//           result = 'εικοσιένα'
//           break
//         case 22:
//           result = 'εικοσιδύο'
//           break
//         case 23:
//           result = 'εικοσιτρία'
//           break
//         case 24:
//           result = 'δέκα'
//           break
//         case 25:
//           result = 'έντεκα'
//           break
//         case 26:
//           result = 'δώδεκα'
//           break
//         case 27:
//           result = 'δεκατρία'
//           break
//         case 28:
//           result = 'δεκατέσσερα'
//           break
//       }
//     }

//     return result
//   }

//   // toString(): string {
//   //   return this.val().toString()
//   // }
// }

const defaultOptions: Options = {
  currency: false,
  ignoreDecimal: false,
  ignoreZeroCurrency: false,
  klisi: 'onomastiki',
  genos: 'oudetero',
}

export function Olografos(
  num: number,
  options: Options = defaultOptions
): string {
  let finalString = ''
  options = { ...options }
  if (!options.currency) {
    options.currency = false
  }
  if (!options.ignoreDecimal) {
    options.ignoreDecimal = false
  }
  if (!options.ignoreZeroCurrency) {
    options.ignoreZeroCurrency = false
  }
  if (!options.klisi) {
    options.klisi = 'onomastiki'
  }
  if (!options.genos) {
    options.genos = 'oudetero'
  }
  const numStr = num.toString().includes('.')
    ? num.toString().split('.')[0]
    : num.toString()
  const digits = data[options.genos][options.klisi]

  function upToThreeDigits(num: number): string {
    let strToReturn = ''
    const numStr = num.toString()
    if (numStr.length === 3) {
      strToReturn = `${digits.tripleDigit[parseInt(numStr.split('')[0])]} ${
        digits.singleOrDoubleDigit[parseInt(numStr.slice(1, 3))]
      }`
    }
    if (numStr.length < 3) {
      strToReturn = digits.singleOrDoubleDigit[parseInt(numStr)]
    }

    return strToReturn
  }
  function upToSixDigits(num: number): string {
    let strToReturn = ''
    const numStr = num.toString()
    if (numStr.length > 3 && numStr.length < 7) {
      let fourDigitString = ''
      if (numStr.length === 4 && numStr[0] === '1') {
        fourDigitString = digits.thousand
      }
      if (numStr.length === 4 && numStr[0] !== '1') {
        const fourDigitNumber = numStr[0]
        fourDigitString = `${
          digits.fourOrFiveDigits[parseInt(fourDigitNumber)]
        } ${digits.thousands}`
        console.log(fourDigitString)
      }
      if (numStr.length === 5) {
        const fourDigitNumber = numStr[0] + numStr[1]
        fourDigitString = `${
          digits.fourOrFiveDigits[parseInt(fourDigitNumber)]
        } ${digits.thousands}`
      }
      if (numStr.length === 6) {
        const sixDigitNumber = numStr[0]
        const fourDigitNumber = numStr[1] + numStr[2]
        fourDigitString = `${digits.sixDigits[parseInt(sixDigitNumber)]} ${
          digits.fourOrFiveDigits[parseInt(fourDigitNumber)]
        } ${digits.thousands}`
      }

      strToReturn = `${fourDigitString}`
    }
    return strToReturn
  }
  function upToNineDigits(num: number): string {
    let strToReturn = ''
    const numStr = num.toString()
    if (numStr.length > 6 && numStr.length < 10) {
      let fourDigitString = ''
      if (numStr.length === 7 && numStr[0] === '1') {
        fourDigitString = digits.million
      }
      if (numStr.length === 7 && numStr[0] !== '1') {
        const fourDigitNumber = numStr[0]
        fourDigitString = `${
          digits.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } ${digits.millions}`
        console.log(fourDigitString)
      }
      if (numStr.length === 8) {
        const fourDigitNumber = numStr[0] + numStr[1]
        fourDigitString = `${
          digits.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } ${digits.millions}`
      }
      if (numStr.length === 9) {
        const sixDigitNumber = numStr[0]
        const fourDigitNumber = numStr[1] + numStr[2]
        fourDigitString = `${digits.tripleDigit[parseInt(sixDigitNumber)]} ${
          digits.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } ${digits.millions}`
      }

      strToReturn = `${fourDigitString}`
    }
    return strToReturn
  }
  function upToTwelveDigits(num: number): string {
    let strToReturn = ''
    const numStr = num.toString()
    if (numStr.length > 9 && numStr.length < 13) {
      let fourDigitString = ''
      if (numStr.length === 10 && numStr[0] === '1') {
        fourDigitString = 'ένα δις'
      }
      if (numStr.length === 10 && numStr[0] !== '1') {
        const fourDigitNumber = numStr[0]
        fourDigitString = `${
          digits.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } δις`
        console.log(fourDigitString)
      }
      if (numStr.length === 11) {
        const fourDigitNumber = numStr[0] + numStr[1]
        fourDigitString = `${
          digits.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } δις`
      }
      if (numStr.length === 12) {
        const sixDigitNumber = numStr[0]
        const fourDigitNumber = numStr[1] + numStr[2]
        fourDigitString = `${digits.tripleDigit[parseInt(sixDigitNumber)]} ${
          digits.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } δις`
      }

      strToReturn = `${fourDigitString}`
    }
    return strToReturn
  }

  if (numStr === '0') {
    finalString = 'μηδέν'
  }
  if (numStr.length <= 3 && numStr !== '0') {
    finalString = upToThreeDigits(num).trim()
  }
  if (numStr.length > 3 && numStr.length <= 6) {
    finalString = `${upToSixDigits(parseInt(numStr))} ${upToThreeDigits(
      parseInt(numStr.slice(-3))
    )}`.trim()
  }
  if (numStr.length > 6 && numStr.length <= 9) {
    finalString = `${upToNineDigits(parseInt(numStr))} ${upToSixDigits(
      parseInt(numStr.slice(-6))
    )} ${upToThreeDigits(parseInt(numStr.slice(-3)))}`.trim()
  }
  if (numStr.length > 9 && numStr.length <= 12) {
    finalString = `${upToTwelveDigits(parseInt(numStr))} ${upToNineDigits(
      parseInt(numStr.slice(-9))
    )} ${upToSixDigits(parseInt(numStr.slice(-6)))} ${upToThreeDigits(
      parseInt(numStr.slice(-3))
    )}`.trim()
  }
  if (options.currency) {
    finalString = `${finalString} ευρώ`
  }
  if (num.toString().includes('.') && !options.currency) {
    let floatStr = num.toString().split('.')[1]
    if (floatStr.length === 1) {
      floatStr = num.toString().split('.')[1] + '0'
    }
    finalString = `${finalString} και ${
      data.oudetero[options.klisi].singleOrDoubleDigit[parseInt(floatStr)]
    } ${data.oudetero[options.klisi].floatHundreds}`
  }
  if (num.toString().includes('.') && options.currency) {
    let floatStr = num.toString().split('.')[1]
    if (floatStr.length === 1) {
      floatStr = num.toString().split('.')[1] + '0'
    }
    finalString = `${finalString} και ${
      data.oudetero[options.klisi].singleOrDoubleDigit[parseInt(floatStr)]
    } ${data.oudetero[options.klisi].floatHundredsEuro}`
  }
  return finalString
}

// export function Olografos(num: number) {
//   let strToReturn = ''
//   const numStr = num.toString()
//   // if (numStr.length > 6 && numStr.length < 10) {
//   //   let fourDigitString = ''
//   //   if (numStr.length === 4 && numStr[0] === '1') {
//   //     fourDigitString = 'χίλια'
//   //   } else {
//   //     const fourDigitNumber = numStr.slice(0, numStr.length - 3)
//   //     fourDigitString = `${
//   //       data.sixDigits[parseInt(fourDigitNumber.split('')[0])]
//   //     } ${
//   //       data.fourOrFiveDigits[parseInt(fourDigitNumber.slice(1, 3))]
//   //     } χιλιάδες`
//   //   }
//   // }
//   if (numStr.length > 3 && numStr.length < 7) {
//     let fourDigitString = ''
//     if (numStr.length === 4 && numStr[0] === '1') {
//       fourDigitString = 'χίλια'
//     }
//     if (numStr.length === 4 && numStr[0] !== '1') {
//       const fourDigitNumber = numStr[0]
//       fourDigitString = `${
//         data.fourOrFiveDigits[parseInt(fourDigitNumber)]
//       } χιλιάδες`
//       console.log(fourDigitString)
//     }
//     if (numStr.length === 5) {
//       const fourDigitNumber = numStr[0] + numStr[1]
//       fourDigitString = `${
//         data.fourOrFiveDigits[parseInt(fourDigitNumber)]
//       } χιλιάδες`
//       console.log(fourDigitString)
//     }

//     if (numStr.length === 5) {
//       const fourDigitNumber = numStr[0] + numStr[1]
//       fourDigitString = `${
//         data.fourOrFiveDigits[parseInt(fourDigitNumber)]
//       } χιλιάδες`
//       console.log(fourDigitString)
//     }

//     const threeDigitNumber = numStr.slice(-3)

//     strToReturn = `${fourDigitString} ${
//       data.tripleDigit[parseInt(threeDigitNumber.split('')[0])]
//     } ${data.singleOrDoubleDigit[parseInt(threeDigitNumber.slice(1, 3))]}`
//   }
//   if (numStr.length === 3) {
//     strToReturn = `${data.tripleDigit[parseInt(numStr.split('')[0])]} ${
//       data.singleOrDoubleDigit[parseInt(numStr.slice(1, 3))]
//     }`
//   }
//   if (numStr.length < 3) {
//     strToReturn = data.singleOrDoubleDigit[parseInt(numStr)]
//   }

//   return strToReturn
// }

console.log(all(1))
console.log(all(0))
console.log(all(2))
console.log(all(10))
console.log(all(21))
console.log(all(23034))
console.log(all(123034))
console.log(all(323000))
console.log(all(345123001000, { currency: true, klisi: 'geniki' }))
console.log(all(1001500, { klisi: 'geniki' }))
console.log(all(1001500.5, { klisi: 'aitiatiki' }))
