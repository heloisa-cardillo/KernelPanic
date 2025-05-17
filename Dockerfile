FROM python:3.13-rc-slim

WORKDIR /src/frontend-API

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt 


COPY  src/frontend-API .


ENV FLASK_APP=app.py

ENV FLASK_RUN_HOST=0.0.0.0
EXPOSE 5000
CMD [ "flask", "run" ]
