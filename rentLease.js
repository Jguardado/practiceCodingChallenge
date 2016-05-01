function Lease(unit, resident, rent, start, end) {
  this.unit = unit;
  this.resident = resident;
  this.rent = rent;
  this.start = start;
  this.end = end;
}

// Rentlytics Dogs 🐕
var LEASES = [
    new Lease('101', 'Bandito', 2150, new Date(2015, 0, 1), new Date(2016, 0, 31)),
    new Lease('102', 'Margot', 2260, new Date(2015, 1, 1), new Date(2016, 1, 28)),
    new Lease('103', 'Zilla', 1945, new Date(2015, 0, 1), new Date(2016, 0, 31)),
    new Lease('104', 'Voltaire', 2100, new Date(2015, 2, 1), new Date(2016, 2, 31)),
    new Lease('105', 'Cooper', 1895, new Date(2014, 11, 1), new Date(2016, 0, 31)),
    new Lease('106', 'Allie', 2150, new Date(2015, 1, 1), new Date(2016, 1, 28)),
];

function total_rent_payments(leases, year, month) {
  // Should return a sum of all rent payments for a month.
}

function expected_payments(leases, year, month) {
  // Should return a list of all units, residents, and rent payments for a month.
}

function move_in_schedule(leases, year, month) {
  // Should return a list of leases starting in a month.
}

// TEST SUITE SETUP - BEGIN
var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha({ ui: 'bdd' });

mocha.suite.emit('pre-require', this, 'solution', mocha);

// TEST SUITE SETUP - END

describe('Rentlytics Doghouse Leases', function () {
  it('total_rent_payments', function () {
    assert(total_rent_payments(LEASES, 2015, 1) == 10400);
    assert(total_rent_payments(LEASES, 2015, 0) == 5990);
  });

  it('expected_payments', function () {
    assert(expected_payments(LEASES, 2015, 1) == [
            { unit: '101', name: 'Bandito', rent: 2150 },
            { unit: '103', name: 'Zilla', rent: 1945 },
            { unit: '105', name: 'Cooper', rent: 1895 },
        ]);
  });

  it('move_in_schedule', function () {
    assert(move_in_schedule(LEASES, 2015, 1) == [
            { unit: '101', name: 'Bandito' },
            { unit: '103', name: 'Zilla' },
        ]);
  });
});

mocha.run(function () {
});
