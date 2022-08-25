module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["siakit"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
