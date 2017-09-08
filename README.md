# alexa-demo

This is a simple Alexa Demo.

# Getting Started

This is a short tutorial on the basics of Alexa and AWS.

## Upload Lambda Function:

1. Change directory (cd) src , then run `npm install`.
2. Then run `npm run zip`
3. Create a lambda function via the AWS interface
4. Select  `Alexa Skills Kit` as your Lambda trigger.
5. Upload your zip file.
6. Create function.
7. Copy your ARN (Lambda Name), you will need this later.

## AWS Developer

1. Login then click Alexa Tab.
2. Select Alexa Skills Kit.
3. Add new Skill
4. Enter any `name`.
5. Enter invovation name, this is the name you want Alexa to recognize. I entered `demo`, then click save.
6. Paste your intentSchema.json in the intent schema section, and sample utterances in your utterances section.
7. Paste your ARN from the previous step in the AWS Lambda ARN section.
8. In the testing section type your invovation name 'demo'
9. Ask just say 'alexa demo'

## Things To Try

1. Modify your `demo` by adding additional utterances.
2. Add slots to your utterances and use those slots to branch in your Lambda function.
3. Have your Lambda function make a REST call to get information.

