const http = require("http");

http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.statusCode = 200;
	const { method, url } = req;
	switch (url) {
		case "/":
			switch (method) {
				case "GET":
					res.end("<p>Ini adalah request method GET");
					break;
				case "POST":
					let body = [];

					req.on("data", (chunk) => {
						body.push(chunk);
					});

					req.on("end", () => {
						body = Buffer.concat(body).toString();
						const { name } = JSON.parse(body);
						res.end(`Hello ${name}!`);
					});

					break;
				case "PUT":
					res.end("<p>Ini adalah request method PUT");
					break;
				case "DELETE":
					res.end("<p>Ini adalah request method DELETE");
					break;
				default:
					break;
			}
			break;
		case "/about":
			switch (method) {
				case "GET":
					res.end("Ini adalah halaman about");
					break;
				default:
					res.end(
						`Halaman tidak bisa diakses dengan method ${method}`
					);
			}
			break;
		default:
			res.statusCode = 404;
			res.end("404 Not Found");
			break;
	}
}).listen(3000, () => {
	console.log("Server berjalan pada port 3000");
});
