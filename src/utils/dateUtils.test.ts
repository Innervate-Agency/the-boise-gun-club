const { formatDate, parseDate } = require('./dateUtils');

test('formatDate should format date correctly', () => {
    expect(formatDate(new Date('2023-01-01'))).toBe('01/01/2023');
});

test('parseDate should parse date string correctly', () => {
    expect(parseDate('01/01/2023')).toEqual(new Date('2023-01-01'));
});