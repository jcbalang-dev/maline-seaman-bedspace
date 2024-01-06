# netlify-functions/api.py
import subprocess
import json

def handler(event, context):
    process = subprocess.Popen(['python', 'api/hms/app.py'], stdout=subprocess.PIPE)
    output, _ = process.communicate()
    
    return {
        'statusCode': 200,
        'body': json.dumps({'result': output.decode('utf-8')})
    }
