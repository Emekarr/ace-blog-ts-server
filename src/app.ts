import express from "express";
import { join } from "path";
import cookie_parser from "cookie-parser";

export default class ExpressApp {
  // initialising the express app
  readonly app = express();

  constructor() {
    // this helps express work with json data and form-data
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // location to the views folder
    const viewsLocation = join(__dirname, "./view/views");
    // location to the statics folder
    const staticFilesLocation = join(__dirname, "./view/public");
    // set the template engine as ejs
    this.app.set("view engine", "ejs");
    // show express the location of the views
    this.app.set("views", viewsLocation);
    // show express the location of the static files
    this.app.use(express.static(staticFilesLocation));
    // this lets express work with cookies
    this.app.use(cookie_parser());
  }
}
