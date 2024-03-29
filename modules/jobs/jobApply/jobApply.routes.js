const express = require("express");
const {
  createJobApply,
  getJobsApply,
  getJobApplyById,
  UpdateJobApplyById,
  DeleteJobApplyById,
  getAppliedJobsByCreator,
  getPdfView,
  getMyAppliedJobs,
  getApplyJobsByJobId,
} = require("./jobApply.controller");
const { handleMulterError } = require("../../../config/multerConfig");
const multer = require("multer");
const { isAuth } = require("../../../utils/middleware");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/create", upload.single("cv"), handleMulterError, createJobApply);
router.get("/", getJobsApply);
router.get("/myAppliedJobs", isAuth, getMyAppliedJobs);
router.get("/appliedJobs", isAuth, getAppliedJobsByCreator);
router.get("/appliedJobsByJobId/:id", isAuth, getApplyJobsByJobId);
router.get("/viewPdf/:id", getPdfView);
router.get("/:id", getJobApplyById);
router.patch("/:id", handleMulterError, UpdateJobApplyById);
router.delete("/:id", isAuth, DeleteJobApplyById);

module.exports = router;
