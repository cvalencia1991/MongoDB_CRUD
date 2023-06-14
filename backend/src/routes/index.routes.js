import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render('home');
});

router.get("/about", (req, res) => {
  res.send('about');
});

export default router;