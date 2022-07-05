<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"/>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: 'Member Id',
          field: 'Member_id',
          type:'number',
        },
        {
          label: 'Member Name',
          field: 'Member_Name',
          
        },
        {
          label:'Email',
          field:'Email'

        },
        {
          label: 'Phone No',
          field: 'phone_no',
          type: 'number',
        },
      ],
      rows: [
        {Member_id:1, Member_Name:"Jinay Shah", Email: "jinay@ymail.com", phone_no:9876556789},
        { Member_id:2,Member_Name:"Kirtan Khatri", Email: "kirtan@ebay.com",  phone_no:9879670820},
        {Member_id:3, Member_Name:"Parth Banker", Email: "parthhbank@yahoo.com",  phone_no:9706594095},
        
      ],
    };
  },
};
</script>