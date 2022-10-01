<template>
    <div class="container">
      <div
        class="mx-[25px] bg-[#FFFFFF] h-[75px] mt-[25px] flex justify-between rounded-md shadow-lg"
      >
        <div class="py-[25px] pl-[25px]">
          <img
            class="w-[25px] h-[25px]"
            src="../assets/images/search.svg"
            alt=""
          />
        </div>
  
        <div class="flex justify-between gap-[45px] pt-[18.5px] pr-[24.79px]">
          <div>
            <img src="../assets/images/notif.svg" alt="" />
          </div>
  
          <div class="flex justify-between">
            <div class="text-right">
              <h4 class="text-[14px] font-normal text-[#1F2855]">John Doe</h4>
              <h5 class="text-[12px] text-[#457B9D] font-normal">Admin</h5>
            </div>
            <div class="ml-[13.77]">
              <img
                class="w-[38.44px] h-[35.6px] rounded-full"
                src="../assets/images/ava.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  
      <div>
        <IndexVue></IndexVue>
      </div>
    </div>
  </template>
  
  <script>
  import IndexVue from "./content/Index.vue";
  export default {
    components: {
      IndexVue,
    },
  };
  </script>
  
  <style></style>
  