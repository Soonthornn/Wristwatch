const dotenv = require('dotenv');
const WristwatchModel = require("../models/WristwatchModel");

exports.getAllWristwatch = async function (req, res) {
  try {
    const Wristwatch = await WristwatchModel.find({});
    res.status(200).json({
      status: "success",
      results: Wristwatch.length,
      data: {Wristwatch},
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getWristwatch = async function (req, res) {
  try {
    const WristwatchId = parseInt(req.params.id);
    const Wristwatch = await WristwatchModel.findOne({id: WristwatchId});
    if (Wristwatch) {
        res.status(200).json({
            status:'success',
            data: {Wristwatch}
        });
    } else {
        res.status(404).json({
            status:'fail',
            message: 'NO ID FOUND'
        });
    }
} catch (error) {
res.status(404).json({
    status: 'fail',
    message: error
})};
};

exports.createWristwatch = async function (req, res) {
  try {
    const { id, name,model  } = req.body;

    const newWristwatch = new WristwatchModel({ id, name,model });
    const Wristwatch = await WristwatchModel.create(newWristwatch);
    res.status(200).json({
      status: "success",
      results: Wristwatch.length,
      data: { Wristwatch },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateWristwatch = async function (req, res) {
  try {
    const id = req.params.id;
    const { name,model } = req.body;

    const Wristwatch = await WristwatchModel.findOneAndUpdate({ id }, { name,model });
    res.status(200).json({
      status: "success",
      results: Wristwatch.length,
      data: { Wristwatch },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteWristwatch = async function (req, res) {
  try {
    const id = req.params.id;

    const Wristwatch = await WristwatchModel.findOneAndDelete({ id });
    res.status(200).json({
      status: "success",
      results: Wristwatch.length,
      data: { Wristwatch },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};