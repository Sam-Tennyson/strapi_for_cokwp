module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',"yPh8VIYWOdzXl0cbagdiBg=="),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "mFe0Dn6rqxcsaCYYN07wVA=="),
  },
});
