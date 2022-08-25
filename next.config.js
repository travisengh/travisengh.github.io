/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
    },

    basePath: "/thetravsite",
    assetPrefix: "/thetravsite"
}

module.exports = nextConfig