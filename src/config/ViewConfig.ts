import Application from "koa";
import views from "koa-views";

export class ViewConfig {
  constructor(
    private application: Application,
    private render = views(__dirname + "/../views", {
      map: {
        html: "ejs",
      },
    })
  ) {
    this.registerViews();
  }

  registerViews = (): void => {
    this.application.use(this.render);
  };
}
