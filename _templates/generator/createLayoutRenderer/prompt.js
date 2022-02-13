module.exports = [
  {
    message: 'What is the layoutRenderer name?',
    name: 'name',
    type: 'input',
    validate: answer => {
      if (answer !== '') {
        return true;
      }
    },
  },
];
