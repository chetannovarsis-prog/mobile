export interface Brand {
  name: string;
  models: string[];
}

export const brands: Brand[] = [
  {
    name: "Apple",
    models: [
      "iPhone 15 Pro Max",
      "iPhone 15 Pro",
      "iPhone 15 Plus",
      "iPhone 15",
      "iPhone 14 Pro Max",
      "iPhone 14 Pro",
      "iPhone 14",
      "iPhone 13 Pro Max",
      "iPhone 13",
      "iPhone 12",
      "iPhone SE (3rd gen)"
    ]
  },
  {
    name: "Samsung",
    models: [
      "Galaxy S24 Ultra",
      "Galaxy S24+",
      "Galaxy S24",
      "Galaxy S23 Ultra",
      "Galaxy S23 FE",
      "Galaxy Z Fold 5",
      "Galaxy Z Flip 5",
      "Galaxy A54 5G",
      "Galaxy A34 5G",
      "Galaxy M54",
      "Galaxy F54"
    ]
  },
  {
    name: "Oppo",
    models: [
      "Find X6 Pro",
      "Find N3 Flip",
      "Reno 11 Pro",
      "Reno 10 5G",
      "Reno 8T",
      "F25 Pro 5G",
      "F23 5G",
      "A78 5G",
      "A58"
    ]
  },
  {
    name: "Vivo",
    models: [
      "X100 Pro",
      "V30 Pro",
      "V29 5G",
      "V27 Pro",
      "T2 Pro 5G",
      "Y200 5G",
      "Y56 5G",
      "iQOO 12",
      "iQOO Neo 9 Pro"
    ]
  },
  {
    name: "Xiaomi",
    models: [
      "Xiaomi 14 Ultra",
      "Xiaomi 13 Pro",
      "Redmi Note 13 Pro+",
      "Redmi Note 13 5G",
      "Redmi 13C",
      "Xiaomi Pad 6",
      "POCO X6 Pro",
      "POCO F5"
    ]
  },
  {
    name: "OnePlus",
    models: [
      "OnePlus 12",
      "OnePlus 12R",
      "OnePlus Open",
      "OnePlus 11 5G",
      "OnePlus Nord 3 5G",
      "OnePlus Nord CE 3 Lite",
      "OnePlus 10T"
    ]
  },
  {
    name: "Realme",
    models: [
      "Realme GT 5",
      "Realme 12 Pro+",
      "Realme 11 Pro+",
      "Realme Narzo 60 Pro",
      "Realme C67",
      "Realme P1 5G"
    ]
  },
  {
    name: "Google Pixel",
    models: [
      "Pixel 8 Pro",
      "Pixel 8",
      "Pixel 7a",
      "Pixel 7 Pro",
      "Pixel 6a",
      "Pixel Fold"
    ]
  },
  {
    name: "Motorola",
    models: [
      "Edge 50 Pro",
      "Edge 40 Neo",
      "Razr 40 Ultra",
      "Moto G84 5G",
      "Moto G54 5G",
      "Moto G34"
    ]
  },
  {
    name: "Nothing",
    models: [
      "Phone (2)",
      "Phone (1)",
      "Phone (2a)"
    ]
  },
  {
    name: "Asus",
    models: [
      "ROG Phone 8 Pro",
      "Zenfone 10",
      "ROG Phone 7 Ultimate"
    ]
  }
];

export const variants = [
  "128GB / 8GB RAM",
  "256GB / 8GB RAM",
  "256GB / 12GB RAM",
  "512GB / 12GB RAM",
  "512GB / 16GB RAM",
  "1TB / 16GB RAM"
];

export const conditions = [
  "New (Sealed Box)",
  "Like New (No scratches)",
  "Excellent (Minor signs of use)",
  "Good (Visible scratches)",
  "Fair (Dents or deep scratches)"
];
