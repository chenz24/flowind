module.exports = {
  root: true,
  extends: ["@flowind/eslint-config-ui"],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
}
