/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        // has:[
        //   {
        //     type:"query",
        //     key:'id',
        //     value:"1"
        //   }
        // ],
        destination: '/application/checkout',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
