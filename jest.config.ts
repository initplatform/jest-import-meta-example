import type { InitialOptionsTsJest } from 'ts-jest/dist/types';
import { jsWithTsESM as tsjPreset } from 'ts-jest/presets';

// Sync object
const config: InitialOptionsTsJest = {
    clearMocks: false,
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            useESM: true,
        },
    },
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    testEnvironment: 'jest-environment-node',
    transform: {
        ...tsjPreset.transform,
    },
    verbose: true,
};
export default config;
