// Practice

setTimeout(() => {
  console.log('Two seconds are up!');
}, 2000);


const names = ['Vince', 'Chantal', 'Caya', 'Gio'];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    }

    callback(data);
  }, 2000);
}

geoCode('Charlotte', (data) => {
  console.log(data);
});


const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;

    callback(sum)
  }, 2000);
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
});