from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()


class HomeModel(BaseModel):
    name: str
    description: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/home")
def get_home():
    return [{"name": "Mansion"}]


@app.post("/home")
def save_home(data: HomeModel):
    return data


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
