
const pessoas = [
    { name: 'Ana', age: 30},
    { name: 'Guilherme', age: 20},
    { name: 'Carlos', age: 25},
]


export const orderByAge = (pessoas) => {
    return pessoas.sort((a, b) => a.age - b.age)
}