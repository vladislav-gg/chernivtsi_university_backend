module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: "ddge3uldr",
            api_key: "165839532821859",
            api_secret: "rIWII_BYIz4mFE0FEYbpRS1-N-g",
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });
  