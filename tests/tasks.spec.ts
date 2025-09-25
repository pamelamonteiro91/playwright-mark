import { test, expect } from 'playwright/test'
import { TaskModel } from './fixtures/task.model'
import { deleteTaskByHelper, postTask } from './support/helpers'
import { TasksPage } from './support/pages'
import data from './fixtures/tasks.json'
let tasksPage: TasksPage

test.beforeEach(({ page }) => {
    tasksPage = new TasksPage(page)
})

test.describe('cadastro', () => {

    test('deve poder cadastrar uma nova tarefa', async ({ request }) => {
        const task = data.success as TaskModel

        await deleteTaskByHelper(request, task.name)


        // E que estou na página de cadastro
        await tasksPage.go()
        await tasksPage.create(task)
        await tasksPage.shouldHaveText(task.name)

    })
    test('não deve permitir tarefa duplicada', async ({ request }) => {
        const task = data.duplicate as TaskModel

        await deleteTaskByHelper(request, task.name)
        await postTask(request, task)

        await tasksPage.go()
        await tasksPage.create(task)
        await tasksPage.alertHaveText('Task already exists!')
    })
    test('campo obrigatório', async () => {

        const task = data.required as TaskModel



        await tasksPage.go()
        await tasksPage.create(task)

        const validationMessage = await tasksPage.inputTaskName.evaluate(e => (e as HTMLInputElement).validationMessage)
        expect(validationMessage).toEqual('This is a required field')

    })
})

test.describe('atualização', () => {
    test('deve concluir uma tarefa', async ({ request }) => {
        const task = data.update as TaskModel

        // Garante que a tarefa não existe antes do teste
        await deleteTaskByHelper(request, task.name)

        // Cria a tarefa diretamente via API
        await postTask(request, task)


        await tasksPage.go()

        // Aguarda o botão de toggle estar visível antes de clicar
        await tasksPage.toggle(task.name)
        await tasksPage.shouldBeDone(task.name)
    })


})

test.describe('exclusão', () => {
    test('deve excluir uma tarefa', async ({ request }) => {
        const task = data.delete as TaskModel

        // Garante que a tarefa não existe antes do teste
        await deleteTaskByHelper(request, task.name)

        // Cria a tarefa diretamente via API
        await postTask(request, task)

        await tasksPage.go()

        // Remove a tarefa através do botão excluir
        await tasksPage.remove(task.name)
        await tasksPage.shouldNotExist(task.name)
    })


})