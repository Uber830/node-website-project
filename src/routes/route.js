import { Router } from "express";
import emailer from "../config/nodemailer.js";

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

route.post("/send-email", (req, res) => {
  try {
    const { inputTextN, inputTextLastN, inputE, inputP, inputM } = req.body;

    /* template of email */
    let contentHTML = {
      name: inputTextN,
      lastName: inputTextLastN,
      email: inputE,
      phone: inputP,
      menssage: inputM,
    };

    emailer(contentHTML);

    res.status(200).send({ Email: "Check" });
  } catch (err) {
    console.log(err);
    res.send({ error: "error" });
  }
});

export default route;
