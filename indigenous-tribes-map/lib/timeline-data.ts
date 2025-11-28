export interface TimelineEvent {
  id: string
  year: number
  title: string
  description: string
  tribes: string[]
  category: "origin" | "contact" | "conflict" | "treaty" | "resistance" | "cultural" | "modern"
  significance: "high" | "medium" | "low"
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    year: 100,
    title: "Ancestral Puebloans Flourish",
    description:
      "The ancestors of modern Pueblo peoples begin building sophisticated cliff dwellings and developing advanced agricultural techniques in the Four Corners region.",
    tribes: ["Pueblo Peoples"],
    category: "origin",
    significance: "high",
  },
  {
    id: "2",
    year: 500,
    title: "Hopi Villages Established",
    description:
      "The Hopi people establish permanent villages on the mesas of northern Arizona, beginning over 1,500 years of continuous occupation.",
    tribes: ["Hopi"],
    category: "origin",
    significance: "high",
  },
  {
    id: "3",
    year: 1142,
    title: "Iroquois Confederacy Founded",
    description:
      "The Great Law of Peace unites the Mohawk, Oneida, Onondaga, Cayuga, and Seneca nations into the Haudenosaunee Confederacy, one of the world's oldest democracies.",
    tribes: ["Iroquois (Haudenosaunee)"],
    category: "cultural",
    significance: "high",
  },
  {
    id: "4",
    year: 1492,
    title: "European Contact Begins",
    description:
      "Christopher Columbus arrives in the Caribbean, marking the beginning of sustained European contact with Indigenous peoples of the Americas.",
    tribes: [],
    category: "contact",
    significance: "high",
  },
  {
    id: "5",
    year: 1540,
    title: "Spanish Reach the Southwest",
    description:
      "Francisco Vázquez de Coronado leads an expedition into the Southwest, making first European contact with Pueblo, Hopi, and Zuni peoples.",
    tribes: ["Pueblo Peoples", "Hopi"],
    category: "contact",
    significance: "high",
  },
  {
    id: "28",
    year: 1621,
    title: "Wampanoag-Plymouth Alliance",
    description:
      "Ousamequin (Massasoit) and Wampanoag leaders forge a defense alliance with the Plymouth colony and share a harvest feast that later becomes mythologized.",
    tribes: ["Wampanoag"],
    category: "contact",
    significance: "medium",
  },
  {
    id: "29",
    year: 1675,
    title: "King Philip's War",
    description:
      "A Wampanoag-led coalition resists New England expansion, resulting in catastrophic losses for Indigenous peoples and massive land dispossession.",
    tribes: ["Wampanoag"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "6",
    year: 1680,
    title: "Pueblo Revolt",
    description:
      "Under the leadership of Popé, Pueblo peoples unite to drive Spanish colonizers from New Mexico, achieving independence for 12 years.",
    tribes: ["Pueblo Peoples", "Hopi"],
    category: "resistance",
    significance: "high",
  },
  {
    id: "7",
    year: 1722,
    title: "Tuscarora Join Iroquois",
    description:
      "The Tuscarora nation joins the Haudenosaunee Confederacy, becoming the sixth nation after being displaced from their Carolina homelands.",
    tribes: ["Iroquois (Haudenosaunee)"],
    category: "cultural",
    significance: "medium",
  },
  {
    id: "34",
    year: 1737,
    title: "Walking Purchase",
    description:
      "A disputed land deal in Pennsylvania vastly expands colonial claims and forces Lenape communities to leave much of Lenapehoking.",
    tribes: ["Lenape (Delaware)"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "8",
    year: 1821,
    title: "Cherokee Syllabary Created",
    description:
      "Sequoyah completes the Cherokee syllabary, making Cherokee the first Native American language with a writing system developed independently.",
    tribes: ["Cherokee"],
    category: "cultural",
    significance: "high",
  },
  {
    id: "9",
    year: 1830,
    title: "Indian Removal Act",
    description:
      "President Andrew Jackson signs the Indian Removal Act, authorizing the forced relocation of southeastern tribes to territories west of the Mississippi.",
    tribes: ["Cherokee", "Choctaw", "Seminole"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "10",
    year: 1831,
    title: "First Trail of Tears",
    description:
      "The Choctaw Nation becomes the first to be forcibly relocated, enduring a brutal journey that would later be called the Trail of Tears.",
    tribes: ["Choctaw"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "39",
    year: 1833,
    title: "Treaty of Chicago",
    description:
      "Potawatomi leaders sign the Treaty of Chicago, ceding most remaining Great Lakes homelands and setting stage for removal west.",
    tribes: ["Potawatomi"],
    category: "treaty",
    significance: "high",
  },
  {
    id: "11",
    year: 1835,
    title: "Seminole Wars Begin",
    description:
      "Osceola leads Seminole resistance against forced removal, beginning the Second Seminole War—the longest and costliest Indian war in U.S. history.",
    tribes: ["Seminole"],
    category: "resistance",
    significance: "high",
  },
  {
    id: "12",
    year: 1838,
    title: "Cherokee Trail of Tears",
    description:
      "Over 16,000 Cherokee are forced to march from their homelands to Oklahoma. An estimated 4,000 die during the journey.",
    tribes: ["Cherokee"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "40",
    year: 1838,
    title: "Potawatomi Trail of Death",
    description:
      "More than 850 Potawatomi are forcibly marched from Indiana to Kansas; over 40 people die on the 660-mile journey.",
    tribes: ["Potawatomi"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "41",
    year: 1840,
    title: "Treaty of Nation Ford",
    description:
      "The Catawba sign the Treaty of Nation Ford, ceding most of their South Carolina land base under pressure from settlers.",
    tribes: ["Catawba"],
    category: "treaty",
    significance: "medium",
  },
  {
    id: "13",
    year: 1855,
    title: "Blackfeet Treaty Signed",
    description:
      "The Lame Bull Treaty establishes a large reservation for the Blackfeet Confederacy, though it would later be significantly reduced.",
    tribes: ["Blackfeet (Niitsitapi)"],
    category: "treaty",
    significance: "medium",
  },
  {
    id: "14",
    year: 1861,
    title: "Apache Wars Intensify",
    description:
      "Cochise leads Apache resistance against U.S. expansion after being falsely accused of kidnapping, beginning decades of conflict.",
    tribes: ["Apache"],
    category: "resistance",
    significance: "high",
  },
  {
    id: "15",
    year: 1864,
    title: "Navajo Long Walk",
    description:
      "The U.S. Army forces 8,000 Navajo to march 300 miles to Bosque Redondo in New Mexico, where many perish from disease and starvation.",
    tribes: ["Navajo (Diné)"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "35",
    year: 1864,
    title: "Sand Creek Massacre",
    description:
      "Colorado militia attack a peaceful Cheyenne and Arapaho camp at Sand Creek, killing over 200 people and shocking the Plains.",
    tribes: ["Cheyenne"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "16",
    year: 1868,
    title: "Treaty of Fort Laramie",
    description:
      "The treaty establishes the Great Sioux Reservation, including the Black Hills, and recognizes Sioux sovereignty. It would later be violated.",
    tribes: ["Sioux (Lakota, Dakota, Nakota)"],
    category: "treaty",
    significance: "high",
  },
  {
    id: "17",
    year: 1868,
    title: "Navajo Return Home",
    description:
      "The Treaty of Bosque Redondo allows the Navajo to return to their homeland, establishing the Navajo reservation.",
    tribes: ["Navajo (Diné)"],
    category: "treaty",
    significance: "high",
  },
  {
    id: "36",
    year: 1874,
    title: "Red River War",
    description:
      "U.S. forces wage campaigns against Comanche, Kiowa, and Southern Cheyenne bands, ending much of the Southern Plains resistance.",
    tribes: ["Comanche"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "18",
    year: 1876,
    title: "Battle of Little Bighorn",
    description:
      "Lakota and Cheyenne warriors, led by Sitting Bull and Crazy Horse, defeat Lt. Col. George Custer's 7th Cavalry in Montana.",
    tribes: ["Sioux (Lakota, Dakota, Nakota)"],
    category: "resistance",
    significance: "high",
  },
  {
    id: "30",
    year: 1877,
    title: "Nez Perce War Flight",
    description:
      "Chief Joseph and Nez Perce families undertake a 1,170-mile fighting retreat toward Canada before surrendering near the Bear Paw Mountains.",
    tribes: ["Nez Perce (Nimiipuu)"],
    category: "resistance",
    significance: "high",
  },
  {
    id: "19",
    year: 1886,
    title: "Geronimo Surrenders",
    description:
      "After decades of resistance, Apache leader Geronimo surrenders to U.S. forces, marking the end of the Indian Wars in the Southwest.",
    tribes: ["Apache"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "20",
    year: 1890,
    title: "Wounded Knee Massacre",
    description:
      "U.S. soldiers kill over 250 Lakota men, women, and children at Wounded Knee Creek, marking a tragic end to the Indian Wars.",
    tribes: ["Sioux (Lakota, Dakota, Nakota)"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "42",
    year: 1891,
    title: "Annette Islands Reserve Established",
    description:
      "The U.S. sets aside the Annette Islands Reserve in Southeast Alaska for the Tsimshian community of Metlakatla.",
    tribes: ["Tsimshian"],
    category: "treaty",
    significance: "medium",
  },
  {
    id: "21",
    year: 1918,
    title: "Choctaw Code Talkers",
    description:
      "Choctaw soldiers use their language to transmit coded messages in World War I, pioneering the Code Talker tradition.",
    tribes: ["Choctaw"],
    category: "cultural",
    significance: "high",
  },
  {
    id: "37",
    year: 1921,
    title: "Osage Reign of Terror",
    description:
      "A series of murders targeting Osage citizens for oil headrights prompts federal investigations and reforms in guardianship laws.",
    tribes: ["Osage"],
    category: "conflict",
    significance: "high",
  },
  {
    id: "22",
    year: 1923,
    title: "Navajo Nation Council",
    description: "The Navajo Nation establishes a formal tribal council, creating a modern system of self-governance.",
    tribes: ["Navajo (Diné)"],
    category: "modern",
    significance: "medium",
  },
  {
    id: "23",
    year: 1924,
    title: "Indian Citizenship Act",
    description:
      "Congress grants U.S. citizenship to all Native Americans born in the United States, though many states continue to deny voting rights.",
    tribes: [],
    category: "modern",
    significance: "high",
  },
  {
    id: "31",
    year: 1956,
    title: "Lumbee Act",
    description:
      "Congress acknowledges the Lumbee Tribe of North Carolina but withholds the full services and benefits granted to other federally recognized nations.",
    tribes: ["Lumbee"],
    category: "modern",
    significance: "medium",
  },
  {
    id: "24",
    year: 1957,
    title: "Seminole Federal Recognition",
    description:
      "The Seminole Tribe of Florida receives federal recognition, affirming their status as 'The Unconquered' people.",
    tribes: ["Seminole"],
    category: "modern",
    significance: "medium",
  },
  {
    id: "25",
    year: 1968,
    title: "American Indian Movement",
    description:
      "AIM is founded in Minneapolis by Ojibwe activists, sparking a new era of Native American advocacy and rights activism.",
    tribes: ["Ojibwe (Anishinaabe)"],
    category: "modern",
    significance: "high",
  },
  {
    id: "32",
    year: 1971,
    title: "Alaska Native Claims Settlement Act",
    description:
      "ANCSA settles aboriginal land claims in Alaska, creating Native corporations for Tlingit, Haida, Tsimshian, Inupiat, and other Alaska Native peoples.",
    tribes: ["Tlingit", "Haida", "Inupiat"],
    category: "modern",
    significance: "high",
  },
  {
    id: "38",
    year: 1974,
    title: "Boldt Decision",
    description:
      "U.S. v. Washington affirms Coast Salish treaty fishing rights, allocating half of harvestable fish to treaty tribes and recognizing co-management.",
    tribes: ["Coast Salish"],
    category: "modern",
    significance: "high",
  },
  {
    id: "33",
    year: 1988,
    title: "Hoopa-Yurok Settlement Act",
    description:
      "Federal legislation clarifies reservation boundaries and land ownership for the Hoopa Valley and Yurok Tribes along the Trinity and Klamath Rivers.",
    tribes: ["Yurok"],
    category: "treaty",
    significance: "medium",
  },
  {
    id: "43",
    year: 1980,
    title: "ANILCA Protects Subsistence",
    description:
      "The Alaska National Interest Lands Conservation Act recognizes rural subsistence priorities, supporting Inupiat and Yup'ik lifeways across Alaska.",
    tribes: ["Inupiat", "Yup'ik (Central Alaskan Yup'ik)"],
    category: "treaty",
    significance: "medium",
  },
  {
    id: "26",
    year: 1999,
    title: "Treaty Rights Affirmed",
    description: "The U.S. Supreme Court upholds Ojibwe treaty rights to hunt, fish, and gather on ceded lands.",
    tribes: ["Ojibwe (Anishinaabe)"],
    category: "modern",
    significance: "medium",
  },
  {
    id: "27",
    year: 2020,
    title: "McGirt Decision",
    description:
      "The Supreme Court rules that much of eastern Oklahoma remains tribal reservation land, a major victory for tribal sovereignty.",
    tribes: ["Cherokee", "Choctaw"],
    category: "modern",
    significance: "high",
  },
]

export const categoryColors: Record<string, string> = {
  origin: "#2d5a27",
  contact: "#6b8e23",
  conflict: "#cd5c5c",
  treaty: "#4682b4",
  resistance: "#daa520",
  cultural: "#8b4513",
  modern: "#708090",
}

export const categoryLabels: Record<string, string> = {
  origin: "Origins & Settlement",
  contact: "First Contact",
  conflict: "Conflict & Displacement",
  treaty: "Treaties & Agreements",
  resistance: "Resistance & Defense",
  cultural: "Cultural Milestones",
  modern: "Modern Era",
}
