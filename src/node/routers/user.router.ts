import {Router} from '../common/router';
import * as restify from 'restify';
import {Sequelize} from 'sequelize-typescript';
import {User} from '../models/usuario.model';

class UserRouter extends Router {

    applyRoutes(application: restify.Server, sequelize: Sequelize) {
        sequelize.addModels([User]);

        this.basePath = '/usuario';
        this.modelName = 'usuario';
        this.model = User;

        application.get(this.basePath, this.findAll);
        application.get(`${this.basePath}/:id`, this.findById);
        application.post(`${this.basePath}`, this.save);
        application.patch(`${this.basePath}/:id`, this.update);
        application.del(`${this.basePath}/:id`, this.delete);
    }
}

export const userRouter = new UserRouter();
