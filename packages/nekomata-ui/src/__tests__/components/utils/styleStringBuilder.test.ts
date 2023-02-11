// @vitest-environment jsdom

import { expect, it, describe } from 'vitest'

import {writeStyleStringFrom} from '../../../lib/components/utils/styleStringBuilder'

describe("Unit test to check the styleStringBuilder", () => {

    it('Check if writeStyleStringFrom returns a correct result', () => {
        const testObject = {
            '--test-1': "X",
            '--test-2': "Y",
            '--test-3': "Z",
        };

        let expected = " --test-1: X; --test-2: Y; --test-3: Z;";

        let result = writeStyleStringFrom(testObject);

        expect(expected).toEqual(result);
    })
  
  });