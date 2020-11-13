import test from 'ava';

import { error } from './logger';

test('error', (t) => {
  t.notThrows(() => error('error'));
});
