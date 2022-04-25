# Ολογράφως

Μετατροπή αριθμών (συμπεριλαμβανομέων και δεκαδικών) σε μορφή ολογράφως, με δυνατότητα επιλογής γένους και κλίσης. Παρέχεται και η δυνατότητα για μετατροπή ποσών ευρώ σε μορφή ολογράφως.

Converts Numbers (including decimal points) into words. It also converts the numbers into words for currency.

## Εγκατάσταση

```js
npm install olografos --save
```

## Χρήση

Εισαγωγή

```js
const { olografos } = require('olografos')
```

Ή

```js
import { olografos } from 'olografos'
```

Επιλογές

```js
const lexis = olografos(
  123,
 {
  currency: false
  klisi: 'onomastiki'
  genos: 'oudetero'
 }
})
```

```js
let lexis = olografos(123)
// lexis = εκατόν είκοσι τρία

lexis = olografos(123.45)
// lexis = εκατόν είκοσι τρία και σαράντα πέντε εκατοστά
```

_Note: When fractional part starts with zero, the digits after decimal points are converted into respective numbers individually_

To convert to currency

```js
const toWords = new ToWords()

let words = toWords.convert(452, { currency: true })
// words = Four Hundred Fifty Two Rupees Only

words = toWords.convert(452.36, { currency: true })
// words = Four Hundred Fifty Two Rupees And Thirty Six Paise Only
```

To discard fractional unit

```js
const toWords = new ToWords()

let words = toWords.convert(452.36, { currency: true, ignoreDecimal: true })
// words = Four Hundred Fifty Two Rupees Only
```

To ignore major currency number when it's zero

```js
const toWords = new ToWords()

let words = toWords.convert(0.572, { currency: true, ignoreZeroCurrency: true })
// words = Five Hundred Seventy Two Paise Only
```

## Options

| Επιλογή            | Type         | Default      | Description                                                                                                                                                              |
| ------------------ | ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| localeCode         | string       | 'en-IN'      | Locale code for selecting i18n.                                                                                                                                          |
| currency           | boolean      | false        | Whether the number to be converted into words written as currency.<br/>_Note: When currency:true, number will be rounded off to two decimals before converting to words_ |
| klisi              | 'onomastiki' | 'onomastiki' | Η κλίση στην οποία θα γραφεί ο αριθμός                                                                                                                                   |
| ignoreZeroCurrency | boolean      | false        | Whether to ignore zero currency value while converting into words.                                                                                                       |
| doNotAddOnly       | boolean      | false        | Do not add `only` at the end of the words. This works only when currency = true                                                                                          |

## Inspiration for core logic

[https://stackoverflow.com/a/46221860](https://stackoverflow.com/a/46221860)

# Μετατροπή ενός αριθμού στην αντίστοιχη μορφή του ολογράφως

Olografos(number) : Function που μετατρέπει τον εισαχθέντα αριθμό στην αντίστοιχη μορφή του ολογράφως
