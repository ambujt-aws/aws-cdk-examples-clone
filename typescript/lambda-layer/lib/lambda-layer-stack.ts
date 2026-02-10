import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaLayerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const layer = new lambda.LayerVersion(this, 'HelperLayer', {
      code: lambda.Code.fromAsset('resources/layers/helper'),
      description: 'Common helper utility',
      compatibleRuntimes: [lambda.Runtime.NODEJS_LATEST],
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    // Lambda function removed - IAM role LambdaFunctionServiceRoleC555A460 
    // was identified as unused by AWS IAM Access Analyzer
    // Finding ID: 25fcd1a3-b56a-4c28-9307-edf92a79c932
  }
}
