# DevOps Training – Question 2 (S3 + GitHub Actions)

Simple static site deployed to Amazon S3 on every push to `main`.

## GitHub secrets

| Secret | Example |
|--------|---------|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `AWS_REGION` | `ap-southeast-2` |
| `S3_BUCKET_NAME` | `devops-training-yourname-123` |

## Local commands

```bash
npm test
npm run build
```
