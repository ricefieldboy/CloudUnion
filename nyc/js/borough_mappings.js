var borough_mapping = {
    "0": "The Bronx",
    "1": "Brooklyn",
    "2": "Manhattan",
    "3": "Queens",
    "4": "Staten Island"
}

function getBorough(key) {
    return borough_mapping[key];
}

var borough_img = {
    "0": "bronx.jpg",
    "1": "brooklyn.jpg",
    "2": "manhattan.jpg",
    "3": "queens.jpg",
    "4": "statenisland.jpg"
}

function getBoroughImg(key) {
    return borough_img[key];
}

var borough_brief = {
    "0": "U.S. Census Bureau Stats: <br> <br> Population: &emsp; &emsp; &emsp; &nbsp; &nbsp; &emsp; &emsp; &emsp; &emsp; 1,455,720 <br> Median Household Income: &nbsp; &nbsp;  &nbsp; &nbsp; $34,299.00 <br> Number of Businesses: &nbsp; &nbsp; &nbsp; &emsp; &emsp; &emsp; 135,782 <br> Retail Sales: &emsp; &emsp; &emsp; &ensp; &nbsp; &nbsp;   $6,872,806,000.00 <br> <br> &emsp; &emsp; &emsp; The Bronx is the northernmost of the five boroughs of New York City, within the U.S. state of New York. The name \"Bronx\" originated with Jonas Bronck, who established the first settlement in the area as part of the New Netherland colony in 1639.  Originally, the area was inhabited by American Indians until colonization turned the borough into a farmland. <br> &emsp; &emsp; &emsp; The Bronx received many immigrant groups as it was transformed into an urban community, first from various European countries (particularly Ireland, Germany, and Italy) and later from the Caribbean region (particularly Puerto Rico, Jamaica, and the Dominican Republic), as well as African American migrants from the southern United States. This cultural mix has made the Bronx a wellspring of both Latin music and hip hop. <br> &emsp; &emsp; &emsp; The Bronx contains wide diverse population, which includes affluent, upper-income and middle-income neighborhoods such as Riverdale, Fieldston, Spuyten Duyvil, Schuylerville, Pelham Bay, Pelham Gardens, Morris Park, and Country Club.  The Bronx, particularly the South Bronx, have shown significant redevelopment starting in the late 1980s before picking up pace from the 1990s until today.",
    
    "1": "U.S. Census Bureau Stats: <br> <br> Population: &emsp; &emsp; &emsp; &nbsp; &nbsp; &emsp; &emsp; &emsp; &emsp; 2,629,150 <br> Median Household Income: &nbsp; &nbsp;  &nbsp; &nbsp; $48,201.00 <br> Number of Businesses: &nbsp; &nbsp; &nbsp; &emsp; &emsp; &emsp; 296,858  <br> Retail Sales: &emsp; &emsp; &emsp; &ensp; &nbsp; $20,533,079,000.00 <br> <br> &emsp; &emsp; &emsp; Brooklyn is the most populous borough of New York City, with a Census-estimated 2,629,150 residents in 2016.  It is also the second-most densely populated county in the United States, after the county of New York (which is coextensive with the borough of Manhattan). <br> &emsp; &emsp; &emsp; Today, if New York City dissolved, Brooklyn would rank as the third-most populous city in the U.S., behind Los Angeles and Chicago. <br> &emsp; &emsp; &emsp; Brooklyn was an independent incorporated city (and previously an authorized village and town within the provisions of the New York State Constitution) until January 1, 1898, when, after a long political campaign and public relations battle during the 1890s, according to the new Municipal Charter of \"Greater New York\", Brooklyn was consolidated with the other cities, boroughs, and counties to form the modern \"City of New York,\" surrounding the Upper New York Bay with five constituent boroughs. The borough continues, however, to maintain a distinct culture. Many Brooklyn neighborhoods are ethnic enclaves.  Brooklyn's official motto, displayed on the Borough seal and flag, is Eendraght Maeckt Maght which translates from early modern Dutch as \"Unity makes strength\". <br> &emsp; &emsp; &emsp; In the first decades of the 21st century, Brooklyn has experienced a renaissance as an avant garde destination for hipsters, with concomitant gentrification.  Brooklyn has evolved into a thriving hub of entrepreneurship and high technology startup firms and of postmodern art and design.",
    
    "2": "U.S. Census Bureau Stats: <br> <br> Population: &emsp; &emsp; &emsp; &nbsp; &nbsp; &emsp; &emsp; &emsp; &emsp; 1,643,734 <br> Median Household Income: &nbsp; &nbsp;  &nbsp; &nbsp; $72,871.00 <br> Number of Businesses: &nbsp; &nbsp; &nbsp; &emsp; &emsp; &emsp; 315,339 <br> Retail Sales: &emsp; &emsp; &emsp; &ensp; &nbsp; $44,039,957,000.00 <br> <br> &emsp; &emsp; &emsp; Manhattan is the most densely populated borough of New York City, being its economic and administrative center and historical birthplace.  It may be known locally as simply \"The City\".  The borough is coextensive with New York County, founded on November 1, 1683, as one of the original counties of the U.S. state of New York. The borough consists mostly of Manhattan Island, bounded by the Hudson, East, and Harlem rivers; several small adjacent islands; and Marble Hill, a small neighborhood now on the U.S. mainland, physically connected to the Bronx and separated from the rest of Manhattan by the Harlem River. <br> &emsp; &emsp; &emsp; Manhattan is often described as the cultural, financial, media, and entertainment capital of the world, and hosts the United Nations Headquarters.  Anchored by Wall Street in the Financial District of Lower Manhattan, New York City has been called both the most economically powerful city and the leading financial center of the world.  Manhattan is home to the world's two largest stock exchanges by total market capitalization: the New York Stock Exchange and NASDAQ.  Many multinational media conglomerates are based in Manhattan, and the borough has been the setting for numerous books, films, and television shows. Manhattan is historically documented to have been purchased by Dutch colonists from Native Americans in 1626 for 60 guilders, which equals US $1050 today.  Manhattan real estate has since become among the most expensive in the world, with the value of Manhattan Island, including real estate, estimated to exceed US $3 trillion in 2013. <br> &emsp; &emsp; &emsp; It is also one of the most densely populated areas in the world, with a census-estimated 2016 population of 1,643,734 living in a land area of 22.83 square miles or 71,999 residents per square mile, higher than the density of any individual U.S. city.  On business days, the influx of commuters increases this number to over 3.9 million, or more than 170,000 people per square mile. Manhattan has the third-largest population of New York City's five boroughs, after Brooklyn and Queens, and is the smallest borough in terms of land area. <br> &emsp; &emsp; &emsp; Many districts and landmarks in Manhattan have become well known, as New York City received a record 61 million tourists in 2016 and Manhattan hosts three of the world's 10 most-visited tourist attractions in 2013: Times Square, Central Park, and Grand Central Terminal. <br> &emsp; &emsp; &emsp; Chinatown district incorporates the highest concentration of Chinese people in the Western Hemisphere. <br> &emsp; &emsp; &emsp; The City of New York was founded at the southern tip of Manhattan and the borough houses New York City Hall, the seat of the city's government.  Numerous colleges and universities are located in Manhattan, including Columbia University, New York University, Weill Cornell Medical College, and Rockefeller University, which have been ranked among the top 35 in the world.",
    
    "3": "U.S. Census Bureau Stats: <br> <br> Population: &emsp; &emsp; &emsp; &nbsp; &nbsp; &emsp; &emsp; &emsp; &emsp; 2,333,054 <br> Median Household Income: &nbsp; &nbsp;  &nbsp; &nbsp; $57,720.00 <br> Number of Businesses: &nbsp; &nbsp; &nbsp; &emsp; &emsp; &emsp; 265,643 <br> Retail Sales: &emsp; &emsp; &emsp; &ensp; &nbsp; $17,003,207,000.00  <br> <br> &emsp; &emsp; &emsp; Queens is the easternmost and largest in area of the five boroughs of New York City.  It is geographically adjacent to the borough of Brooklyn at the southwestern end of Long Island, and to Nassau County further east on Long Island; in addition, Queens shares water borders with the boroughs of Manhattan and the Bronx.  Coterminous with Queens County since 1899, the borough of Queens is the second-largest in population (after Brooklyn), with a census-estimated 2,333,054 residents in 2016,  approximately 48% of them foreign-born.  Queens County also is the second-most populous county in the U.S. state of New York, behind the neighboring borough of Brooklyn, which is coterminous with Kings County. Queens is the fourth-most densely populated county among New York City's boroughs, as well as in the United States. If each of New York City's boroughs were an independent city, Queens also would be the nation's fourth most populous, after Los Angeles, Chicago, and Brooklyn.  Queens is the most ethnically diverse urban area in the world. <br> &emsp; &emsp; &emsp; Queens was established in 1683 as one of the original 12 counties of New York. It is presumably named for the Portuguese Princess Catherine of Braganza (1638–1705), Queen of England, Scotland, and Ireland.  It became a borough of New York City in 1898, and from 1683 until 1899, the County of Queens included what is now Nassau County. <br> &emsp; &emsp; &emsp; Queens has the most diversified economy of the five boroughs of New York City.  It is home to JFK International Airport and LaGuardia Airport.  These airports are among the world's busiest, causing the airspace above Queens to be the most congested in America.  Attractions in Queens include Flushing Meadows Corona Park, Citi Field (home to the New York Mets baseball team), the US Open tennis tournament, Kaufman Astoria Studios, Silvercup Studios, and Aqueduct Racetrack.  The borough has diverse housing, ranging from high-rise apartment buildings in the urban areas of western and central Queens, such as Jackson Heights, Flushing, Astoria, and Long Island City, to suburban neighborhoods in the eastern part of the borough such as Little Neck, Douglaston, and Bayside.",
    
    "4": "U.S. Census Bureau Stats: <br> <br> Population: &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; 476,015 <br> Median Household Income: &nbsp; &nbsp;  &nbsp; &nbsp;  $73,197.00 <br> Number of Businesses:  &emsp; &emsp; &emsp; &emsp; &ensp; 39,645 <br> Retail Sales: &emsp; &emsp; &emsp; &ensp; &nbsp; &nbsp; $3,815,951,000.00 <br> <br> &emsp; &emsp; &emsp; Staten Island is one of the five boroughs of New York City in the U.S. state of New York.  In the southwest of the city, Staten Island is the southernmost part of both the city and state of New York, with Conference House Park at the southern tip of the island and the state.  The borough is separated from New Jersey by the Arthur Kill and the Kill Van Kull, and from the rest of New York by New York Bay.  With a 2016 Census-estimated population of 476,015, Staten Island is the least populated of the boroughs but is the third-largest in area at 58 square miles.  Staten Island is the only borough of New York with a non-Hispanic White majority.  Staten Island has been sometimes called \"the forgotten borough\" by inhabitants who feel neglected by the city government. <br> &emsp; &emsp; &emsp; The North Shore, especially the neighborhoods of St. George, Tompkinsville, Clifton, and Stapleton, is the most urban part of the island; it contains the designated St. George Historic District and the St. Paul's Avenue-Stapleton Heights Historic District, which feature large Victorian houses. The East Shore is home to the 2.5-mile F.D.R. Boardwalk, the fourth-longest in the world.  The South Shore, site of the 17th-century Dutch and French Huguenot settlement, developed rapidly beginning in the 1960s and 1970s and is now mostly suburban in character. The West Shore is the least populated and most industrial part of the island. <br> &emsp; &emsp; &emsp; Staten Island had the Fresh Kills Landfill, which was the world's largest landfill before closing in 2001, although it was temporarily reopened that year to receive debris from the September 11 attacks.  The landfill is being redeveloped as Freshkills Park, an area devoted to restoring habitat; the park will become New York City's second largest public park when completed."
}

