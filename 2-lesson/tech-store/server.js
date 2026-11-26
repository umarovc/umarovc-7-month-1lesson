import http from "http";

const PORT = 3000;

const shopState = {
  shopName: "TechStore",
  hasError: false,
  isClosed: false,
};

const server = http.createServer((req, res) => {
  let statusCode;
  let message;

  if (shopState.hasError) {
    statusCode = 500;
    message = `500 - ${shopState.shopName} serverida xatolik yuz berdi!`;
  } else if (shopState.isClosed) {
    statusCode = 403;
    message = `403 - Kechirasiz, ${shopState.shopName} hozir yopiq!`;
  } else {
    statusCode = 200;
    message = `200 - Xush kelibsiz! ${shopState.shopName} ochiq!`;
  }

  res.writeHead(statusCode, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>${message}</h1>`);
});

server.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishladi`);
});



