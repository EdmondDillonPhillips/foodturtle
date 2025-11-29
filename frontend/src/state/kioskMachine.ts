import { createMachine, assign } from 'xstate';
import { KioskState, KioskEventType, KioskEvent, CartItem } from './types';

export interface KioskContext {
  sessionId: string | null;
  sessionStart: Date | null;
  cart: CartItem[];
  total: number;
  lastScanned: CartItem | null;
  lastError: string | null;
}

export const kioskMachine = createMachine<KioskContext, KioskEvent>({
  id: 'foodTurtle',
  initial: KioskState.Idle,
  context: {
    sessionId: null,
    sessionStart: null,
    cart: [],
    total: 0,
    lastScanned: null,
    lastError: null
  },
  states: {
    [KioskState.Idle]: {
      on: {
        [KioskEventType.START_SESSION]: {
          target: KioskState.Welcome,
          actions: assign({
            sessionId: () => crypto.randomUUID(),
            sessionStart: () => new Date(),
            cart: () => [],
            total: () => 0,
            lastScanned: () => null,
            lastError: () => null
          })
        }
      }
    },
    [KioskState.Welcome]: {
      on: { [KioskEventType.BEGIN_SHOPPING]: KioskState.Scanning }
    },
    [KioskState.Scanning]: {
      on: {
        [KioskEventType.SCAN_ITEM]: {
          actions: assign({
            cart: (ctx, event) => {
              const existing = ctx.cart.find(i => i.id === event.payload.item.id);
              if (existing) {
                return ctx.cart.map(i =>
                  i.id === event.payload.item.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
                );
              }
              return [...ctx.cart, { ...event.payload.item, quantity: 1 }];
            },
            total: (ctx, event) => ctx.total + event.payload.item.price,
            lastScanned: (_, event) => event.payload.item
          })
        },
        [KioskEventType.PROCEED_TO_PAYMENT]: KioskState.Payment
      }
    },
    [KioskState.Payment]: {
      on: {
        [KioskEventType.PAYMENT_SUCCESS]: KioskState.Receipt,
        [KioskEventType.PAYMENT_FAILURE]: {
          target: KioskState.Scanning,
          actions: assign({ lastError: (_, e) => e.payload.error })
        }
      }
    },
    [KioskState.Receipt]: {
      on: {
        [KioskEventType.END_SESSION]: {
          target: KioskState.Idle,
          actions: assign({
            sessionId: () => null,
            sessionStart: () => null,
            cart: () => [],
            total: () => 0,
            lastScanned: () => null,
            lastError: () => null
          })
        }
      }
    }
  }
});
