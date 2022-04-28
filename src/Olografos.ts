import data from './data'
import type { Options } from './types'

const defaultOptions: Options = {
  currency: false,
  klisi: 'onomastiki',
  genos: 'oudetero',
}

function removePlusMinusSigns(numString: string) {
  let afterRemoval = numString
  if (numString.includes('-')) {
    afterRemoval = numString.replace('-', '')
  }
  if (numString.includes('+')) {
    afterRemoval = numString.replace('+', '')
  }
  return afterRemoval
}

export function olografos(
  num: number,
  options: Options = defaultOptions
): string {
  if (typeof num !== 'number') {
    throw new TypeError('Number inserted is not of type string')
  }
  let finalString = ''
  options = { ...options }
  if (!options.currency) {
    options.currency = false
  }

  if (!options.klisi) {
    options.klisi = 'onomastiki'
  }
  if (!options.genos) {
    options.genos = 'oudetero'
  }
  const numStr = removePlusMinusSigns(
    num.toString().includes('.') ? num.toString().split('.')[0] : num.toString()
  ).slice(-12)

  const digits = data[options.genos][options.klisi]
  const oudetero = data.oudetero[options.klisi]
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
          oudetero.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } ${digits.millions}`
      }
      if (numStr.length === 8) {
        const fourDigitNumber = numStr[0] + numStr[1]
        fourDigitString = `${
          oudetero.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } ${digits.millions}`
      }
      if (numStr.length === 9) {
        const sixDigitNumber = numStr[0]
        const fourDigitNumber = numStr[1] + numStr[2]
        fourDigitString = `${oudetero.tripleDigit[parseInt(sixDigitNumber)]} ${
          oudetero.singleOrDoubleDigit[parseInt(fourDigitNumber)]
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
          oudetero.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } δις`
      }
      if (numStr.length === 11) {
        const fourDigitNumber = numStr[0] + numStr[1]
        fourDigitString = `${
          oudetero.singleOrDoubleDigit[parseInt(fourDigitNumber)]
        } δις`
      }
      if (numStr.length === 12) {
        const sixDigitNumber = numStr[0]
        const fourDigitNumber = numStr[1] + numStr[2]
        fourDigitString = `${oudetero.tripleDigit[parseInt(sixDigitNumber)]} ${
          oudetero.singleOrDoubleDigit[parseInt(fourDigitNumber)]
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
    finalString = upToThreeDigits(parseInt(numStr)).trim()
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
      data.oudetero[options.klisi].singleOrDoubleDigit[
        parseInt(floatStr[0] + floatStr[1])
      ]
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
  if (num.toString().includes('-')) {
    finalString = `μείον ${finalString}`
  }
  return finalString
}
