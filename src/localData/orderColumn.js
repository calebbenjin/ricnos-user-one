export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Track No",
    accessor: "tracking_id",
  },
  {
    Header: "From",
    accessor: "departure",
  },
  {
    Header: "To",
    accessor: "arrival",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Price",
    accessor: "amount",
  },
  // {
  //   Header: 'Date of Birth',
  //   accessor: 'date_of_birth',
  //   Cell: ({ value }) => {
  //     return format(new Date(value), 'dd/MM/yyyy')
  //   }
  // },
];
