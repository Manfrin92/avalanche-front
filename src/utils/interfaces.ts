export interface SignUpData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  cep: string;
  addressStreet: string;
  addressNumber?: string;
  addressComplement?: string;
  addressArea: string;
  city: string;
  state: string;
  otherHabilities?: string;
}

export interface FirstPartFormData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
}

export interface SecondPartFormData {
  cep: string;
  addressStreet: string;
  addressNumber?: string;
  addressComplement?: string;
  addressArea: string;
  city: string;
  state: string;
}

export interface ThirdPartFormData {
  otherHabilities?: string;
}
