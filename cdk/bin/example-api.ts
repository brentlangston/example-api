#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CFStack } from '../lib/example-api-stack';

const app = new cdk.App();
new CFStack(app, 'example-api-pipeline');
