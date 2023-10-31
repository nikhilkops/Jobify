import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  createJobs,
  getJobWithID,
  editJob,
  deleteJobs,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParams,
} from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validateJobInput, createJobs);
router
  .route("/:id")
  .get(validateIdParams, getJobWithID)
  .patch(validateJobInput, editJob)
  .delete(deleteJobs);

export default router;
