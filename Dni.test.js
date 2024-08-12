import { describe, it, expect } from 'vitest';
import { DNI } from 'Dni.js';
describe('DNI', () => {
    it('T for rest 0', () => {
        const dni = new DNI(0);
        expect(dni.calcularLetra()).toBe('T');
    });
    it('R for rest 1', () => {
        const dni = new DNI(1);
        expect(dni.calcularLetra()).toBe('R');
    });
    it('W for rest 2', () => {
        const dni = new DNI(2);
        expect(dni.calcularLetra()).toBe('W');
    });
    it('A for rest 3', () => {
        const dni = new DNI(3);
        expect(dni.calcularLetra()).toBe('A');
    });
    it('G for rest 4', () => {
        const dni = new DNI(4);
        expect(dni.calcularLetra()).toBe('G');
    });
    it('error the number is incorrect', () => {
        expect(() => new DNI(-1)).toThrow('the number is incorrect');
        expect(() => new DNI(100000000)).toThrow('the number is incorrect');
    });
    it('error the number is incorrect char', () => {
        expect(() => new DNI('ABC')).toThrow('the number is incorrect');
    });
});