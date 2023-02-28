/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  compiler: {
    relay: {
      // This should match relay.config.js
      src: './app',
      artifactDirectory: './__generated__',
      language: 'typescript',
    },
  },
  
  // modularizeImports:{
  //   'mui/icons-material':{
  //     transform:'@mui/icons-material/{{member}}'
  //   },
  // },
}

module.exports = nextConfig
