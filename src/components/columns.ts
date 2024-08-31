import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";

export type columns ={
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: string;
    age: number;
    country: string;
    phone: string;
}

const columHelper = createColumnHelper<columns>()



// Columns in Tanstack-table way
export const COLUMNSS = [
columHelper.accessor('id' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id,
    // invertSorting: true, //invert the sorting order
    //this column will sort in descending order by default since it is a number column
}),

columHelper.accessor('first_name' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id
    //this column will sort in ascending order by default since it is a string column
}),
columHelper.accessor('last_name' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id,
    sortUndefined:'last', //force undefined values to the end
    sortDescFirst: false, //first sort order will be ascending (nullable values can mess up auto detection of sort order)
}),
columHelper.accessor('date_of_birth' ,{
    cell: info => {return format (new Date(info.getValue()) , 'dd/MM/yyyy')},
    footer : info => info.column.id,
    // enableSorting: false, //disable sorting for this column

}),
columHelper.accessor('country' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id,
    // sortingFn: (sorting fn here), //use our custom sorting function for this enum column
}),
columHelper.accessor('phone' ,{
    cell: info => info.getValue(),
    footer : info => info.column.id
}),

]

//Header Group Columns
export const COLUMNS_GROUP =[
    columHelper.group({
        id:"id",
        header: () => 'ID',
        columns:[
            COLUMNSS[0],
            
        ]
    }),
    columHelper.group({
        id: 'name',
        header: 'Name',
        columns:[
            COLUMNSS[1],
            COLUMNSS[2],
        ]
    }),
    columHelper.group({
        id : 'info',
        header: 'Info',
        columns:[
            COLUMNSS[3],
            COLUMNSS[4],
            COLUMNSS[5],
        ]
    }),
]



// Columns in Defalut way way
export const COLUMNS = [
    {
        header : 'id',
        footer : 'id',
        accessorKey : 'id',
        
    },
    {
        header : 'First Name',
        footer : 'First Name',
        accessorKey : 'first_name',
    },
    {
        header : 'Last Name',
        footer : 'Last Name',
        accessorKey : 'last_name',
    },
    {
        header : 'Date of Birth',
        footer : 'Date of Birth',
        accessorKey : 'date_of_birth',
    },
    {
        header : 'Country',
        footer : 'Country',
        accessorKey : 'country',
    },
    {
        header : 'Phone',
        footer : 'Phone',
        accessorKey : 'phone',
    },
]

// Header Group Columns in Defalut way 

    export const COLUMNS_GROUP_DEFAULT =[
        {
            header : 'id',
        footer : 'id',
        accessorKey : 'id',
        },
        {
            header: 'Name',
            footer: 'Name',
            columns:[
                {
                    header : 'First Name',
                    footer : 'First Name',
                    accessorKey : 'first_name',
                },
                {
                    header : 'Last Name',
                    footer : 'Last Name',
                    accessorKey : 'last_name',
                },
            ]
        },
        {
            header: 'Info',
            footer: 'Info',
            columns:[
                {
                    header : 'Date of Birth',
                    footer : 'Date of Birth',
                    accessorKey : 'date_of_birth',
                },
                {
                    header : 'Country',
                    footer : 'Country',
                    accessorKey : 'country',
                },
                {
                    header : 'Phone',
                    footer : 'Phone',
                    accessorKey : 'phone',
                },
            ]
        }
    ]