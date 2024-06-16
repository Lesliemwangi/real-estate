from db import cursor, conn


class NewsDetails:
    TABLE_NAME = 'newsdetails'

    def __init__(self, title: str, description: str, content: str, image_url: str):
        self.id = None
        self.title = title
        self.description = description
        self.content = content
        self.image_url = image_url

    def save(self):
        sql = f"""
        INSERT INTO {self.TABLE_NAME} (title, description, content, image_url)
        VALUES (?,?,?,?)
        """
        cursor.execute(sql, (self.title, self.description,
                       self.content, self.image_url))
        conn.commit()
        self.id = cursor.lastrowid
        print(f"Inserted news with ID: {self.id}")
        print(f"{self.title}, {self.description}, {self.content}, {self.image_url}")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,  # Ensure 'title' is used here
            'description': self.description,
            'content': self.content,
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
        newsdetails = cls(
            title=row[1], description=row[2], content=row[3], image_url=row[4])
        newsdetails.id = row[0]
        return newsdetails

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
            content TEXT NOT NULL,
            image_url TEXT NOT NULL
        )
        """
        cursor.execute(sql_create)
        conn.commit()

    @classmethod
    def get_by_id(cls, news_id):
        sql = f"SELECT * FROM {cls.TABLE_NAME} WHERE id = ?"
        cursor.execute(sql, (news_id,))
        row = cursor.fetchone()
        return cls.row_to_instance(row)


NewsDetails.create_table()


news = [
    NewsDetails(
        title="Real Estate Market Trends in 2024",
        description="An overview of the latest trends and predictions for the real estate market in 2024.",
        content="The real estate market in 2024 is expected to see a continued rise in home prices, driven by low inventory and high demand. Experts predict that the trend of remote work and the desire for more spacious homes will continue to drive up prices, especially in suburban and exurban areas. Additionally, the impact of rising interest rates on the market will be a key factor to watch in the coming year.",
        image_url="https://amararealty.co.ke/wp-content/uploads/2023/10/What-are-the-predictions-for-real-estate-market-trends-into-2024.jpg"
    ),
    NewsDetails(
        title="Top 10 Cities to Invest in Real Estate",
        description="A list of the top 10 cities that offer the best real estate investment opportunities.",
        content="According to industry analysts, the top 10 cities for real estate investment in 2024 are: 1. Austin, TX 2. Raleigh-Durham, NC 3. Phoenix, AZ 4. Nashville, TN 5. Denver, CO 6. Seattle, WA 7. Atlanta, GA 8. Dallas-Fort Worth, TX 9. Charlotte, NC 10. Tampa, FL. These cities are expected to see continued population growth, economic expansion, and rising home prices, making them attractive for real estate investors.",
        image_url="https://www.noradarealestate.com/wp-content/uploads/2023/11/best-places-to-invest-in-real-estate.jpg"
    ),
    NewsDetails(
        title="How to Get Started in Real Estate Investing",
        description="A beginner's guide to getting started with real estate investing.",
        content="For those new to real estate investing, the key steps to get started include: 1) Educate yourself on the different investment strategies (e.g., rental properties, fix-and-flip, etc.) 2) Determine your investment goals and risk tolerance 3) Secure financing through mortgages, loans, or other means 4) Research and analyze potential investment properties 5) Build a team of professionals (e.g., real estate agent, property manager, etc.) 6) Manage your properties and tenants effectively 7) Continuously learn and adapt your investment approach.",
        image_url="https://cdn.ramseysolutions.net/media/blog/retirement/investing/how-to-invest-in-real-estate.jpg",
    ),
    NewsDetails(
        title="The Impact of Technology on Real Estate",
        description="Exploring how technology is transforming the real estate industry.",
        content="Technology is revolutionizing the real estate industry in several ways: 1) Online real estate platforms are making it easier for buyers and sellers to connect and transact 2) Virtual and augmented reality are enabling remote property viewings and tours 3) Big data and analytics are providing deeper insights into market trends and customer behavior 4) Blockchain technology is enabling more secure and transparent real estate transactions 5) Artificial intelligence is automating various tasks, from property valuations to customer service. These technological advancements are improving efficiency, transparency, and the overall real estate experience for both industry professionals and consumers.",
        image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAqJaYgrpUoN2KA1FNfkHKhmG2b3I-Pvn5w&s",
    ),
    NewsDetails(
        title="Understanding Real Estate Taxes",
        description="A comprehensive guide to understanding real estate taxes and how they affect your investment.",
        content="Real estate taxes are a significant consideration for any property investment. Key things to understand include: 1) Property tax rates, which vary by location and can significantly impact your overall costs 2) Tax deductions and credits available for investment properties, such as mortgage interest, property taxes, and depreciation 3) Capital gains taxes when selling an investment property 4) The impact of property taxes on cash flow and overall investment returns. Properly accounting for and managing real estate taxes is crucial for maximizing the profitability of any real estate investment.",
        image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTHOO-E9G1X0jghZF9YRLWdlmm2fBrh6EyQ&s",
    ),
    NewsDetails(
        title="Commercial Real Estate vs. Residential Real Estate",
        description="The key differences between commercial and residential real estate investments.",
        content="The main differences between commercial and residential real estate investments include: 1) Property use (commercial properties are used for business purposes, while residential properties are used for living) 2) Tenant types (commercial tenants are businesses, while residential tenants are individuals or families) 3) Financing (commercial properties often require larger down payments and have different loan structures) 4) Risk and return profiles (commercial properties generally have higher potential returns but also higher risks) 5) Management requirements (commercial properties often require more hands-on management compared to residential). Investors need to carefully consider these distinctions when deciding between commercial and residential real estate investments.",
        image_url="https://miro.medium.com/v2/resize:fit:1200/1*KjflOR1aDXNkiIDnJPNvSQ.jpeg",
    ),
    NewsDetails(
        title="Investing in Vacation Rental Properties",
        description="Tips and strategies for investing in vacation rental properties.",
        content="Investing in vacation rental properties can be a lucrative strategy, but it also comes with unique challenges. Key considerations include: 1) Location - choosing a desirable vacation destination with strong demand 2) Property management - either self-managing or hiring a professional property management company 3) Pricing and occupancy - setting the right nightly rates and maximizing occupancy 4) Regulations and taxes - understanding local laws and tax implications 5) Maintenance and upkeep - ensuring the property is well-maintained to attract guests. Successful vacation rental investors focus on properties that can command premium nightly rates, have high occupancy, and are located in popular tourist destinations.",
        image_url="https://www.newsmagnify.com/wp-content/uploads/2022/03/invest-in-rental-properties.jpg",
    ),
    NewsDetails(
        title="Real Estate Market Forecast for 2025",
        description="Predictions and insights into the real estate market outlook for the year 2025.",
        content="According to industry experts, the real estate market in 2025 is expected to see the following trends: 1) Continued price appreciation, but at a slower pace compared to recent years 2) Increased inventory of homes for sale, providing more options for buyers 3) Rising mortgage rates, which may price some buyers out of the market 4) Continued demand for larger homes and properties in suburban and exurban areas 5) Growth in the build-to-rent sector, as investors seek to capitalize on the strong rental market 6) Increased focus on sustainability and energy-efficient features in new construction. Overall, the 2025 real estate market is expected to be more balanced between buyers and sellers, with both groups facing unique challenges.",
        image_url="https://media.licdn.com/dms/image/D5612AQHpOnWi_08isA/article-cover_image-shrink_720_1280/0/1716295322002?e=2147483647&v=beta&t=YDaUNNFt_P871FkofdwbRjopp5ETlibTxVwdkNVQ700",
    ),
    NewsDetails(
        title="Impact of Pandemic on Commercial Real Estate",
        description="Analyzing the effects of the COVID-19 pandemic on commercial real estate sectors.",
        content="The COVID-19 pandemic has had a significant impact on various commercial real estate sectors: 1) Office space - Increased remote work has led to reduced demand for office space, with many companies downsizing or rethinking their office needs 2) Retail - Brick-and-mortar retail has struggled, with many stores and malls experiencing high vacancy rates due to the shift to e-commerce 3) Hospitality - The travel and tourism industry has been hit hard, leading to reduced occupancy and revenue for hotels and resorts 4) Industrial - Demand for warehouse and logistics space has surged to support the growth of e-commerce and supply chain changes. The long-term effects of the pandemic on commercial real estate remain to be seen, but it has undoubtedly accelerated certain trends and disrupted traditional real estate models.",
        image_url="https://media.licdn.com/dms/image/D4E12AQELMnDY-CRqbw/article-cover_image-shrink_720_1280/0/1698850053792?e=2147483647&v=beta&t=hEPLqTkeJLP2edzMGCWuZyuU-o28RxmTfWOo63oiEfg",
    ),
    NewsDetails(
        title="Tips for Buying Your First Home",
        description="Essential tips and advice for first-time homebuyers navigating the real estate market.",
        content="For first-time homebuyers, the process of purchasing a home can be daunting. Here are some essential tips: 1) Get pre-approved for a mortgage - This will give you a clear budget and show sellers you are a serious buyer 2) Research the local market - Understand home prices, trends, and competition in the areas you're interested in 3) Save for a down payment - Aim for at least 20% to avoid private mortgage insurance 4) Consider your long-term needs - Think about factors like commute, school districts, and future plans 5) Work with a experienced real estate agent - They can guide you through the process and help you find the right property 6) Be prepared for the costs of homeownership - Factor in things like property taxes, maintenance, and utilities. Following these tips can help first-time buyers navigate the real estate market with confidence and find the right home for their needs.",
        image_url="https://www.thebalancemoney.com/thmb/jphzOjSWSPo9PhmXXBJsS_NYwL8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tips-for-buying-your-first-home-1798337-color-v02-d6b6a9f0efda4a0fa44fb23e7665ac7f.png",
    ),
    NewsDetails(
        title="The Rise of Eco-Friendly Homes",
        description="Examining the growing trend towards eco-friendly and sustainable homes.",
        content="The demand for eco-friendly and sustainable homes is on the rise, driven by increased environmental awareness and the desire for more energy-efficient and environmentally-friendly living spaces. Some key trends in this area include: 1) Incorporation of renewable energy sources like solar panels and geothermal systems 2) Use of energy-efficient appliances, windows, and insulation to reduce energy consumption 3) Incorporation of sustainable building materials like bamboo, recycled plastics, and reclaimed wood 4) Inclusion of features like water conservation systems, green roofs, and electric vehicle charging stations 5) Increased focus on indoor air quality and healthy living environments. As homebuyers become more conscious of their environmental impact, the real estate industry is responding with a growing supply of eco-friendly home options.",
        image_url="https://media.licdn.com/dms/image/D4D12AQHuqYlhyLXggw/article-cover_image-shrink_720_1280/0/1692793803613?e=2147483647&v=beta&t=2lzCVVQ3d_ovjHaOeshrFbRO9bvfAeLXhmbGbgaEXsY",
    ),
    NewsDetails(
        title="Guide to Real Estate Crowdfunding",
        description="Understanding how crowdfunding platforms are changing real estate investment opportunities.",
        content="Crowdfunding is a method of raising capital from a large group of individuals, primarily online, for various projects or investments. In real estate, crowdfunding allows investors to pool funds online to invest in commercial or residential properties. It democratizes access to real estate investments, offering low minimum investments, potential for passive income through rentals and appreciation, and requires careful risk assessment and due diligence. Crowdfunding platforms have revolutionized real estate investing by enabling smaller investors to participate in projects that were traditionally accessible only to institutional investors or high-net-worth individuals. They facilitate transparency, accessibility, and diversification in real estate portfolios, thereby reshaping the landscape of property investment.",
        image_url="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/8345/images/ffuWFhXQaKCuIidNkPjv_Real_Estate_Crowdfunding.png",
    ),
    NewsDetails(
        title="Renovation Tips to Increase Property Value",
        description="Practical renovation ideas that can enhance the value of your property.",
        content="Renovating a property can be an effective way to increase its value and appeal to potential buyers. Some of the top renovation projects that can boost property value include: 1) Kitchen upgrades - Modernizing the kitchen with new appliances, cabinets, and countertops 2) Bathroom remodels - Updating bathrooms with new fixtures, tiles, and vanities 3) Finishing basements or attics - Converting unused spaces into livable square footage 4) Improving curb appeal - Landscaping, exterior painting, and enhancing the front entrance 5) Adding energy-efficient features - Installing solar panels, upgrading insulation, or replacing windows 6) Renovating outdated spaces - Refreshing dated rooms or converting them to better suit modern living. When planning renovations, it's important to research local market trends and focus on projects that will provide the best return on investment.",
        image_url="https://media.licdn.com/dms/image/D5612AQHxn9xQSNQtYQ/article-cover_image-shrink_720_1280/0/1703675500716?e=2147483647&v=beta&t=M67aNz4j09V73bUQLbfX7Nn_xLlTJcUsCzYw_tdKGD0",
    ),
    NewsDetails(
        title="Challenges of Investing in Real Estate",
        description="Identifying common challenges faced by real estate investors and how to overcome them.",
        content="While real estate investing can be a lucrative endeavor, it also comes with its fair share of challenges. Some of the key challenges include: 1) Financing - Securing financing, especially for investment properties, can be more complex than for a primary residence 2) Property management - Effectively managing tenants, maintenance, and repairs can be time-consuming 3) Market volatility - Real estate markets can be subject to fluctuations in prices, rents, and occupancy rates 4) Legal and regulatory issues - Navigating zoning laws, taxes, and other legal requirements can be daunting 5) Competition - Investors face competition from other buyers, especially in hot real estate markets 6) Risk management - Mitigating risks like property damage, vacancies, and market downturns. Successful real estate investors develop strategies to address these challenges, such as building a strong team of professionals, diversifying their portfolio, and staying up-to-date on market trends and regulations.",
        image_url="https://img.paperfree.com/file_paperfree_144_2020-8-25-25-12-_facing_the_challenges_of_real_estate_business_by_paperfree.jpg",
    ),
    NewsDetails(
        title="Impact of Interest Rates on Real Estate Market",
        description="Analyzing the relationship between interest rates and the real estate market.",
        content="Interest rates have a significant impact on the real estate market. When interest rates rise, it can lead to: 1) Decreased affordability for homebuyers, as higher mortgage rates make monthly payments less affordable 2) Reduced demand for homes, as some buyers are priced out of the market 3) Slower price appreciation, as higher rates limit the amount buyers can afford to pay 4) Increased costs for real estate investors, as financing for investment properties becomes more expensive. Conversely, when interest rates decline, it can stimulate the real estate market by making homes more affordable and increasing buyer demand. Real estate investors and homebuyers need to closely monitor interest rate trends and adjust their strategies accordingly to navigate the market effectively.",
        image_url="https://www.noradarealestate.com/wp-content/uploads/2023/06/how-rising-interest-rates-affect-real-estate-investors.jpeg",
    ),
    NewsDetails(
        title="Investment Strategies for Rental Properties",
        description="Effective strategies for generating passive income through rental properties.",
        content="Investing in rental properties can be a lucrative strategy, but it also comes with unique challenges. Key considerations include: 1) Location - choosing a desirable location with strong demand 2) Property management - either self-managing or hiring a professional property management company 3) Pricing and occupancy - setting the right rental rates and maximizing occupancy 4) Regulations and taxes - understanding local laws and tax implications 5) Maintenance and upkeep - ensuring the property is well-maintained to attract tenants. Successful rental property investors focus on properties that can generate consistent cash flow and appreciate in value over time.",
        image_url="https://media.licdn.com/dms/image/D5612AQHByux-nNnkmw/article-cover_image-shrink_720_1280/0/1709746466934?e=2147483647&v=beta&t=aot-yRbGJrELOsIea5uS4V9PDaygQvF_w3J1kqwdMu0",
    ),
    NewsDetails(
        title="Legal Considerations in Real Estate Transactions",
        description="Important legal aspects to consider when buying or selling real estate properties.",
        content="Real estate transactions involve a complex web of legal considerations that investors and homebuyers must navigate. Some key legal aspects to be aware of include: 1) Property title and ownership - Ensuring clear and unencumbered title to the property 2) Zoning and land use regulations - Understanding how the property can be used and any restrictions 3) Contracts and disclosures - Carefully reviewing purchase agreements, lease contracts, and required disclosures 4) Taxes and fees - Accounting for property taxes, transfer taxes, and other applicable fees 5) Financing and mortgages - Complying with lender requirements and understanding loan terms 6) Liability and insurance - Protecting against risks through appropriate insurance coverage. Consulting with experienced real estate attorneys and professionals can help ensure a smooth and legally sound transaction.",
        image_url="https://sinailawfirm.com/wp-content/uploads/2022/01/Real-Estate-Transactions-1.jpg",
    ),
    NewsDetails(
        title="Tips for Negotiating Real Estate Deals",
        description="Negotiation tips to help you secure the best deals in real estate transactions.",
        content="Effective negotiation is a critical skill for real estate investors and homebuyers. Some tips for negotiating successful real estate deals include: 1) Thoroughly research the market and comparable properties to understand fair pricing 2) Leverage your position as a cash buyer or pre-approved borrower to gain an advantage 3) Identify the seller's motivations and pain points to tailor your offer accordingly 4) Propose creative deal structures, such as lease-to-own or seller financing, to make your offer more appealing 5) Be prepared to walk away if the deal doesn't align with your investment criteria or budget 6) Maintain a professional and courteous demeanor throughout the negotiation process. Effective negotiation can mean the difference between a good deal and a great one, so it's a skill worth developing for any real estate investor or homebuyer.",
        image_url="https://leysbrook.co.uk/wp-content/uploads/2023/09/130923-Property-Negotiations-Tips-to-Help-You-Seal-a-Successful-Deal.png",
    ),
];

for article in news:
    article.save()
