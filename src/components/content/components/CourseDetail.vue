<template>
  <div class="bg-[#FFFFFF] rounded-md w-[1,130px] mx-[25px] mt-[37px]">
    <div class="pt-[90px] px-[25px] pb-[23px]">
        <h2 class="text-[18px] text-[#1F2855] font-medium ">Course Detail</h2>
    </div>

    <hr class="w-full">

    <div class="grid grid-cols-2 gap-[25px] mt-[15px] mx-[25px]">
        <div>
            <div class="pb-[25px]">
                <img class="w-[527px] h-[320px]" src="../../../assets/images/course-img.png" alt="">
            </div>
    
            <div class="pb-[5px]">
                <p class="text-[#797F99] text-[12px] ">Created at</p>
            </div>

            <div class="pb-[25px]">
                <h4 class="text-[#457B9D] text-[14px] font-semibold">08/22/2022  00:00</h4>
            </div>

            <div>
                <p class="text-[#797F99] text-[12px] font-semibold pb-[6px]">Status</p>
                <div class="bg-[#F9DBDB] w-[50px] h-[20px] rounded-full inline-block text-center py-[2px]">
                    <button class="-translate-y-[5px] text-[12px] text-[#D2000F] font-semibold">Draft</button>
                </div>
            </div>
        </div>

        <div>
            <div class="pb-[25px]">
                <p class="text-[#797F99] text-[12px] font-semibold pb-[5px]">Title</p>
                <h5 class="text-[#457B9D] text-[14px] font-semibold">Introduction to Core Values AKHLAK</h5>
            </div>

            <div class="pb-[25px]">
                <p class="text-[#797F99] text-[12px] font-semibold pb-[5px]">Category</p>
                <h5 class="text-[#457B9D] text-[14px] font-semibold">Digital Content & Service</h5>
            </div>

            <div class="pb-[25px]">
                <p class="text-[#797F99] text-[12px] font-semibold pb-[5px]">Competencies</p>
                <h5 class="text-[#457B9D] text-[14px] font-semibold">Digital Product/Service Planning</h5>
            </div>

            <div class="pb-[25px]">
                <p class="text-[#797F99] text-[12px] font-semibold pb-[5px]">caption</p>
                <h5 class="text-[#457B9D] text-[14px] font-semibold">Core Values BUMN - AKHLAK</h5>
            </div>

            <div class="pb-[25px]">
                <p class="text-[#797F99] text-[12px] font-semibold pb-[5px]">Updated By</p>
                <h5 class="text-[#457B9D] text-[14px] font-semibold">Admin</h5>
            </div>

            <div class="pb-[25px]">
                <p class="text-[#797F99] text-[12px] font-semibold pb-[5px]">Last Updated</p>
                <h5 class="text-[#457B9D] text-[14px] font-semibold">08/22/2022  00:00</h5>
            </div>

            <div>
                <p class="text-[#797F99] text-[12px] font-semibold pb-[6px]">Privacy</p>
                <div class="bg-[#F9DBDB] w-[50px] h-[20px] rounded-full inline-block text-center py-[2px]">
                    <button class="-translate-y-[5px] text-[12px] text-[#D2000F] font-semibold">Public</button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-between gap-[25px] mx-[25px] mt-[25px]">
            <span class="text-[#457B9D] text-[12px] font-semibold"
              >Content</span
            >
            <hr
              class="border-[1px] bg-[#EFEFEF] w-full translate-y-[10px]"
            />
    </div>

    <div class="inline-block ml-[25px] mt-[25px]" v-for="(val, i) in isMenu" :key="i">
        <button @click="getDesc(i)" :class="{'bg-[#CBE9E9] rounded-md' : indexMenu === i}" class="text-[#0093AD]  h-[38px] py-[10px] px-[13px] text-[12px] font-semibold">{{val}}</button>
    </div>

    <div v-if="indexMenu === 0" class="mt-[25px] mx-[25px]">
        <p class="text-[#457B9D] text-[14px] leading-[14px]">Pengenalan Core Values BUMN AKHLAK (Amanah, Kompetensi, Harmonis, Loyal, Adaptif, Kolaboratif)</p>
    </div>

    <div v-if="indexMenu === 1" class="mt-[25px] mx-[25px]">
        <p class="text-[#457B9D] text-[14px] leading-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, deserunt sed.</p>
    </div>

    <div v-if="indexMenu === 2" class="mt-[25px] mx-[25px]">
        <p class="text-[#457B9D] text-[14px] leading-[14px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae.</p>
    </div>

    <div v-if="indexMenu === 3" class="mt-[25px] mx-[25px]">
        <p class="text-[#457B9D] text-[14px] leading-[14px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo obcaecati excepturi?</p>
    </div>
    <hr class="mt-[15px]">

    <div class="h-[67px] flex justify-end">
        <button @click="$emit('onPublish')" class="mr-[25px] bg-[#D2000F] rounded-md w-[162px] h-[37px] text-[#FFFFFF] text-[14px] font-medium my-auto">Publish Course</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isMenu : [
                "Details",
                "Content",
                "Participant Course",
                "Invite User"
            ],
            indexMenu : 0
        }
    },

    methods : {
        getDesc(i){
            this.indexMenu = i
        }
    }
}
</script>

<style>

</style>