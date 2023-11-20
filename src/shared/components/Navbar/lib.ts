type AllNavbarOptionsType = Array<{
  label: string
  route: string
  nav?: boolean
}>

export const allNavbarOptions: AllNavbarOptionsType = [
  {
    label: 'Browse Menu',
    route: '/menu',
  },
  {
    label: 'Order',
    route: '/order',
  },
]
