const {
  editOrder,
  getAllOrder,
  getSingleOrder,
  cancelOrder,
} = require("../controller/order");

const router = require("express").Router();

router.put("/edit/:id", editOrder);

router.get("/", getAllOrder);

router.get("/:id", getSingleOrder);

router.put("/cancelorder/:id", cancelOrder);

module.exports = router;
