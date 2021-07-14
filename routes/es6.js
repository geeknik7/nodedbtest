const express = require("express");
const router = express.Router();
const {letExample,destructuringObject,objectAssignment,objectFuncAssignment,spreadOpr,objectAssig,entries,advSpreadOpr,} = require("../service/es6");

router.get("/letExample", (req, res) => {
    const data = letExample();
    res.send(data);
  });
  
router.get("/destructiveObj", (req, res) => {
  const num = destructuringObject();
  res.send(num);
});

router.get("/objectAssProp", (req, res) => {
  const data = objectAssignment();
  res.send(data);
});

router.get("/objectFuncProp", (req, res) => {
  const data = objectFuncAssignment();
  res.send(data);
});
router.get("/spreadOprs", (req, res) => {
  const data = spreadOpr();
  res.send(data);
});
router.get("/objectAssig", (req, res) => {
  const data = objectAssig();
  res.send(data);
});
router.get("/entries", (req, res) => {
  const data = entries();
  res.send(data);
});
router.get("/advSpreadOpr", (req, res) => {
  const data = advSpreadOpr();
  res.send(data);
});


module.exports = router;
