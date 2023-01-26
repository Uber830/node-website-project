import "ejs";
import Express from "express";
import morgan from "morgan";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import route from "./routes/route.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3010;

/* setting */
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

/* middleware */
app.use(morgan("dev"));
app.use(Express.static(join(__dirname, "public")));
app.use(Express.urlencoded({ extended: false })); /* for form valids */
app.use(Express.json());

/* router */
app.use(route);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
