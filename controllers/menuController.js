const fs = require('fs');

const menu = JSON.parse(fs.readFileSync(`${__dirname}/../data.json`, 'utf-8'));

exports.checkID = (req, res, next, val) => {
  const id = +req.params.id;

  if (id > menu.length) {
    return res.status(400).json({
      status: 'fail',
      message: 'no such id',
    });
  }

  next();
};

exports.getAllMenu = (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'everything seems to work',
    data: {
      menu,
    },
  });
};

exports.getMenu = (req, res) => {
  const id = +req.params.id;

  const item = menu.find((el) => el.id === id);

  res.status(200).json({
    status: 'ok',
    message: 'something did happen just trust me',
    data: {
      item,
    },
  });
};
