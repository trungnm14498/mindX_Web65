import products from "./data.mjs";

import { findMax, findMinWomen } from "./productService.mjs";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");
const http = require("http");

fs.writeFileSync("./products.json", JSON.stringify(products), "utf-8");

const productsData = fs.readFileSync("./products.json", "utf-8");

const serverListener = (req, res) => {
	const objData = JSON.parse(productsData);
	switch (req.url) {
		case "/api/products":
			res.end(productsData);
			break;
		case "/api/products/getMaxPrice":
			const maxPrice = findMax(objData);
			res.end(JSON.stringify(maxPrice));
			break;
		case "/api/products/getMinPriceWomen":
			const minPriceWomen = findMinWomen(objData);
			res.end(JSON.stringify(minPriceWomen));
			break;
		default:
			break;
	}
}

const server = http.createServer(serverListener);

server.listen(8080, () => {
	console.log('Server is running at port 8080');
});
