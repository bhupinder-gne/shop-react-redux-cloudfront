import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { DeploymentService } from "./deployment-service";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DeployWebStoreAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new DeploymentService(this, "deployment");
  }
}
