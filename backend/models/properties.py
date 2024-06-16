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

properties = [
    PropertyDetails(
        name="Luxury Villa",
        description="A beautiful villa with sea view, featuring elegant architecture and premium furnishings. The property includes a large swimming pool, a well-manicured garden, and a spacious garage. Perfect for luxurious living.",
        image_url="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=1200000,
        location="California",
        size=3500,
        bedrooms=5,
        bathrooms=4,
        amenities="Pool, Garden, Garage"
    ),
    PropertyDetails(
        name="Modern Apartment",
        description="A spacious apartment in the city center, offering stunning views of the skyline. The apartment includes a state-of-the-art gym, a 24/7 concierge service, and secure parking. Ideal for urban professionals.",
        image_url="https://media.istockphoto.com/id/1146066756/photo/new-apartment-house-home-building-complex-concept-playground.jpg?s=612x612&w=0&k=20&c=AfmsITVGkSBzsVTqaVpMYZqKOX8mhwRZ_aQcCIm3Y2U=",
        price=850000,
        location="New York",
        size=2000,
        bedrooms=3,
        bathrooms=2,
        amenities="Gym, Concierge, Parking"
    ),
    PropertyDetails(
        name="Cozy Cottage",
        description="A charming cottage in the countryside, surrounded by lush greenery. Features include a cozy fireplace, a beautiful garden, and a spacious living area. Perfect for a peaceful and relaxing lifestyle.",
        image_url="https://images.pexels.com/photos/17952557/pexels-photo-17952557/free-photo-of-wooden-cottage-in-a-village.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=450000,
        location="Texas",
        size=1500,
        bedrooms=3,
        bathrooms=2,
        amenities="Fireplace, Garden"
    ),
    PropertyDetails(
        name="Luxury Mansion",
        description="A luxury mansion in the suburbs, boasting expansive grounds and high-end finishes. The mansion includes a large swimming pool, a landscaped garden, and multiple living areas. Ideal for those seeking luxury and comfort.",
        image_url="https://media.istockphoto.com/id/1028861694/photo/3d-rendering-of-modern-cozy-house-by-the-river-cool-autumn-evening-with-soft-light.jpg?s=612x612&w=0&k=20&c=pbfcGFhAhMEDxruZkuPJoXGK6eScKRnMmDwTpHUkSGs=",
        price=500000,
        location="Los Angeles",
        size=2000,
        bedrooms=3,
        bathrooms=2,
        amenities="Fireplace, Garden, Pool"
    ),
    PropertyDetails(
        name="Country Home",
        description="A cozy country home with a large garden, perfect for families. Features include a spacious living room, a modern kitchen, and a garage. The property is surrounded by beautiful countryside, offering peace and tranquility.",
        image_url="https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?s=612x612&w=0&k=20&c=Jaun3vYekdy6aBcqq5uDQp_neNp5jmdLZXZAqqhcjk8=",
        price=550000,
        location="Texas",
        size=1800,
        bedrooms=3,
        bathrooms=2,
        amenities="Garden, Garage"
    ),
    PropertyDetails(
        name="Downtown Loft",
        description="A modern loft in the heart of the city, offering an open-plan living space and high ceilings. The loft includes a gym, concierge services, and secure parking. Perfect for those seeking a contemporary urban lifestyle.",
        image_url="https://media.istockphoto.com/id/1407524985/photo/cityscape-of-a-residential-area-with-modern-apartment-buildings-new-green-urban-landscape-in.jpg?s=612x612&w=0&k=20&c=xyGhc476UjkYfWv930nBOFRgvjrWM28i4jHi2bldFYE=",
        price=700000,
        location="New York",
        size=1600,
        bedrooms=2,
        bathrooms=2,
        amenities="Gym, Concierge"
    ),
    PropertyDetails(
        name="Beach House",
        description="A beautiful house near the beach, offering stunning ocean views and direct beach access. Features include a large swimming pool, a garden, and a garage. Ideal for those who love the beach lifestyle.",
        image_url="https://media.istockphoto.com/id/139539430/photo/beach-house-1.jpg?s=612x612&w=0&k=20&c=paDVrTf8Fa4o9ZKgUv3n4CYOXrnhKDBiSCuQMNke9uw=",
        price=1300000,
        location="Miami",
        size=2500,
        bedrooms=4,
        bathrooms=3,
        amenities="Pool, Garden, Garage"
    ),
    PropertyDetails(
        name="Mountain Cabin",
        description="A cozy cabin in the mountains, perfect for a getaway. Features include a fireplace, a garden, and beautiful mountain views. Ideal for those who love nature and outdoor activities.",
        image_url="https://media.istockphoto.com/id/175432126/photo/banff-springs-waldhaus-restaurant.jpg?s=612x612&w=0&k=20&c=2Z0FGsw-39voOeHyDA-dHgjeJMv0gZGLAP7w5J-g4r4=",
        price=400000,
        location="Colorado",
        size=1200,
        bedrooms=2,
        bathrooms=1,
        amenities="Fireplace, Garden"
    ),
    PropertyDetails(
        name="Suburban House",
        description="A spacious house in a quiet suburb, ideal for families. Features include a large garden, a garage, and a modern kitchen. The property is located in a friendly neighborhood, close to schools and parks.",
        image_url="https://media.istockphoto.com/id/479767332/photo/idyllic-home-with-covered-porch.jpg?s=612x612&w=0&k=20&c=noFe8bNIsnAoGNJXMepSVVrNGhEior2Y0wZcROB94Uw=",       
        price=600000,
        location="Illinois",
        size=2200,
        bedrooms=4,
        bathrooms=3,
        amenities="Garden, Garage"
    ),
    PropertyDetails(
        name="Penthouse",
        description="A luxurious penthouse with a city view, offering top-of-the-line amenities. Features include a private pool, a gym, and a concierge service. Perfect for those seeking luxury living in the city.",
        image_url="https://media.istockphoto.com/id/522540838/photo/lifestyle-apartments.jpg?s=612x612&w=0&k=20&c=n3ICXWHcJ74fOjy4Kbv_cu7tA7KwH82g4OxVGpiHK9U=",
        price=2000000,
        location="New York",
        size=3000,
        bedrooms=5,
        bathrooms=4,
        amenities="Gym, Concierge, Pool"
    ),
    PropertyDetails(
        name="Farmhouse",
        description="A charming farmhouse with modern amenities, surrounded by beautiful countryside. Features include a large garden, a garage, and a spacious living area. Perfect for those seeking a peaceful rural lifestyle.",
        image_url="https://media.istockphoto.com/id/173482378/photo/beautiful-home.jpg?s=612x612&w=0&k=20&c=oiOka8h-z3XzvRiBf-TPNuS0mn9y_lEb3MYnyrO9ga0=",
        price=350000,
        location="Kansas",
        size=1400,
        bedrooms=3,
        bathrooms=2,
        amenities="Garden, Garage"
    ),
    PropertyDetails(
        name="Studio Apartment",
        description="A modern studio apartment in the city, offering a compact yet functional living space. Features include a gym, concierge services, and secure parking. Ideal for singles or young professionals.",
        image_url="https://media.istockphoto.com/id/1135563062/vector/vector-isometric-apartment-hotel-suite.jpg?s=612x612&w=0&k=20&c=o43VtY8HL5x_DFhulQhZ_nLnXZL4c_6K9lPTFlJuAdI=",
        price=300000,
        location="San Francisco",
        size=600,
        bedrooms=1,
        bathrooms=1,
        amenities="Gym, Concierge"
    ),
    PropertyDetails(
        name="Colonial House",
        description="A historic colonial house with modern touches, offering a blend of old-world charm and contemporary comfort. Features include a large garden, a garage, and spacious living areas. Perfect for families.",
        image_url="https://media.istockphoto.com/id/175216245/photo/vermont-country-estate.jpg?s=612x612&w=0&k=20&c=Yew8_rFOuX5u8rzlwkX_1eIEnmu0RP_lK5SYoghy7j8=",
        price=800000,
        location="Virginia",
        size=2600,
        bedrooms=4,
        bathrooms=3,
        amenities="Garden, Garage"
    ),
    PropertyDetails(
        name="Luxury Condo",
        description="A luxurious condo with a great view, offering premium amenities and high-end finishes. Features include a gym, concierge services, and secure parking. Perfect for those seeking an upscale urban lifestyle.",
        image_url="https://images.pexels.com/photos/250659/pexels-photo-250659.jpeg?auto=compress&cs=tinysrgb&w=600",
        price=950000,
        location="Chicago",
        size=1800,
        bedrooms=3,
        bathrooms=2,
        amenities="Gym, Concierge"
    ),
    PropertyDetails(
        name="Townhouse",
        description="A modern townhouse in a great neighborhood, offering spacious living areas and a private garden. Features include a garage, a modern kitchen, and multiple bedrooms. Ideal for families.",
        image_url="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=750000,
        location="Seattle",
        size=2000,
        bedrooms=3,
        bathrooms=3,
        amenities="Garage, Garden"
    ),
    PropertyDetails(
        name="Ranch House",
        description="A spacious ranch house with lots of land, perfect for those seeking a rural lifestyle. Features include a large garden, a garage, and multiple living areas. Ideal for families.",
        image_url="https://media.istockphoto.com/id/155444870/photo/american-range-house.jpg?s=612x612&w=0&k=20&c=qwNwYBpA3ZN8R7ReGBzwIDm1WSN0739wqvSEXgSb-n8=",
        price=500000,
        location="Texas",
        size=3000,
        bedrooms=4,
        bathrooms=3,
        amenities="Garden, Garage"
    ),
    PropertyDetails(
        name="Lake House",
        description="A beautiful house by the lake, offering stunning views and direct access to the water. Features include a large garden, a garage, and a spacious living area. Perfect for those who love water activities.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=1200000,
        location="Michigan",
        size=2400,
        bedrooms=4,
        bathrooms=3,
        amenities="Pool, Garden, Garage"
    ),
    PropertyDetails(
        name="Bungalow",
        description="A charming bungalow in a quiet neighborhood, offering a cozy living space and a large garden. Features include a garage, a modern kitchen, and multiple bedrooms. Perfect for families.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=450000,
        location="Florida",
        size=1500,
        bedrooms=3,
        bathrooms=2,
        amenities="Garden, Garage"
    ),
    PropertyDetails(
        name="Historic House",
        description="A historic house with modern renovations, offering a blend of old-world charm and contemporary comfort. Features include a large garden, a garage, and spacious living areas. Perfect for families.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=900000,
        location="Massachusetts",
        size=2700,
        bedrooms=4,
        bathrooms=3,
        amenities="Garden, Garage"
    ),
    PropertyDetails(
        name="Modern Home",
        description="A sleek modern home with smart features, offering a contemporary living space. Features include a gym, a swimming pool, and a garden. Perfect for those seeking a high-tech lifestyle.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=1100000,
        location="California",
        size=2100,
        bedrooms=4,
        bathrooms=3,
        amenities="Gym, Pool"
    ),
    PropertyDetails(
        name="Coastal Retreat",
        description="A serene coastal retreat offering stunning ocean views and a peaceful atmosphere. Features include a private beach, a large garden, and spacious living areas. Perfect for those seeking a tranquil lifestyle.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=1800000,
        location="Hawaii",
        size=3000,
        bedrooms=5,
        bathrooms=4,
        amenities="Private Beach, Garden"
    ),
    PropertyDetails(
        name="Urban Penthouse",
        description="A stylish penthouse in the heart of the city, offering luxury living with panoramic views. Features include a private terrace, a gym, and concierge services. Perfect for those seeking an upscale urban lifestyle.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=2200000,
        location="Los Angeles",
        size=3500,
        bedrooms=4,
        bathrooms=4,
        amenities="Private Terrace, Gym, Concierge"
    ),
    PropertyDetails(
        name="Suburban Oasis",
        description="A beautiful suburban home with a large garden and modern amenities. Features include a swimming pool, a garage, and spacious living areas. Ideal for families looking for a comfortable and stylish home.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=950000,
        location="Florida",
        size=2800,
        bedrooms=4,
        bathrooms=3,
        amenities="Pool, Garden, Garage"
    ),
    PropertyDetails(
        name="City Apartment",
        description="A modern city apartment with stunning views and top-of-the-line amenities. Features include a gym, concierge services, and secure parking. Ideal for urban professionals seeking convenience and style.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=750000,
        location="Chicago",
        size=1500,
        bedrooms=2,
        bathrooms=2,
        amenities="Gym, Concierge, Parking"
    ),
    PropertyDetails(
        name="Rustic Cabin",
        description="A charming rustic cabin in the woods, offering a cozy and peaceful retreat. Features include a fireplace, a large garden, and beautiful views. Perfect for nature lovers and outdoor enthusiasts.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=350000,
        location="Oregon",
        size=1200,
        bedrooms=2,
        bathrooms=1,
        amenities="Fireplace, Garden"
    ),
    PropertyDetails(
        name="Luxury Estate",
        description="A grand luxury estate with expansive grounds and premium amenities. Features include a swimming pool, a tennis court, and multiple living areas. Ideal for those seeking opulence and grandeur.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=5000000,
        location="California",
        size=6000,
        bedrooms=6,
        bathrooms=6,
        amenities="Pool, Tennis Court, Garden"
    ),
    PropertyDetails(
        name="Mountain Retreat",
        description="A beautiful mountain retreat offering breathtaking views and a peaceful atmosphere. Features include a large garden, a fireplace, and spacious living areas. Perfect for those seeking tranquility and natural beauty.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=850000,
        location="Colorado",
        size=2000,
        bedrooms=3,
        bathrooms=2,
        amenities="Fireplace, Garden"
    ),
    PropertyDetails(
        name="Urban Loft",
        description="A stylish urban loft with an open-plan design and modern amenities. Features include a gym, concierge services, and secure parking. Ideal for young professionals and city dwellers.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=600000,
        location="New York",
        size=1200,
        bedrooms=2,
        bathrooms=2,
        amenities="Gym, Concierge, Parking"
    ),
    PropertyDetails(
        name="Country Estate",
        description="A grand country estate with expansive grounds and luxurious amenities. Features include a swimming pool, a garden, and multiple living areas. Perfect for those seeking a luxurious rural lifestyle.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=3000000,
        location="Texas",
        size=5000,
        bedrooms=5,
        bathrooms=4,
        amenities="Pool, Garden"
    ),
    PropertyDetails(
        name="Contemporary Home",
        description="A sleek contemporary home with smart features and modern design. Features include a gym, a swimming pool, and a garden. Perfect for those seeking a high-tech and stylish living space.",
        image_url="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400",
        price=1200000,
        location="California",
        size=2500,
        bedrooms=4,
        bathrooms=3,
        amenities="Gym, Pool, Garden"
    )
]
for property in properties:
    property.save()
