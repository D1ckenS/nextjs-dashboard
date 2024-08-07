import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

interface CardData {
  totalPaidInvoices: string;
  totalPendingInvoices: string;
  numberOfInvoices: number;
  numberOfCustomers: number;
}

interface CardWrapperProps {
  cardData: CardData;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  cardData: {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  },
}) => (
  <>
    <Card title="Collected" value={totalPaidInvoices} type="collected" />
    <Card title="Pending" value={totalPendingInvoices} type="pending" />
    <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
    <Card title="Total Customers" value={numberOfCustomers} type="customers" />
  </>
);

export default async function CardWrapperWrapper() {
  const cardData = await fetchCardData();
  return <CardWrapper cardData={cardData} />;
}


export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-blue-300 p-2 shadow-sm">
      <div className="flex p-4 text-center">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="mx-auto justify-self-center text-sm font-medium text-gray-600">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
