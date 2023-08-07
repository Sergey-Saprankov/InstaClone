import { useCallback } from 'react'

import { useGetPaymentsQuery } from '../service/userPayments'

import cls from './UserPayments.module.scss'

import { Pagination } from 'shared/ui/Pagination/Pagination'

const tableHeaders = [
  { id: 1, title: 'Date of Payment' },
  { id: 2, title: 'End date of subscription' },
  { id: 3, title: 'Price' },
  { id: 4, title: 'Subscription Type' },
  { id: 5, title: 'Payment Type' },
]

const tableBody = [
  {
    subscriptionId: 1,
    dateOfPayment: '12.12.2022',
    endDateOfSubscription: '12.12.2022',
    price: '$10',
    subscriptionType: '1 day',
    paymentType: 'Stripe',
  },
  {
    subscriptionId: 2,
    dateOfPayment: '12.12.2022',
    endDateOfSubscription: '12.12.2022',
    price: '$50',
    subscriptionType: '7 days',
    paymentType: 'Stripe',
  },
  {
    subscriptionId: 3,
    dateOfPayment: '12.12.2022',
    endDateOfSubscription: '12.12.2022',
    price: '$100',
    subscriptionType: '1 month',
    paymentType: 'Stripe',
  },
  {
    subscriptionId: 4,
    dateOfPayment: '12.12.2022',
    endDateOfSubscription: '12.12.2022',
    price: '$10',
    subscriptionType: '1 day',
    paymentType: 'Stripe',
  },
  {
    subscriptionId: 5,
    dateOfPayment: '12.12.2022',
    endDateOfSubscription: '12.12.2022',
    price: '$10',
    subscriptionType: '1 day',
    paymentType: 'Stripe',
  },
]

export const UserPayments = () => {
  const { data } = useGetPaymentsQuery()
  const onPageChanged = useCallback(() => {}, [])

  const body = data && data.length > 0 ? data : tableBody

  return (
    <div className={cls.UserPayments}>
      <table className={cls.table}>
        <thead className={cls.thead}>
          <tr>
            {tableHeaders.map(el => (
              <th className={cls.th} key={el.id}>
                {el.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map(el => (
            <tr key={el.subscriptionId}>
              <td className={cls.td}>{el.dateOfPayment}</td>
              <td className={cls.td}>{el.endDateOfSubscription}</td>
              <td className={cls.td}>{el.price}</td>
              <td className={cls.td}>{el.subscriptionType}</td>
              <td className={cls.td}>{el.paymentType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={cls.pagination}>
        <Pagination currentPage={1} pageSize={20} totalItem={100} onPageChanged={onPageChanged} />
      </div>
    </div>
  )
}
