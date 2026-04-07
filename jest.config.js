export default {
  testEnvironment: 'node',
  verbose: true,
  transform: {'^.+\\.js$': 'babel-jest'},
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        openReport: false,
        pageTitle: 'API Test Report',
        expand: true
      }
    ]
  ]
};