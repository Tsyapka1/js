'use strict';

const obj = {
  firstName: '',
  lastName: '',
  age: 10,
}

// console.log(obj.age);

const nasaPc = {
  ram: 938,
  ramUnit: 'Tb',
  hardDriveInfo: {
    amout: 29,
    unit: 'Pb'
  },
  cpus: [
    {
      name: 'Intel Pentium 3000',
      clockSpeed: 4,
      clockSpeedUnit: 'Ghz',
      cores: [
        {
        id: 0,
        clockSpeed: 4,

      }

      ]
    }
  ]
};


const nasaPcHDDAmout = nasaPc.hardDriveInfo.amout;
const nasaPcHDDInfo = nasaPc.hardDriveInfo.unit;
console.log(`${nasaPcHDDAmout} ${nasaPcHDDInfo}`);

console.log(nasaPc.cpus[0].name);

const { ram, ramUnit, hardDriveInfo: {amout} } = nasaPc;
console.log(ram, ramUnit);