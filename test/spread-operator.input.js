const butter = {
    some: 'props',
    another: 'prop',
};
const toast = {
    1: 'second',
    0: 'first',
    2: 'third',
    ...butter,
};
const sandwich = {
    1: 'second',
    0: 'first',
    ...butter,
    2: 'third',
};
