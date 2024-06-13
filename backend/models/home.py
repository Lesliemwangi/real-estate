from db import cursor, conn


class PropertyDetails:
    TABLE_NAME = 'propertydetails'

    def __init__(self, name: str, description: str, image_url: str, price: int, location: str, size: int, bedrooms: int, bathrooms: int, amenities: str):
        self.id = None
        self.name = name
        self.description = description
        self.image_url = image_url
        self.price = price
        self.location = location
        self.size = size
        self.bedrooms = bedrooms
        self.bathrooms = bathrooms
        self.amenities = amenities

    def save(self):
        sql = f"""
        INSERT INTO {self.TABLE_NAME} (name, description, image_url, price, location, size, bedrooms, bathrooms, amenities)
        VALUES (?,?,?,?,?,?,?,?,?)
        """
        cursor.execute(sql, (self.name, self.description, self.image_url, self.price,
                       self.location, self.size, self.bedrooms, self.bathrooms, self.amenities))
        conn.commit()
        self.id = cursor.lastrowid
        print(f"Inserted property with ID: {self.id}")
        print(f"{self.name}, {self.description}, {self.image_url}, {self.price}, {self.location}, {self.size}, {self.bedrooms}, {self.bathrooms}, {self.amenities}")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image_url': self.image_url,
            'price': self.price,
            'location': self.location,
            'size': self.size,
            'bedrooms': self.bedrooms,
            'bathrooms': self.bathrooms,
            'amenities': self.amenities
        }

    @classmethod
    def get_all(cls):
        sql = f"""
        SELECT * FROM {cls.TABLE_NAME}
        """
        cursor.execute(sql)
        rows = cursor.fetchall()
        return [cls.row_to_instance(row) for row in rows]

    @classmethod
    def row_to_instance(cls, row):
        if row is None:
            return None
        propertydetails = cls(name=row[1], description=row[2], image_url=row[3], price=row[4],
                              location=row[5], size=row[6], bedrooms=row[7], bathrooms=row[8], amenities=row[9])
        propertydetails.id = row[0]
        return propertydetails

    @classmethod
    def create_table(cls):
        sql_drop = f"""
        DROP TABLE IF EXISTS {cls.TABLE_NAME}
        """
        cursor.execute(sql_drop)
        conn.commit()

        sql_create = f"""
        CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            image_url TEXT,
            price INTEGER,
            location TEXT,
            size INTEGER,
            bedrooms INTEGER,
            bathrooms INTEGER,
            amenities TEXT
        )
        """
        cursor.execute(sql_create)
        conn.commit()
        
    @classmethod
    def get_by_id(cls, property_id):
        sql = f"SELECT * FROM {cls.TABLE_NAME} WHERE id = ?"
        cursor.execute(sql, (property_id,))
        row = cursor.fetchone()
        return cls.row_to_instance(row)



PropertyDetails.create_table()

property1 = PropertyDetails(
    name="Luxury Villa",
    description="A beautiful villa with sea view.",
    image_url="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=400",
    price=1200000,
    location="California",
    size=3500,
    bedrooms=5,
    bathrooms=4,
    amenities="Pool, Garden, Garage"
)

property2 = PropertyDetails(
    name="Modern Apartment",
    description="A spacious apartment in the city center.",
    image_url="https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=is&k=20&c=unFskM1dq4OkRXm6SX7uAVWzXT9cEnPsEpNvjIoYX6E=",
    price=850000,
    location="New York",
    size=2000,
    bedrooms=3,
    bathrooms=2,
    amenities="Gym, Concierge, Parking"
)

property3 = PropertyDetails(
    name="Cozy Cottage",
    description="A charming cottage in the countryside.",
    image_url="https://images.pexels.com/photos/17952557/pexels-photo-17952557/free-photo-of-wooden-cottage-in-a-village.jpeg?auto=compress&cs=tinysrgb&w=400",
    price=450000,
    location="Texas",
    size=1500,
    bedrooms=3,
    bathrooms=2,
    amenities="Fireplace, Garden"
)

property1.save()
property2.save()
property3.save()

