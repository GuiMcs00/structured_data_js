import { orderByAge } from "../src/ordering";

test('must to order by age', () => {
    const people = [
        { name: 'Ana', age: 30},
        { name: 'Guilherme', age: 20},
        { name: 'Carlos', age: 25},
    ];
    const expectedResult = [
        { name: 'Guilherme', age: 20},
        { name: 'Carlos', age: 25},
        { name: 'Ana', age: 30},
    ];

    expect(orderByAge(people)).toEqual(expectedResult);

})