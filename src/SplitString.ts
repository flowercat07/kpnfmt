
export function phoneNumberSplitWithString(phoneNumber: string, splitString: string): string {
  phoneNumber = phoneNumber.replace(/[^\d]/g, "")
  switch ( phoneNumber.length ) {
    case 12:
      return [phoneNumber.substr(0, 4), phoneNumber.substr(4, 4), phoneNumber.substr(8, 4)].join(splitString)
    case 11:
      return [phoneNumber.substr(0, 3), phoneNumber.substr(3, 4), phoneNumber.substr(7, 4)].join(splitString)
    case 10:
      if ( phoneNumber.startsWith("02")) {
        return [phoneNumber.substr(0, 2), phoneNumber.substr(2, 4), phoneNumber.substr(6, 4)].join(splitString)
      } else {
        return [phoneNumber.substr(0, 3), phoneNumber.substr(3, 3), phoneNumber.substr(6, 4)].join(splitString)
      }
    case 9:
      return [phoneNumber.substr(0, 2), phoneNumber.substr(2, 3), phoneNumber.substr(5, 4)].join(splitString)
    case 8:
      return [phoneNumber.substr(0, 4), phoneNumber.substr(4)].join(splitString)
    default:
      return phoneNumber
  }
}
