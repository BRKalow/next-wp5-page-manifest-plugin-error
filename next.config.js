const withTranspileModules = require('next-transpile-modules')

module.exports = withTranspileModules(['@hashicorp/react-button'], { unstable_webpack5: true })({
  future: {
    webpack5: true
  }
})
