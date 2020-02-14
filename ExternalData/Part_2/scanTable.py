import boto3
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('guestbook')

def lambda_handler(event, context):
    response = table.scan()
    items = response['Items']
    return items

