const butter = {
  another: 'prop',
  some: 'props'
};
const toast = {
  0: 'first',
  1: 'second',
  2: 'third',
  ...butter
};
const sandwich = {
  0: 'first',
  1: 'second',
  ...butter,
  2: 'third'
};