<template>
  <div>
    <vue-good-table :columns="columns" :rows="rows" />
  </div>
</template>

<script>
import { db, colRef } from "../../src/firbase-config";
import { getDocs, onSnapshot } from "@firebase/firestore";
export default {
  name: "my-component",
  data() {
    return {
      columns: [
        {
          label: "Member Id",
          field: "Member_id",
          type: "number",
        },
        {
          label: "Member Name",
          field: "Member_Name",
        },
        {
          label: "Email",
          field: "Email",
        },
        {
          label: "Phone No",
          field: "phone_no",
          type: "number",
        },
      ],
      rows: [],
    };
  },
  methods: {
    fetchData() {
      let arr=[];
      getDocs(colRef)
      .then(snapshot=>{
        snapshot.docs.forEach(e=>{
          arr.push({...e.data(),id:e.id})
        })
        this.rows=arr;
      })
      console.log(arr);
    },
    printer() {
      console.log("dasdasds");
    }
  },
  created() {
    this.fetchData();
  },
};
</script>