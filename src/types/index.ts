export type ExtraUnit = 'item' | 'booking' | 'hour'

type FileRec = { id: string; collectionId?: string; collectionName?: string }

/** Кабинет / зона / SPA-программа, которую бронируют по времени */
export interface Hall extends FileRec {
  studio_id: string
  name: string
  description: string | null
  /** через запятую: «Фито-бочка, Массаж» */
  features: string | null
  capacity: number
  included_guests: number
  extra_guest_price: number
  price_per_hour: number
  /** цена часа в «счастливые часы» (необязательно) */
  price_happy: number | null
  min_hours: number
  sort_order: number
  is_active: boolean
  photo?: string
}

/** Допуслуга: парафин, маска, чай… */
export interface Extra {
  id: string
  studio_id: string
  name: string
  price: number
  unit: ExtraUnit
  sort_order: number
  is_active: boolean
}

export interface ExtraLine {
  id: string
  name: string
  price: number
  unit: ExtraUnit
  qty: number
}

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

export const UNIT_RU: Record<ExtraUnit, string> = {
  item: 'за шт.',
  booking: 'за визит',
  hour: 'за час',
}

/** Демо на случай, если PocketBase недоступен (бронь при этом отправить нельзя) */
export const DEMO_HALLS: Hall[] = [
  {
    id: 'demo-1', studio_id: 'demo', name: 'Кабинет массажа', description: 'Расслабляющий, слим- и антицеллюлитный массаж.',
    features: 'Массажный стол, Профессиональные масла', capacity: 2, included_guests: 1, extra_guest_price: 0,
    price_per_hour: 2500, price_happy: 2000, min_hours: 1, sort_order: 1, is_active: true,
  },
  {
    id: 'demo-2', studio_id: 'demo', name: 'SPA-программа (комплекс)', description: 'Скраб, обёртывание, массаж, парафин — 2–3 часа.',
    features: 'Полный цикл ухода, Фито-бочка, Чай', capacity: 2, included_guests: 1, extra_guest_price: 0,
    price_per_hour: 2500, price_happy: 2000, min_hours: 2, sort_order: 2, is_active: true,
  },
]
