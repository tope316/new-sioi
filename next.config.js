module.exports = {
  images: {
    domains: ['reqres.in'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ];
  },
};