    
    
    // Toggle the side navigation  
    const sidebarToggle = document.body.querySelector('#sidebarToggle');



    // $(document).ready( function () {
    //     $('#table_id').DataTable();
    // } );

    $('#table_id').DataTable( {
        ajax: {
            url: '../json/data.json',
            dataSrc: 'data'
        },
        columns: [   { data: 'name' },
            { data: "address" },
            { data: "city" },
            { data: "age" },
            { data: "last visit" },
            { data: "orders" } ]
    } );
    
