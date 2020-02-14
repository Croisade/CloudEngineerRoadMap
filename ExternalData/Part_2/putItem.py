import json
import time
import boto3
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('guestbook')
millis = int(round(time.time() * 1000))

def lambda_handler(event, context):

    print(table.table_status)
    table.put_item(
            Item={
                'date': millis,
                'message': ['message']
        }
    )
    return {"code":200, "confirmation":"completed"}


