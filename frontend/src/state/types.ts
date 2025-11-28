export enum KioskState {
  Idle = 'idle',
  Welcome = 'welcome',
  Scanning = 'scanning',
  Payment = 'payment',
  Receipt = 'receipt',
  Admin = 'admin',
  Error = 'error'
}

export enum KioskEventType {
  START_SESSION = 'START_SESSION',
  BEGIN_SHOPPING = 'BEGIN_SHOPPING',
  SCAN_ITEM = 'SCAN_ITEM',
  PROCEED_TO_PAYMENT = 'PROCEED_TO_PAYMENT',
  PAYMENT_SUCCESS = 'PAYMENT_SUCCESS',
  PAYMENT_FAILURE = 'PAYMENT_FAILURE',
  END_SESSION = 'END_SESSION',
  ENTER_ADMIN = 'ENTER_ADMIN',
  VOID_LAST_ITEM = 'VOID_LAST_ITEM'
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ScanItemPayload {
  item: CartItem;
}

export interface PaymentFailurePayload {
  error: string;
}

export type KioskEvent =
  | { type: KioskEventType.START_SESSION }
  | { type: KioskEventType.BEGIN_SHOPPING }
  | { type: KioskEventType.SCAN_ITEM; payload: ScanItemPayload }
  | { type: KioskEventType.PROCEED_TO_PAYMENT }
  | { type: KioskEventType.PAYMENT_SUCCESS }
  | { type: KioskEventType.PAYMENT_FAILURE; payload: PaymentFailurePayload }
  | { type: KioskEventType.END_SESSION }
  | { type: KioskEventType.ENTER_ADMIN }
  | { type: KioskEventType.VOID_LAST_ITEM };
