const withTranspileModules = require('next-transpile-modules')

module.exports = withTranspileModules(['@hashicorp/react-tabs'], { unstable_webpack5: true })({
  future: {
    webpack5: true
  }
})
