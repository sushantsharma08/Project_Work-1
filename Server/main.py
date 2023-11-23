from fastapi import FastAPI
import random
import numpy as np
import pandas
import sklearn
import pickle
import uvicorn
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# importing model
model = pickle.load(open('model.pkl','rb'))
sc = pickle.load(open('standscaler.pkl','rb'))
ms = pickle.load(open('minmaxscaler.pkl','rb'))

app = FastAPI()


origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
async def root():
    return {'message':'This is a home page','data':'hulluulul'}

@app.get('/hello')
async def helloPage():
    return {'message':'this is the hello return','data':"hello jimzz…"}

@app.get('/hello/{name}')
async def hellopageNamed(name: str):
    return {'message':'this is the hello return','data':"hello % s" % name}

# @app.get("/predict/")
# async def predict():
# @app.post("/predict/{N}/{P}/{K}/{temp}/{humidity}/{ph}/{rainfall}")
# async def predict(N:int,P:int,K:int):
    # N = 30
    # P = 50
    # K = 40
    # temp = 70
    # humidity = 22
    # ph = 30
    # rainfall = 100

    # feature_list = [N, P, K, temp, humidity, ph, rainfall]
    # single_pred = np.array(feature_list).reshape(1, -1)

    # scaled_features = ms.transform(single_pred)
    # final_features = sc.transform(scaled_features)
    # prediction = model.predict(final_features)

    # crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
    #              8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
    #              14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
    #              19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}

    # if prediction[0] in crop_dict:
    #     crop = crop_dict[prediction[0]]
    #     result = "{} is the best crop to be cultivated right there".format(crop)
    # else:
    #     result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
    # return {'message':"result for crop",'crop':result}

class Factors(BaseModel):
    N:float=0,
    P:float=0,
    K:float=0,
    temp:float=0,
    humidity:float=0,
    ph:float=0,
    rainfall:float=0

@app.post("/prediction")
async def prediction (
    factors: Factors
):
    
    feature_list = [factors.N, factors.P, factors.K, factors.temp, factors.humidity, factors.ph, factors.rainfall]
    single_pred = np.array(feature_list).reshape(1, -1)

    scaled_features = ms.transform(single_pred)
    final_features = sc.transform(scaled_features)
    prediction = model.predict(final_features)

    crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
                 8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
                 14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
                 19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}

    if prediction[0] in crop_dict:
        crop = crop_dict[prediction[0]]
        result = "{} is the best crop to be cultivated right there".format(crop)
    else:
        result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
    return {'message':"result for crop",'crop':result}