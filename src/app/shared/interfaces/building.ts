export interface BaseResponse<T>{
  status: number;
  data: T;
}

// export interface Building  {
//   building_address: string;
//   building_contact_name: string;
//   building_contact_email: string;
//   square_footage: string;
//   image_url: string;
// }

export interface CreateBuilding {
  building_address: string;
  building_contact_name: string;
  building_contact_email: string;
  square_footage: string;
  image_url: string;
}

export interface Building extends CreateBuilding {
  id: number
}
