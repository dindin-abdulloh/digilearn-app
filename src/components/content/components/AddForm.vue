<template>
    <div class="bg-[#FFFFFF] rounded-lg w-[1,130px] mx-[25px] mt-[37px] mb-[25px]">
      <div class="pt-[23.5px] px-[25px]">
        <h2 class="text-[18px] font-medium text-[#1F2855]">Add Course</h2>
      </div>
  
      <div class="grid grid-cols-2  gap-[25px] mx-[25px] pt-[15px]">
        <div class="">
          <div>
            <div class="mb-4">
              <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
              >
                Title <span v-html="required"></span>
              </label>
              <input
                class="border-[1px] appearance-none rounded w-full h-[38px] py-2 px-3 text-[12px] text-[#D1D4DD] leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
              />
            </div>
  
            <div class="mb-4">
              <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
              >
                Start Date <span v-html="required"></span>
              </label>
              <Datepicker v-model="date">
                <template #input-icon>
                  <span class="text-input">Start Date</span>
                </template>
              </Datepicker>
            </div>
  
            <div class="mb-4">
              <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
              >
                Caption
              </label>
              <textarea
                class="border-[1px] appearance-none rounded w-full h-[113px] py-2 px-3 text-[12px] text-[#D1D4DD] leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="textarea"
                :placeholder="placeholder"
              ></textarea>
            </div>
          </div>
  
          <div class="flex justify-between">
            <span class="text-[#457B9D] text-[12px] font-semibold"
              >Content Category</span
            >
            <hr
              class="border-[1px] bg-[#EFEFEF] w-[392.5px] translate-y-[10px]"
            />
          </div>
  
          <div class="block pt-[15px]">
            <label
              class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
              for="title"
            >
              Level <span v-html="required"></span>
            </label>
            <div class="mb-3 h-[38px]">
              <select
                class="form-select appearance-none h-[38px] block w-full px-3 py-1.5 text-[12px] font-normal text-[#D1D4DD] bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
  
          <div class="block">
            <label
              class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
              for="title"
            >
              Categories <span v-html="required"></span>
            </label>
            <div class="mb-3 h-[38px]">
              <select
                class="form-select appearance-none h-[38px] block w-full px-3 py-1.5 text-[12px] font-normal text-[#D1D4DD] bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
  
          <div class="block mb-3">
            <label
              class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
              for="title"
            >
            Competencies Based Category <span v-html="required"></span>
            </label>
            <v-select multiple :options="options" :reduce="country => country.code" label="country" />
          </div>

          <div class="block">
            <label
              class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
              for="title"
            >
            Business Domain <span v-html="required"></span>
            </label>
            <v-select multiple :options="options" :reduce="country => country.code" label="country" />
          </div>
        </div>
  
        <!-- Right -->
        <div>
            <div class="block mb-4">
                <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
                >
                Thumbnails <span v-html="required"></span>
                </label>
                <label class="block relative">
                    <span class="absolute right-[22px] top-[10px] z-50 text-[14px] text-[#FFFFFF] leading-[17px]">Upload</span>
                    <input type="file"
                    class="block text-[12px] text-[#1F2855] font-normal pt-2 pl-2 border w-full h-[38px] rounded-md file:rounded-r-md file:text-sm file:font-semibold file:absolute file:-right-[3px] file:bg-[#D2000F] file:-mt-2 file:h-[38px] file:border-l-rose-700 file:text-[#D2000F] hover:file:bg-[#D2000F]" />
                </label>
            </div>

            <div class="mb-4">
              <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
              >
                End Date <span v-html="required"></span>
              </label>
              <Datepicker v-model="date">
                <template #input-icon>
                  <span class="text-input">End Date</span>
                </template>
              </Datepicker>
            </div>

            <div class="mb-4">
              <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
              >
                Description
              </label>
              <textarea
                class="border-[1px] appearance-none rounded w-full h-[113px] py-2 px-3 text-[12px] text-[#D1D4DD] leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="textarea"
                :placeholder="placeholder"
              ></textarea>
            </div>

            <div class="flex justify-between">
                <span class="text-[#457B9D] text-[12px] font-semibold"
                >Content Control</span
                >
                <hr
                class="border-[1px] bg-[#EFEFEF] w-[392.5px] translate-y-[10px]"
                />
            </div>

            <div class="mt-[15px] mb-[8px]">
                <p class="text-[12px] text-[#1F2855] font-[400]">Privacy</p>
            </div>
            <div class="flex gap-[10px]">
                <div>
                    <input class="sr-only peer" type="radio" value="public" name="answer" id="public">
                    <label class="flex w-[18px] p-2 h-[18px] peer-checked:shadow-md  bg-[#EFEFEF] rounded-full cursor-pointer focus:outline-none peer-checked:bg-[#0093AD] peer-checked:shadow-[#0093AD]/50" for="public"></label>
                </div>
                <div class="block -translate-y-[8px]">
                    <h2 class="text-[12px] text-[#1F2855] font-[500]">
                        Public
                    </h2>
                    <h3 class="text-[#797F99] text-[10px] font-normal">
                        Everyone can watch your video
                    </h3>
                </div>
            </div>

            <div class="flex gap-[10px] mt-[7px]">
                <div>
                    <input class="sr-only peer" type="radio" id="protected"  name="answer">
                    <label class="flex w-[18px] p-2 h-[18px] peer-checked:shadow-md  bg-[#EFEFEF] rounded-full cursor-pointer focus:outline-none peer-checked:bg-[#0093AD] peer-checked:shadow-[#0093AD]/50" for="protected"></label>
                </div>
                <div class="block -translate-y-[8px]">
                    <h2 class="text-[12px] text-[#1F2855] font-[500]">
                        Protected
                    </h2>
                    <h3 class="text-[#797F99] text-[10px] font-normal">
                        Everyone wiht link can watch your video
                    </h3>
                </div>
            </div>

            <div class="flex gap-[10px] mt-[7px]">
                <div>
                    <input class="sr-only peer" type="radio" id="private" name="answer">
                    <label class="flex w-[18px] p-2 h-[18px] peer-checked:shadow-md  bg-[#EFEFEF] rounded-full cursor-pointer focus:outline-none peer-checked:bg-[#0093AD] peer-checked:shadow-[#0093AD]/50" for="private"></label>
                </div>
                <div class="block -translate-y-[8px]">
                    <h2 class="text-[12px] text-[#1F2855] font-[500]">
                        Private
                    </h2>
                    <h3 class="text-[#797F99] text-[10px] font-normal">
                        Only someone with access can watch your video
                    </h3>
                </div>
            </div>

            <div class="mt-[15px] mb-[8px]">
                <p class="text-[12px] text-[#1F2855] font-[400]">Sequence</p>
            </div>

            <div class="flex gap-[10px]">
                <div>
                    <input class="sr-only peer" type="radio" id="random" name="answer">
                    <label class="flex w-[18px] p-2 h-[18px] peer-checked:shadow-md  bg-[#EFEFEF] rounded-full cursor-pointer focus:outline-none peer-checked:bg-[#0093AD] peer-checked:shadow-[#0093AD]/50" for="random"></label>
                </div>
                <div class="block -translate-y-[8px]">
                    <h2 class="text-[12px] text-[#1F2855] font-[500]">
                        Random
                    </h2>
                    <h3 class="text-[#797F99] text-[10px] font-normal">
                        User can select content without paying attention to the order of the content. (Course Flow)
                    </h3>
                </div>
            </div>

            <div class="flex gap-[10px]">
                <div>
                    <input class="sr-only peer" type="radio" id="sequence" name="answer" >
                    <label class="flex w-[18px] p-2 h-[18px] peer-checked:shadow-md  bg-[#EFEFEF] rounded-full cursor-pointer focus:outline-none peer-checked:bg-[#0093AD] peer-checked:shadow-[#0093AD]/50" for="sequence"></label>
                </div>
                <div class="block -translate-y-[8px]">
                    <h2 class="text-[12px] text-[#1F2855] font-[500]">
                        Sequence
                    </h2>
                    <h3 class="text-[#797F99] text-[10px] font-normal">
                        User are required to follow the course flow.
                    </h3>
                </div>
            </div>

            <div class="mt-[15px] mb-[8px]">
                <p class="text-[12px] text-[#1F2855] font-[400]">Certified</p>
            </div>

            <div class="flex gap-[10px]">
                <div>
                    <input class="sr-only peer" type="radio" id="certif" name="answer">
                    <label class="flex w-[18px] p-2 h-[18px] peer-checked:shadow-md  bg-[#EFEFEF] rounded-full cursor-pointer focus:outline-none peer-checked:bg-[#0093AD] peer-checked:shadow-[#0093AD]/50" for="certif"></label>
                </div>
                <div class="block -translate-y-[8px]">
                    <h2 class="text-[12px] text-[#1F2855] font-[500]">
                        Certificate
                    </h2>
                    <h3 class="text-[#797F99] text-[10px] font-normal">
                        Everyone can watch your video
                    </h3>
                </div>
            </div>

            <div class="flex gap-[10px]">
                <div>
                    <input class="sr-only peer" type="radio" id="nocertif" name="answer" >
                    <label class="flex w-[18px] p-2 h-[18px] peer-checked:shadow-md  bg-[#EFEFEF] rounded-full cursor-pointer focus:outline-none peer-checked:bg-[#0093AD] peer-checked:shadow-[#0093AD]/50" for="nocertif"></label>
                </div>
                <div class="block -translate-y-[8px]">
                    <h2 class="text-[12px] text-[#1F2855] font-[500]">
                        No Certificate
                    </h2>
                    <h3 class="text-[#797F99] text-[10px] font-normal">
                        Everyone wiht link can watch your video
                    </h3>
                </div>
            </div>

            <div class="block mt-[15px]">
                <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
                >
                Status <span v-html="required"></span>
                </label>
                <v-select multiple :options="options" :reduce="country => country.code" label="country" />
            </div>

            <div class="block mt-[15px]">
                <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
                >
                Organization <span v-html="required"></span>
                </label>
                <v-select multiple :options="options" :reduce="country => country.code" label="country" />
            </div>

            <div class="block mt-[15px] mb-[15px]">
                <label
                class="block text-[12px] text-[#1F2855] leading-[15px] mb-2"
                for="title"
                >
                Learning Hours <span class="text-[#A6A9BC] text-[12px]">(on minutes)</span> <span v-html="required"></span>
                </label>
                <v-select multiple :options="options" :reduce="country => country.code" label="country" />
            </div>
        </div>
        </div>

        <div class="h-[67px] border-t-[1px] flex justify-end mr-[25px]">
            <div class="flex gap-3 my-auto">
                <button @click="$emit('onSave')" class="bg-[#D2000F] rounded-md w-[81px] h-[37px] text-[14px] font-medium text-[#FFFFFF]">Add</button>
                <button @click="$emit('onDelete')" class="w-[107px] h-[37px] text-[14px] border border-[#D2000F] text-[#D2000F] rounded-md">Discard</button>
            </div>
        </div>
      </div>
  </template>
  
  <script>
  import Datepicker from "@vuepic/vue-datepicker";
  import "@vuepic/vue-datepicker/dist/main.css";
  import vSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css';

  
  
  export default {
    components: {
      Datepicker,
      vSelect
    },
    data() {
      return {
        required: '<span class="text-[#D2000F]">*</span>',
        date: null,
        placeholder:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sed?",
  
          options : [
            {code: 'lor', country: 'Lorem'},
            {code: 'ip', country: 'Ipsum'},
        ]
      };
    },

    methods : {
        
    }
  };
  </script>

  
  <style lang="css">
  .text-input {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #d1d4dd;
    margin-left: 15px;
  }

  .vs__selected {
    display: flex;
    align-items: center;
    background-color: #DCF0F1;
    border: none;
    border-radius: 64px;
    color: #0093AD;
    line-height: var(--vs-line-height);
    margin: 4px 2px 0;
    padding: 0 0.25em;
    z-index: 0;
    }

    .vs__actions {
    padding-right: 13px;
    display: flex;
    align-items: center;
    padding: none;
    }

   
  </style>
  