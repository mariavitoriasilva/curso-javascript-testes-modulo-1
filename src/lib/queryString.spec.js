const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Maria',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Maria&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Maria',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Maria&abilities=JS,TDD');
  });

  it('should throw an error when an object passed as value', () => {
    const obj = {
      name: 'Maria',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    console.log(queryString(obj));
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
