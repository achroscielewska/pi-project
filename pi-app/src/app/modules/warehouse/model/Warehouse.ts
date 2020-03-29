export class Warehouse {
  id: number;
  medicine: Medicine;
  purchase: Purchase[];
  availability: Availability;
  doses: Doses[];
  description?: string;
}

class Medicine {
  code: string;
  name: string;
}

class Purchase {
  purchaseDate: string;
  pharmacy: Pharmacy;
  price: number;
  boxes: number;
}

class Pharmacy {
  name: string;
  link: string;
}

class Availability {
  boxes: number;
  noOfDoses: number;
}

class Doses {
  date: string;
  quantity: number;
}
