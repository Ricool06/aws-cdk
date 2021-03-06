
import cdk = require('@aws-cdk/core');
import cloudfront = require('../lib');

const app = new cdk.App();

const stack = new cdk.Stack(app, 'aws-cdk-cloudfront-custom');

new cloudfront.CloudFrontWebDistribution(stack, 'AnAmazingWebsiteProbably', {
  originConfigs: [
    {
      originHeaders: {
        "X-Custom-Header": "somevalue",
      },
      customOriginSource: {
        domainName: "brelandm.a2z.com",
      },
      behaviors: [
        {
        isDefaultBehavior: true,
        }
      ]
    }
  ]
});

app.synth();
