module.exports = {
  experimental: {
    outputStandalone: true,
  },
  images: {
    loader: 'cloudinary',
    path: '',
  },
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }
    }
  },

}
