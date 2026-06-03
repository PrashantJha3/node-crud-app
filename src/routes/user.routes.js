const express = require("express");

const router = express.Router();

const userController = require(
  "../controllers/user.controller"
);

const validate = require(
  "../middleware/validate.middleware"
);

const {
  createUserSchema,
} = require(
  "../validations/user.validation"
);

router.post(
  "/",
  validate(createUserSchema),
  userController.create
);

router.get(
  "/",
  userController.getAll
);

router.get(
  "/:id",
  userController.getOne
);

router.put(
  "/:id",
  userController.update
);

router.delete(
  "/:id",
  userController.delete
);

module.exports = router;