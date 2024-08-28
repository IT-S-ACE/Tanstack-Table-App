import { createColumnHelper } from "@tanstack/react-table";

type columns ={
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: string;
    age: number;
    country: string;
    phone: string;
}

const columsHelper = createColumnHelper<columns>()

export const COLUMNSS = [
columsHelper.accessor('id' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id
}),

columsHelper.accessor('first_name' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id
}),
columsHelper.accessor('last_name' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id
}),
columsHelper.accessor('date_of_birth' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id
}),
columsHelper.accessor('country' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id
}),
columsHelper.accessor('phone' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id
}),

]


export const COLUMNS = [
    {
        header : 'id',
        accessorKey : 'id',
    },
    {
        header : 'First Name',
        accessorKey : 'first_name',
    },
    {
        header : 'Last Name',
        accessorKey : 'last_name',
    },
    {
        header : 'Date of Birth',
        accessorKey : 'date_of_birth',
    },
    {
        header : 'Country',
        accessorKey : 'country',
    },
    {
        header : 'Phone',
        accessorKey : 'phone',
    },
]