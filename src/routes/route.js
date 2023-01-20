import { Router } from "express";
const route = Router();

/* routers */
route.get("/", (req, res) => {
  res.render("index", { title: "First website with Node" });
});

route.get("/about", (req, res) => {
  res.render("about", { title: "About Me" });
});

route.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

export default route;
