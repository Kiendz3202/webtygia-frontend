/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'assets.coingecko.com',
			'printgo.vn',
			'vectorflags.s3.amazonaws.com',
			'apitygia.ansecurity.net',
			'img.meta.com.vn',
		],
		// remotePatterns: [
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'assets.coingecko.com',
		// 		port: '',
		// 		// pathname: '/coins/images/1/large/**',
		// 	},
		// ],
	},
	env: {
		PRODUCT_URL: 'https://apitygia.ansecurity.net/api/v1',
	},
};

module.exports = nextConfig;