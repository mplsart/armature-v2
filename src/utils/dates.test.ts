// Analytics Utility Tests
/* eslint-env jest */
import { getShortDateString, eventDateSort } from './dates';
import moment from 'moment-timezone';

describe('Ensure eventDateSort', () => {
  test('sorts on empty array', () => {
    expect([].sort(eventDateSort)).toEqual([]);
  });

  test('sorts as expected', () => {
    // Set Up Test
    let eventDates: { start: string; label: string }[] = [];
    eventDates.push({ start: '2020-06-06T14:00:00Z', label: 'Latest' });
    eventDates.push({ start: '2020-04-19T14:00:00Z', label: 'Same' });
    eventDates.push({ start: '2020-04-19T14:00:00Z', label: 'Same' });
    eventDates.push({ start: '2019-04-04T14:00:00Z', label: 'Oldest' });

    // Run Code To Test
    let result1 = eventDates.sort(eventDateSort);
    let result2 = eventDates.reverse().sort(eventDateSort); // Reverse test

    // Check Results
    expect(result1[0].label).toEqual('Latest');
    expect(result1[1].label).toEqual('Same');
    expect(result1[2].label).toEqual('Same');
    expect(result1[3].label).toEqual('Oldest');

    // Check Results of Reverse test
    expect(result2[0].label).toEqual('Latest');
    expect(result2[1].label).toEqual('Same');
    expect(result2[2].label).toEqual('Same');
    expect(result2[3].label).toEqual('Oldest');
  });
});

describe('Ensure getShortDateString', () => {
  let mockNow = moment(new Date('2020-04-01T12:00:00Z'));

  test('returns single day in the future', () => {
    let start = moment(new Date('2020-04-19T14:00:00Z'));
    let end = moment(new Date('2020-04-19T20:00:00Z'));
    expect(getShortDateString(start, end, mockNow)).toBe('Sun Apr 19');
  });

  test('returns single day in the past', () => {
    let start = moment(new Date('2020-01-19T14:00:00Z'));
    let end = moment(new Date('2020-01-19T20:00:00Z'));
    expect(getShortDateString(start, end, mockNow)).toBe('Sun Jan 19');
  });

  test('returns range in the past same month', () => {
    let start = moment(new Date('2020-01-19T14:00:00Z'));
    let end = moment(new Date('2020-01-30T20:00:00Z'));
    expect(getShortDateString(start, end, mockNow)).toBe('Jan 19 - 30');
  });

  test('returns range in the past different months', () => {
    let start = moment(new Date('2020-01-19T14:00:00Z'));
    let end = moment(new Date('2020-02-20T20:00:00Z'));
    expect(getShortDateString(start, end, mockNow)).toBe('Jan 19 - Feb 20');
  });

  test('returns range currently going on', () => {
    let start = moment(new Date('2020-01-19T14:00:00Z'));
    let end = moment(new Date('2020-04-20T20:00:00Z'));
    expect(getShortDateString(start, end, mockNow)).toBe('Now - Apr 20');
  });

  test('returns range currently going on (ends "today")', () => {
    // .endOf('day')
    let start = moment(new Date('2020-01-19T14:00:00Z'));
    let end = moment(new Date('2020-04-01T06:00:00Z'));
    expect(getShortDateString(start, end, mockNow)).toBe('Now - Apr 1');
  });

  test('returns in the future', () => {
    let start = moment(new Date('2020-05-15T14:00:00Z'));
    let end = moment(new Date('2020-05-20T20:00:00Z'));
    expect(getShortDateString(start, end, mockNow)).toBe('May 15 - 20');
  });
});
