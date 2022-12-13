import { Request, Response } from 'express'

export class RenderPage{

    async renderSignUpPage(req: Request, res: Response){
        res.render('signUpPage.ejs')
    }

    async renderLoginPage(req: Request, res: Response){
        res.render('loginPage.ejs')
    }

    async renderHomePage(req: Request, res: Response){
        res.render('homePage.ejs')
    }

    async renderPageUncompletedTasks(req: Request, res: Response){
        res.render('uncompletedTaksPage.ejs')
    }

    async renderPageCompletedTasks(req: Request, res: Response){
        res.render('completedTasks.ejs')
    }

}