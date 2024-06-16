from db import cursor, conn


class Professionals:
    TABLE_NAME = 'professionals'

    def __init__(self, title: str, description: str, image_url: str):
        self.id = None
        self.title = title
        self.description = description
        self.image_url = image_url

    def save(self):
        sql = f"""
        INSERT INTO {self.TABLE_NAME} (title, description, image_url)
        VALUES (?, ?, ?)
        """
        cursor.execute(sql, (self.title, self.description, self.image_url))
        conn.commit()
        self.id = cursor.lastrowid
        print(f"Inserted professional with ID: {self.id}")
        print(f"{self.title}, {self.description}, {self.image_url}")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'image_url': self.image_url
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
        professionals = cls(title=row[1], description=row[2], image_url=row[3])
        return professionals
        
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
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            image_url TEXT
        )
        """
        cursor.execute(sql_create)
        conn.commit()


Professionals.create_table()

professional1 = Professionals(
    title="Commercial Real Estate Agent",
    description="Specializes in buying, selling, and leasing commercial properties.",
    image_url="https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=Tx3nGQfxaI781gi97Siw7DIEBbKg1oBxl8n0JEwMQ6s="
)

professional2 = Professionals(
    title="Luxury Real Estate Agent",
    description="Expert in high-end, luxury real estate market, providing personalized service.",
    image_url="https://media.istockphoto.com/id/1042419790/photo/smiling-indian-man-on-white-background.jpg?s=612x612&w=0&k=20&c=3oFP04WPvUg_HUGjbUIUDHJpxG9YhieIR73K51gIZ8g="
)

professional3 = Professionals(
    title= "Real Estate Consultant",
    description="Offers strategic advice on property investments and market trends.",
    image_url="https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
)

professional4 = Professionals(
    title="Real Estate Broker",
    description="Licensed professional who oversees real estate transactions and manages agents.",
    image_url="https://media.istockphoto.com/id/1413763035/photo/portrait-of-smiling-black-businesswoman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ygAcvjEoUHecE26lafL5U9NPPhohuBqYAQ0MN5CtKlM=",
)

professional5 = Professionals(
    title="Property Manager",
    description="Responsible for the day-to-day management and operations of rental properties.",
    image_url="https://media.istockphoto.com/id/1316859268/photo/portrait-of-a-young-businesswoman-standing-against-a-white-background.jpg?s=612x612&w=0&k=20&c=qDLBtPcc7qAQParrytqj9BhXcQ21ovXNUw3fl8_PV0c=",
)

professional6 = Professionals(
    title="Realtor",
    description="A real estate professional who is a member of the National Association of Realtors.",
    image_url="https://media.istockphoto.com/id/1207856403/photo/portrait-of-happy-african-american-young-businessman-in-formal-suit.jpg?s=612x612&w=0&k=20&c=5KcNoy0GCEXQiNgRYL0FcsWi81-OrXn8D0btadopIEk=",
)

professional7 = Professionals(

    title="Real Estate Agent",
    description="Assists clients in buying, selling, and renting properties.",
    image_url="https://media.istockphoto.com/id/1341347262/photo/portrait-smiling-african-american-businessman-in-blue-suit-sit-at-table-for-meeting-in-office.jpg?s=612x612&w=0&k=20&c=Gb1cE6mv7uT4rkWHqdC-9il3XB_gFIIcx8Y8iELvaus="
)

professional1.save()
professional2.save()
professional3.save()
professional4.save()
professional5.save()
professional6.save()
professional7.save()


