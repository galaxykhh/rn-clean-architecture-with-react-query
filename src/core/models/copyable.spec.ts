import { describe, it, expect } from '@jest/globals';
import Copyable from './copyable';

class Person extends Copyable<Person> {
    public readonly name: string;
    public readonly age: number;
    public readonly memos: string[];

    constructor(name: string, age: number, memos: string[]) {
        super();
        this.name = name;
        this.age = age;
        this.memos = memos;
    }
}

describe('Copyable', () => {
    it('copyWith returns new instance', () => {
        // Arrange
        const youngPerson = new Person('John', 20, ['memo1']);
        const targetAge = 10;

        // Act
        const oldPerson = youngPerson.copyWith({ age: targetAge });

        // Assert
        expect(oldPerson).toBeInstanceOf(Person);
        expect(oldPerson).not.toBe(youngPerson);
        expect(oldPerson.age).toBe(10);
    });
});