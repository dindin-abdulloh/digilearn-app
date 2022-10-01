<template>
    <div class="bg-[#FFFFFF] shadow-lg mx-[25px] mt-[33px] rounded-lg">
      <div class="flex justify-between px-[25px]">
        <div class="flex gap-[33.5px]">
          <div class="w-[157.42px] pt-[22.5px]">
            <h6 class="text-[#1F2855] text-[18px] font-[500]">Course List</h6>
          </div>
  
          <div class="flex justify-between gap-[19.5px] pt-[21px]">
            <div>
              <img
                class="h-[25px] w-[25px]"
                src="../../../assets/images/filter.svg"
                alt=""
              />
            </div>
  
            <div>
              <img
                class="h-[25px] w-[25px]"
                src="../../../assets/images/searching.svg"
                alt=""
              />
            </div>
          </div>
        </div>
  
        <div class="pt-[15px]">
          <button @click="$emit('addData')"
            class="w-[161px] h-[37px] rounded-md px-[25px] border text-[#D2000F] text-[14px] font-[500px] border-[#D2000F]"
          >
            + Add Course
          </button>
        </div>
      </div>
  
      <table class="w-full mt-[22px]">
        <thead>
          <tr
            class="bg-[#DAE5EB] h-[45px] text-left"
            v-for="(val, id) in head"
            :key="id"
          >
            <th
              class="text-[12px] text-[#1F2855] font-semibold pl-[25px] pr-[35px] w-[30px]"
            >
              {{ val.no }}
            </th>
            <th
              class="text-[12px] text-[#1F2855] font-semibold w-[400px] pr-[35px]"
            >
              {{ val.title }}
            </th>
            <th
              class="text-[12px] text-[#1F2855] font-semibold w-[150px] pr-[35px]"
            >
              {{ val.organization }}
            </th>
            <th
              class="text-[12px] text-[#1F2855] font-semibold w-[100px] pr-[35px]"
            >
              {{ val.status }}
            </th>
            <th
              class="text-[12px] text-[#1F2855] font-semibold w-[150px] pr-[35px]"
            >
              {{ val.last_update }}
            </th>
            <th
              class="text-[12px] text-[#1F2855] font-semibold w-[100px] pr-[25px] text-center"
            >
              {{ val.action }}
            </th>
          </tr>
        </thead>
  
        <tbody>
          <tr class="h-[55px] border" v-for="(data, i) in body" :key="i">
            <td
              class="pl-[25px] w-[30px] pr-[35px] text-[14px] text-[#1F2855] font-normal"
            >
              {{ i + 1 }}
            </td>
            <td
              class="w-[400px] pr-[35px] text-[14px] text-[#1F2855] font-normal"
            >
              {{ data.title }}
            </td>
            <td
              class="w-[150px] pr-[35px] text-[14px] text-[#1F2855] font-normal"
            >
              {{ data.organization }}
            </td>
            <td class="w-[100px] pr-[35px]">
              <span
                v-if="data.status === 'Publish'"
                class="bg-[#CCE9EF] w-[65px] px-[9px] rounded-full text-[#0093AD] font-semibold"
                >{{ data.status }}</span
              >
              <span
                v-else
                class="bg-[#F1B7B6] w-[65px] px-[9px] rounded-full text-[#D2000F] font-semibold"
                >{{ data.status }}</span
              >
            </td>
            <td
              class="w-[150px] pr-[35px] text-[14px] text-[#1F2855] font-normal"
            >
              {{ data.last_update }}
            </td>
            <td class="w-[100px] pr-[35px]">
              <div>
                <img
                  class="mx-auto"
                  src="../../../assets/images/action.svg"
                  alt=""
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="flex justify-between mx-[25px] h-[58px]">
        <div class="inline-flex pt-[18.5px]">
          <h6
            class="text-[14px] text-[#457B9D] font-normal leading-[21px] pr-[5px]"
          >
            Showing 1 to
          </h6>
          <span
            class="w-[45px] h-[21px] bg-[#DAE5EB] text-[14px] font-semibold text-center rounded-md"
            >10</span
          >
          <h6
            class="pl-[5px] text-[#457B9D] text-[14px] font-normal leading-[21px]"
          >
            of 100 entries
          </h6>
        </div>
  
        <div class="flex gap-[4px] mt-[15px]">
          <button class="w-[28px] h-[28px] bg-[#F9DBDB] rounded-full">
            <img
              class="mx-auto"
              src="../../../assets/images/left.svg"
              alt=""
            />
          </button>
  
          <div
            class="w-[180px] h-[28px] bg-[#F9DBDB] rounded-full px-[13.5px] static"
          >
            <div
              class="inline-block relative -top-[3px] pl-[1px]"
              v-for="(val, index) in pagination"
              :key="index"
            >
              <button
                @click="onPage(index)"
                :class="{
                  'bg-[#D2000F] text-[#FFFFFF] w-[32px] h-[32px] rounded-full px-[1px]':
                    indexPage === index,
                  'text-[#E16D6E] px-[5px]': indexPage !== index,
                }"
                class="tex-[12px] font-normal"
              >
                {{ val }}
              </button>
            </div>
          </div>
  
          <button class="w-[28px] h-[28px] bg-[#F9DBDB] rounded-full">
            <img
              @click="indexPage++"
              class="mx-auto"
              src="../../../assets/images/right.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pagination: [1, 2, 3, 4, 5, 6, 7],
        head: [
          {
            no: "#",
            title: "TITLE",
            organization: "ORGANIZATION",
            status: "STATUS",
            last_update: "LAST UPDATE",
            action: "ACTION",
          },
        ],
  
        body: [
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Publish",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Draft",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Draft",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Draft",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Publish",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Publish",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Publish",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Publish",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Publish",
            last_update: "08/22/2022",
          },
          {
            title: "Video Title",
            organization: "MYDIGILEARN",
            status: "Publish",
            last_update: "08/22/2022",
          },
        ],
  
        indexPage: 0,
      };
    },
  
    methods: {
      onPage(e) {
        this.indexPage = e;
      },
    },
  };
  </script>
  
  <style></style>
  