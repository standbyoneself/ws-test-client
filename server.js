const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.use(function (req, res) {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, function () {
  console.log(`Server is running on the ${PORT} port!`);
});
