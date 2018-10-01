import * as restify from 'restify';
import {Sequelize} from 'sequelize-typescript';
import {InternalServerError, NotFoundError} from 'restify-errors';

export abstract class Router {
    abstract applyRoutes(application: restify.Server, sequelize: Sequelize);

    public basePath: string;
    public modelName: string;
    public model: any;


    render(response: restify.Response, next: restify.Next) {
        return (document) => {
            if (document) {
                response.json(document);
            } else {
                throw new NotFoundError('Not found');
            }

            return next(false);
        }
    }

    renderAll(response: restify.Response, next: restify.Next) {
        return (itens: any[]) => {
            if (itens) {
                response.json(itens);
            } else {
                response.json([]);
            }

            return next();
        };
    }

    findAll = (req, resp, next) => {
        this.model.findAll().then(
            this.renderAll(resp, next)
        ).catch(next);
    };

    findById = (req, resp, next) => {
        this.model.findOne({
            where: {
                id: req.params.id
            }
        }).then(this.render(resp, next)).catch(next);
    };

    save = (req, resp, next) => {
        this.model.create(req.body).then(
            this.render(resp, next)
        ).catch((err) => {
            return next(new InternalServerError(`error while saving: ${err.message}`));
        });
    };

    update = (req, resp, next) => {
        this.model.findOne({
            where: {
                id: req.params.id
            }
        }).then((objUpdate) => {
            objUpdate.update(req.body).then(this.render(resp, next));
        }).catch((err) => {
            return next(new InternalServerError(`error while update: ${err.message}`));
        });
    };

    delete = (req, resp, next) => {
        this.model.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            resp.send(204);
        }).catch((err) => {
            return next(new InternalServerError(`error while delete: ${err.message}`))
        });
    }
}