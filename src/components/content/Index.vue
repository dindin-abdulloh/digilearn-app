<template>
    <BreadCrumb></BreadCrumb>
    <TableVue v-if="toTable" @addData="addData()"></TableVue>
    <add-form-vue @onSave="onSave()" @onDelete="onDelete()" v-if="toAddForm"></add-form-vue>
    <course-detail-vue @onPublish="onPublish()" v-if="toDetail"></course-detail-vue>
  </template>
  
  <script>
  import BreadCrumb from "./components/BreadCrumb.vue";
  import TableVue from "./components/Table.vue";
  import AddFormVue from "./components/AddForm.vue";
  import CourseDetailVue from "./components/CourseDetail.vue";
  import Swal from "sweetalert2";

  export default {
    components: {
      BreadCrumb,
      TableVue,
      AddFormVue,
      CourseDetailVue
    },

    data(){
        return {
            toTable : true,
            toAddForm : false,
            toDetail : false
        }
    },
    methods: {
        onPublish(){
            Swal.fire({
            title: 'Do you want to publish this course?',
            showCancelButton: true,
            confirmButtonText: 'Save',
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }

            this.toDetail = !this.toDetail
            this.toTable = !this.toTable

            })
            
        },
        addData(){
            this.toAddForm = !this.toAddForm
            this.toTable = !this.toTable
        },

        onSave(){
            Swal.fire({
            title: 'Do you want to save the changes?',
            showCancelButton: true,
            confirmButtonText: 'Save',
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }

            this.toDetail = !this.toDetail
            this.toAddForm = !this.toAddForm
            this.toTable = false

            })
        },
        onDelete() {
            Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this Course",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
            })
        },
    }
  };
  </script>
  
  <style>
     .swal2-icon.swal2-warning {
        border-color: #D2000F !important;
        color: #D2000F !important;
    }

    .swal2-styled.swal2-cancel {
        border: 1px solid #D2000F !important;
        border-radius: 5px !important;
        background: initial;
        background-color: #FFFFFF !important;
        color: #D2000F !important;
        font-size: 1em;
    }

    .swal2-styled.swal2-confirm {
        border: 0;
        border-radius: 0.25em;
        background: initial;
        background-color: #D2000F !important;
        color: #fff;
        font-size: 1em;
    }
  </style>
  