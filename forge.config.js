module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mikqi',
          name: 'electron-auto-update'
        },
        prerelease: true
      }
    }
  ]
}