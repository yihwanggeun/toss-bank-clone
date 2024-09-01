/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        emotion: true
    },
    output: 'standalone',
    staticPageGenerationTimeout: 120,

    // webpack: function (config, env) {
    //     config.output.filename = 'static/js/[name].[contenthash:8].js';
    //     config.output.chunkFilename = 'static/js/[name].[contenthash:8].chunk.js';
    //     return config;
    //   },
    
};

export default nextConfig;
