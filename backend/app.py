from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from models.home import PropertyDetails

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
def get_propertydetails():
    properties = PropertyDetails.get_all()
    return [property.to_dict() for property in properties]


@app.get("/propertydetails/{property_id}")
def get_property_detail(property_id: int):
    property_detail = PropertyDetails.get_by_id(property_id)
    if property_detail:
        return property_detail.to_dict()
    return {"error": "Property not found"}


@app.get("/home")
def get_home():
    return [{"name": "Mansion"}]


@app.post("/home")
def save_home(data: HomeModel):
    return data
