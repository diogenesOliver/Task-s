import { expect, test } from "vitest";
import { Tasks } from "./TasksEntitie"
import { getFutureDate } from "../__test__/utils/GetFutureDate";

const endsAt = getFutureDate('2023-09-14')
const updatedAt = getFutureDate('2023-09-15')
const createdAt = getFutureDate('2023-09-15')

let taskDataFromTest = {
    title: "This is a test",
    description: "This is an description test",
    dificulty: 9,
    createdAt,
    updatedAt,
    endsAt
}

test('Create an Task', () => {
    const task = new Tasks(taskDataFromTest)

    expect(task).toBeInstanceOf(Tasks)
    expect(task.title).toEqual('This is a test')
})

test('Cannot create a task if description or title is empty or dificulty toEqual zero', () => {
    expect(() => {
        taskDataFromTest.title = " "
        taskDataFromTest.description = " "
        
        return new Tasks(taskDataFromTest)
    }).toThrow()
})

test('Cannot create a task if dificulty >= 10 or dificulty < 0', () => {
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