export enum OrderStatus {
  QUOTE_REQUESTED = "Devis en cours",
  PAYMENT_PENDING = "En attente de paiement",
  PAID = "Payée",
  PURCHASED = "Achetée",
  IN_TRANSIT = "En transport",
  ARRIVED = "Arrivée en Guinée",
  DELIVERED = "Livrée"
}

export interface PartRequest {
  brand: string;
  model: string;
  year: string;
  partReference?: string;
  description: string;
}

export interface Order {
  id: string;
  date: string;
  partName: string;
  status: OrderStatus;
  price?: number;
}