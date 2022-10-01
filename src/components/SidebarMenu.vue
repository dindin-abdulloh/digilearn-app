<template>
    <div class="flex flex-col w-[260px] bg-[#FFFFFF] mb-0 shadow-lg">
      <div class="flex justify-center gap-[11.56px] pt-7">
        <img
          class="w-[21.88px] h-[25px]"
          src="../assets/images/dg-logo.png"
          alt=""
        />
        <div class="-translate-y-1">
          <h1 class="text-[24px] text-[#D2000F] font-medium">Digilearn</h1>
        </div>
      </div>
  
      <div class="flex gap-[44px] justify-center mt-[37px]">
        <div class="flex gap-[15px]">
          <div>
            <img src="../assets/images/home.svg" alt="" />
          </div>
          <h3 class="text-[16px] font-medium">Dashboard</h3>
        </div>
        <div class="justify-end translate-y-2">
          <img src="../assets/images/Mask.svg" alt="" />
        </div>
      </div>
  
      <div class="px-[15px] mt-9">
        <span class="text-[12px] text-[#8FAFC4] font-semibold"
          >CLONE MANAGEMENT</span
        >
      </div>
  
      <div v-for="(val, i) in isMenu" :key="i">
        <div
          @click="onSelectMenu(i)"
          class="relative overflow-hidden cursor-pointer"
        >
          <div class="mx-[15px]">
            <input
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              type="checkbox"
            />
            <div
              :class="{ 'bg-[#DAE5EB]': selectedItem === i }"
              class="px-[15px] pt-[10px] rounded-md mt-[5px]"
            >
              <div class="w-full">
                <div class="w-[230px] h-[40px] flex gap-[15px]">
                  <img
                    class="w-[24px] h-[24px]"
                    :src="getImgUrl(val.icon)"
                    alt=""
                  />
                  <span class="text-[#1F2855] text-[16px] font-medium">{{
                    val?.text
                  }}</span>
                </div>
              </div>
  
              <!-- arrow -->
              <div class="absolute top-[23px] right-[35px]">
                <img src="../assets/images/Mask.svg" alt="" />
              </div>
            </div>
            <!-- content -->
            <div
              :class="{
                'peer-checked:max-h-52': selectedItem === i,
                'peer-checked:mt-4 max-h-0': selectedItem !== i,
              }"
              class="bg-white overflow-hidden transition-all duration-500"
            >
              <div class="">
                <ul v-for="(val, id) in isSubMenu" :key="id">
                  <li
                    @click="onSelectSubMenu(id)"
                    class="flex gap-[15px]"
                    :class="{ 'pt-[20px]': id !== 0, 'pt-[10px]': id == 0 }"
                  >
                    <div
                      :class="{
                        'bg-[#D2000F] shadow-lg shadow-[#D2000F]/50':
                          selectedSubmenu == id,
                        'rounded-md': selectedSubmenu == id,
                      }"
                      class="flex px-[15px] py-[14px] gap-[15px] w-[220px] h-[42px]"
                    >
                      <div
                        :class="{
                          'border-[#457B9D]': selectedSubmenu !== id,
                          'border-[#FFFFFF]': selectedSubmenu === id,
                        }"
                        class="rounded-full border w-[14px] h-[14px]"
                      ></div>
                      <h4
                        :class="{
                          'text-[#457B9D]': selectedSubmenu !== id,
                          'text-[#FFFFFF]': selectedSubmenu === id,
                        }"
                        class="text-[16px] font-medium -translate-y-1"
                      >
                        {{ val }}
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenu: [
          {
            text: "Content",
            icon: "box.svg",
          },
          {
            text: "Account",
            icon: "account.svg",
          },
          {
            text: "Setting",
            icon: "Icon.svg",
          },
          {
            text: "Analytic",
            icon: "analytic.svg",
          },
          {
            text: "Branding",
            icon: "branding.svg",
          },
          {
            text: "Integrasi",
            icon: "integrasi.svg",
          },
        ],
  
        isSubMenu: [
          "Assignment",
          "Webinar",
          "Video",
          "Podcast",
          "Files",
          "Certificate",
          "Course",
          "Pathways",
          "Voucher",
          "Quiz",
          "Category",
          "Competencies",
        ],
  
        selectedItem: 0,
        selectedSubmenu: 2,
      };
    },
  
    methods: {
      getImgUrl(pic) {
        return require("../assets/images/" + pic);
      },
  
      onSelectMenu(e) {
        this.selectedItem = e;
      },
  
      onSelectSubMenu(e) {
        console.log(e);
        this.selectedSubmenu = e;
      },
    },
  };
  </script>
  
  <style></style>
  