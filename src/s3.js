//import { S3 } from 'aws-sdk';
//export cosnt s3 = new S3({
import aws from "aws-sdk";
      
export const s3 = new aws.S3({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY, 
    },
    region: process.env.AWS_BUCKET_REGION,
});
