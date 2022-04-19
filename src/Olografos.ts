export class Olografos {
  value: number

  constructor(n: number) {
    this.value = n
  }

  static val(num: number): string {
    if (typeof num !== 'number') {
      throw new TypeError('Please enter a number')
    }
    if (num < 0) {
      throw new TypeError('Please enter a valid number')
    }
    let result = ''
    if (num >= 100 && num < 1000) {
      const numStr = parseInt(num.toString()[0])
      switch (numStr) {
        case 1:
          result = 'εκατό'
          break
        case 2:
          result = 'διακόσια'
          break
        case 3:
          result = 'τρία'
          break
        case 4:
          result = 'τέσσερα'
          break
        case 5:
          result = 'πέντε'
          break
        case 6:
          result = 'έξι'
          break
      }
    } else {
      switch (num) {
        case 1:
          result = 'ένα'
          break
        case 2:
          result = 'δύο'
          break
        case 3:
          result = 'τρία'
          break
        case 4:
          result = 'τέσσερα'
          break
        case 5:
          result = 'πέντε'
          break
        case 6:
          result = 'έξι'
          break
        case 7:
          result = 'επτά'
          break
        case 8:
          result = 'οκτώ'
          break
        case 9:
          result = 'εννιά'
          break
        case 10:
          result = 'δέκα'
          break
        case 11:
          result = 'έντεκα'
          break
        case 12:
          result = 'δώδεκα'
          break
        case 13:
          result = 'δεκατρία'
          break
        case 14:
          result = 'δεκατέσσερα'
          break
        case 15:
          result = 'δεκαπέντε'
          break
        case 16:
          result = 'δεκαέξι'
          break
        case 17:
          result = 'δεκαεπτά'
          break
        case 18:
          result = 'δεκαοκτώ'
          break
        case 19:
          result = 'δεκαεννιά'
          break
        case 20:
          result = 'είκοσι'
          break
        case 21:
          result = 'εικοσιένα'
          break
        case 22:
          result = 'εικοσιδύο'
          break
        case 23:
          result = 'εικοσιτρία'
          break
        case 24:
          result = 'δέκα'
          break
        case 25:
          result = 'έντεκα'
          break
        case 26:
          result = 'δώδεκα'
          break
        case 27:
          result = 'δεκατρία'
          break
        case 28:
          result = 'δεκατέσσερα'
          break
      }
    }

    return result
  }

  // toString(): string {
  //   return this.val().toString()
  // }
}
