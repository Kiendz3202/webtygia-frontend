/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		BASE_URL: 'http://66.42.58.72/api/v1',
	},
};

module.exports = nextConfig;
