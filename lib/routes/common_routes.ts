import { Application, Request, Response } from 'express';

export class CommonRoutes {

    public route(app: Application) {

        //URL nao encontrada
        app.all('*', function (req: Request, res: Response) {
            res.status(404).send({ error: true, message: 'Lugar errado...' });

        });
    }
 }