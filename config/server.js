module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: env.array('APP_KEYS'),
    keys: [
      "EnWbo2UJeLkZWfpVXlebdw==",
      "Ola/9KoRSxet/AGcYO0qzQ==",
      "XbnFTHXS+yJpm9hWCwMjjg==",
      "8UrLES0IBU/VTMon2r1xhw=="
    ]
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'yPh8VIYWOdzXl0cbagdiBg=='),
    },
  },
  cron: { enabled: true }
});
