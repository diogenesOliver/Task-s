import { expect, test } from "vitest";
import { Tasks } from "./TasksEntitie"
import { getFutureDate } from "../__test__/utils/GetFutureDate";

test('Create an Task', () => {
    const endsAt = getFutureDate('2023-09-14')
    const updatedAt = getFutureDate('2023-09-15')
    const createdAt = getFutureDate('2023-09-15')

    const task = new Tasks({
        title: "This is a test",
        description: "This is an description test",
        dificulty: 9,
        createdAt,
        updatedAt,
        endsAt
    })

    expect(task).toBeInstanceOf(Tasks)
    expect(task.title).toEqual('This is a test')
})

test('Cannot create a task if description or title is empty or dificulty toEqual zero', () => {
    const endsAt = getFutureDate('2023-09-14')
    const updatedAt = getFutureDate('2023-09-15')
    const createdAt = getFutureDate('2023-09-15')

    expect(() => {
        return new Tasks({
            title: " ",
            description: " ",
            dificulty: 0,
            createdAt,
            updatedAt,
            endsAt
        })
    }).toThrow()
})

test('Cannot create a task if dificulty >= 10 or dificulty < 0', () => {
    const endsAt = getFutureDate('2023-09-14')
    const updatedAt = getFutureDate('2023-09-15')
    const createdAt = getFutureDate('2023-09-15')

    expect(() => {
        return new Tasks({
            title: "This is a test",
            description: "This is an description test",
            dificulty: 20,
            createdAt,
            updatedAt,
            endsAt
        })
    }).toThrow()
})