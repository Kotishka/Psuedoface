from flask import Flask, send_from_directory, request, Response
from fawkes.protection import Fawkes
import tempfile
import os
import pathlib
import io

api = Flask('Psuedoface API')
fawkes = Fawkes('protector', '0', 1)

@api.route('/', methods=['POST'])
def index():
    imageToCloak = request.files['image']
    tmp = tempfile.NamedTemporaryFile(dir=os.getcwd(), delete=False)
    tmp.write(request.files['image'].read())
    tmp.close()
    print(tmp.name)

    status1 = fawkes.run_protection([tmp.name])
    os.remove(tmp.name)
    if status1 == 1:
        returnData = None
        with open(os.path.join(os.getcwd(), "_cloaked.png"), 'rb') as cloaked:
            returnData = cloaked.read()
        os.remove(os.path.join(os.getcwd(), "_cloaked.png"))
        res = Response(response=returnData, status=200, mimetype="image/png")
        return res
    return Response(status=500, response='')

if __name__ == '__main__':
    api.run()