function getBoroughBrief(key) {
    return borough_brief[key];
}

var borough_briefCN = {
    "0": "布朗克斯（/brɒŋks/）是美国纽约市纽约市五个最北的地区。它位于威彻斯特县以南地区;北部和东部的岛屿和曼哈顿自治市镇南部和西部横跨哈莱姆河;在皇后区的北部，横跨东河。在五个行政区中，布朗克斯是唯一拥有美国大陆地区的地区，2016年的土地面积达到42平方英哩（109平方公里），人口为1,455,720人，是第四大土地人口第四高，人口密度第三高。自1914年以来，布朗克斯与布朗克斯县，纽约县和美国人口密度最高的县有同样的界限。 <br>布朗克斯被布朗克斯河划分成西部更靠近曼哈顿的山坡，更靠近长岛的东部较平坦的东部。东西街道地址由杰罗姆大道分开，曼哈顿第五大道的延续。西布朗克斯在1874年被吞并到纽约市，1895年在布朗克斯河以东地区。布朗克斯县在1914年与纽约县分离。布朗克斯地区约四分之一是开放空间，包括伍德劳恩公墓，范科特兰德公园，佩勒姆湾公园，纽约植物园和自治市镇北部和中部的布朗克斯动物园。这些开放空间主要位于19世纪末由于城市发展在曼哈顿北部和东部地区，故意保留的土地上。",
    "1": "布鲁克林（/brʊklᵻn）是纽约市人口最多的自治市镇，2016年的人口普查估计有2,629,150名居民。它毗邻长岛西南端的皇后区，与附近的几个街道连接史坦顿岛和曼哈顿。自1896年以来，布鲁克林与美国纽约州人口最多的国家金斯县（Kings County）有着同样的界限，是美国第二大人口密集的县（纽约县），与纽约市相邻的曼哈顿）。 <br>国土面积71平方英里（180平方公里），水域面积26平方英里（67平方公里），国王县是纽约市第四小区，占地面积的三分之一以上，虽然是是全市五个行政区的第二大城市。今天如果纽约解散，布鲁克林将在美国排在洛杉矶和芝加哥之后的美国人口第三大城市。",
    "2": "曼哈顿（/mænhætən/，/mən-/）是纽约市人口最稠密的自治市镇，其经济和行政中心及其历史发源地。它可能在本地被称为简单的“城市”。该州与纽约县共同建立，成立于1683年11月1日，是美国纽约州的州之一。该行政区主要由曼哈顿海岛组成，由哈德森，东方和哈莱姆河流域组成;几个相邻的小岛;和大理石山，现在在美国大陆的一个小社区，与布朗克斯身体连接，并与哈林河与曼哈顿其他地区分开。 <br>曼哈顿经常被描述为世界文化，金融，媒体和娱乐之都，并担任联合国总部。华尔街在曼哈顿下城金融区停留，纽约市被称为世界上经济最强大的城市和领先的金融中心，曼哈顿是总市值为世界两大证券交易所的所在地：纽约证券交易所和纳斯达克。许多跨国媒体集团总部位于曼哈顿，自治市镇一直是无数书籍，电影和电视节目的设置。曼哈顿历史上被证明是由荷兰殖民者从1626年由美国土着人购买的60架荷兰盾，今天相当于1050美元。曼哈顿的房地产已经成为世界上最贵的，曼哈顿岛的价值包括房地产，2013年估计超过3万亿美元; 2017年，曼哈顿居民住宅售价中位数超过每平方英尺1,500美元（16,000美元/平方米），而曼哈顿中城区第五大街则命名世界最高的零售租金，2017年为每平方英尺3,000美元（32,000美元/平方米） 。",
    "3": "皇后区是纽约市五个行政区最东端和最大的地区。它与地理位置相邻，位于长岛西南端的布鲁克林自治市镇，长岛以东的拿骚县;此外，皇后与曼哈顿和布朗克斯市区分享水边界。皇后区自1899年以来，皇后区的人口（布鲁克林以后）人口第二大，2016年人口普查估计为2,333,054人，其中约48％为外国人。皇后县也是美国纽约州人口第二大的县，毗邻布鲁克林市区，毗邻国王县。皇后是纽约市的第四大人口密集的县，也是美国。如果纽约市的每个行政区都是独立的城市，皇后区也将是洛杉矶，芝加哥和布鲁克林以来人口第四的国家。皇后是世界上种族最多的城市。 <br>皇后区成立于1683年，是纽约原有的12个县之一。它可能被命名为葡萄牙公主凯瑟琳（Braganza）（1638-1705），英国女王，苏格兰和爱尔兰。 1898年成为纽约市的一个自治市镇，从1683年到1899年，皇后县包括现在的拿骚县。",
    "4": "史坦顿岛/ˌstætənaɪlndnd/是美国纽约市纽约市的五个行政区之一。在这个城市的西南部，史坦顿岛是纽约市和纽约州最南端的一个地区，会议公园位于该岛南部和南部。这个自治市镇与新泽西州的亚瑟杀死和杀死范库尔以及纽约湾纽约其他地方分开。由于2016年人口普查估计人口476,015人，斯塔滕岛人口最少，是58平方英里（150平方公里）的第三大地区。史坦顿岛是纽约唯一的非西班牙裔白人多数的自治市镇。这个自治市镇与里士满县是共同的，直到1975年是里士满自治市。它的旗帜后来改变了以反映这一点。有时被称为“被遗忘的自治市镇”的史坦顿岛被市政府忽视的居民。 <br>北岸 - 特别是圣乔治，Tompkinsville，Clifton和Stapleton的社区是岛上最城市的地区。它包含指定的圣乔治历史区和圣保罗大道 - 斯塔普顿高地历史区，其中设有大型维多利亚式房屋。东岸是2.5英里（4公里）的F.D.R.木板路，世界第四长。南岸是17世纪荷兰和法国胡格诺派定居点的地点，从1960年代和70年代开始迅速发展，现在大部分都是郊区的。西岸是人口最少，工业最多的部分。"
}

function getBoroughBriefCN(key) {
    return borough_briefCN[key];
}