import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    // voce esta avisando toda aplicacao que sera usado json
  }

  routes() {
    this.app.use(routes);
  }
}
export default new App().app;

// Assim que meu server sobe a classe sera instanciada
