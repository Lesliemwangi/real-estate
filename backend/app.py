from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from models.home import PropertyDetails

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins = ["*"], 
                   allow_credentials = True, allow_methods = ["*"], 
                   allow_headers = ["*"])


class HomeModel(BaseModel):
    name: str
    description: str
    price: int
    location: str
    size: int
    bedrooms: int
    bathrooms: int
    amenities: str
    

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/propertydetails")
def propertydetails():
    propertydetails = PropertyDetails.get_all()
    
    return propertydetails


@app.get("/home")
def get_home():
    return [{"name": "Mansion"}]


@app.post("/home")
def save_home(data: HomeModel):
    return data


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Optional[str] = None):
#     return {"item_id": item_id, "q": q}
