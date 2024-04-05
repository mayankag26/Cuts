/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
      ) => {
        // Important: return the modified config
        config.devtool = 'eval-cheap-module-source-map';
        return config;
      },
      experimental: {
        serverSourceMaps: true,
      },
    
    
}

module.exports = nextConfig
