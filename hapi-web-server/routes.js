const routes = [
	{
		method: "GET",
		path: "/",
		handler: (request, h) => {
			return h
				.response("success")
				.type("text/plain")
				.header("X-something", "something");
		},
	},
	{
		method: "GET",
		path: "/hello/{name?}",
		handler: (request, h) => {
			const { name = "Anonymous" } = request.params;
			const { lang } = request.query;
			if (lang === "id") return `Halo ${name}`;
			return `Hello ${name}`;
		},
	},
	{
		method: "GET",
		path: "/users/{username?}",
		handler: (request, h) => {
			const { username = "Stranger" } = request.params;
			return `Hello ${username}`;
		},
	},
	{
		method: "POST",
		path: "/login",
		handler: (request, h) => {
			const { username, password } = request.payload;
			return `Welcome ${username}`;
		},
	},
	{
		method: "*",
		path: "/{any*}",
		handler: (request, h) => {
			return "Halaman tidak ditemukan";
		},
	},
];

module.exports = routes;
