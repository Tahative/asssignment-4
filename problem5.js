function findAddress(addressObj) {
    if (typeof addressObj != "object") {
        return "___."; //Error handling message for invalid input.
      }
      else{

        const street = addressObj.street || '__';
        const house = addressObj.house || '__';
        const society = addressObj.society || '__';

        console.log(street, house, society )
}
}
const obj = { 
     street : '10',
     house: '15A',
    society: 'Earth Perfect'
  }
