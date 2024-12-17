const add = function (x) {
  return function (y) {
    return x + y;
  };
};

const counter = function () {
  let x = 0;
  console.log('x after: ', x);

  return function () {
    console.log('x inside before: ', x);
    x += 1;
    console.log('x inside after: ', x);
    return x;
  };
};

const cycle = function (times) { // it's a counter without when no arguments are
  // passed
  let afterThought = -1;

  return function () {
    if (afterThought >= times - 1) {
      afterThought = -1;
    }

    afterThought += 1;
    return afterThought;
  };
};

const add3Numbers = function (x) {
  return function (y) {
    console.log('y before: ', y);
    y = y + x;
    console.log('y after: ', y);

    return function (z) {
      return y + z;
    };
  };
};

const cycleRisk = function (times) {
  //can we do this without using closure?
};

const triangle = function (rows) {
  const checkCycle = cycle(4);

  return [...'*'.repeat(rows)].map(function (value) {
    return value.repeat(checkCycle());
  }).join('\n');
};

const assignSubjects = function (subjects, teachers) {
  const getTeacher = cycle(teachers.length);

  return subjects.map(function (subject) {
    return subject + ' ' + teachers[getTeacher()];
  });
};

const subjects = ["English", "Maths", "Science", "Philosophy"];
const teachers = ["Vivek", "Jayanth", "HimaSai"];

console.log(assignSubjects(subjects, teachers));
