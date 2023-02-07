# Ολογράφως

Μπορείτε να δείτε πώς λειτουργεί εδώ [olografos.netlify.app](https://olografos.netlify.app/).

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

Για μετατροπή σε ευρώ

```js
let money = olografos(452, { currency: true })
// money = τετρακόσια πενήντα δύο ευρώ

money = olografos(452.36, { currency: true })
// money = τετρακόσια πενήντα δύο ευρώ και τριάντα έξι λεπτά
```

Αλλαγή γένου και κλίσης

```js
let lexis = olografos(452, { klisi: 'aitiatiki', genos: 'thyliko' })
// lexis = τετρακοσίες πενήντα δύο
```

Εκατοστά

```js
let lexis = olografos(1.57, { klisi: 'geniki' })
// lexis = ενός και πενηνταεπτά εκατοστών
```

## Options

| Επιλογή  | Type                                      | Default      | Descr,{options}iption                         |
| -------- | ----------------------------------------- | ------------ | --------------------------------------------- |
| currency | boolean                                   | false        | Μετατροπή του αριθμόυ σε μορφή ολογράφως ευρώ |
| klisi    | 'onomastiki'<br/>'geniki'<br/>'aitiatiki' | 'onomastiki' | Η κλίση στην οποία θα γραφεί ο αριθμός        |
| genos    | 'arseniko'<br/>'thyliko'<br/>'oudetero'   | 'oudetero'   | Το γένος στο οποίο θα γραφεί ο αριθμός        |
