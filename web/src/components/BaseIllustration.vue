<template>
  <div :class="`illustration illustration--${name}`" aria-hidden="true">
    <svg
      v-if="name === 'audio-file'"
      width="50"
      height="70"
      viewBox="0 0 50 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48.5 12.6569V66C48.5 67.3807 47.3807 68.5 46 68.5H4C2.61929 68.5 1.5 67.3807 1.5 66V4C1.5 2.61929 2.61929 1.5 4 1.5H37.3431C38.0062 1.5 38.6421 1.76339 39.1109 2.23223L47.7678 10.8891C48.2366 11.3579 48.5 11.9938 48.5 12.6569Z"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M14.5337 59H16.022L16.7368 54.3945L16.8013 53.9609L16.8657 54.3945L17.6098 59H19.0981L20.2817 50.4688H18.77L18.1899 55.25L18.1489 55.6074L18.0962 55.2559L17.3813 50.4688H16.2036L15.5298 55.2207L15.477 55.5723L15.436 55.2383L14.8677 50.4688H13.3618L14.5337 59ZM25.8594 57.2188L26.3574 59H28.0918L25.3496 50.4688H23.8555L21.0605 59H22.7949L23.2988 57.2188H25.8594ZM23.7031 55.8184L24.5996 52.6777L25.4727 55.8184H23.7031ZM31.3433 59H33.0191L35.603 50.4688H33.7866L32.3335 56.0352L32.1753 56.6152L32.0288 56.041L30.5816 50.4688H28.7652L31.3433 59Z"
        fill="#A6B5EC"
      />
      <path d="M38 3V12H47" stroke="#4265E3" stroke-width="3" />
      <circle cx="16.8824" cy="39.5882" r="3.88235" fill="#A6B5EC" />
      <circle cx="31.1177" cy="37" r="3.88235" fill="#A6B5EC" />
      <path
        d="M20.7647 25.3529V39.5882H18.1765V18.8824L35 15V37H32.4118V22.7647L20.7647 25.3529Z"
        fill="#A6B5EC"
      />
    </svg>
    <svg
      v-else-if="name === 'bezier-curve'"
      width="111"
      height="103"
      viewBox="0 0 111 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 102.5C8 87.6665 17 57.5001 39 37C61 16.4999 97.3333 11.6665 110.5 12.9998"
        stroke="#4265E3"
        stroke-width="3"
      />
      <line
        x1="8.92076"
        y1="63.9512"
        x2="68.0339"
        y2="8.85459"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <circle
        cx="39"
        cy="37"
        r="6.5"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <rect
        x="68.5"
        y="1.5"
        width="7"
        height="7"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <rect
        x="1.5"
        y="64.5"
        width="7"
        height="7"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M52.8388 48.8389L59.5564 73.2341C59.5564 73.2341 64.5061 73.2341 68.2184 75.1786C71.9307 77.1232 74.052 78.5374 74.052 78.5374L70.8701 81.7194C73.6037 84.453 78.0359 84.453 80.7696 81.7194L83.2444 79.2445L85.7193 76.7696C88.453 74.036 88.453 69.6038 85.7193 66.8701L82.5373 70.0521C82.5373 70.0521 81.1231 67.9308 79.3553 64.0417C77.5876 60.1526 77.234 55.5564 77.234 55.5564L52.8388 48.8389Z"
        fill="white"
      />
      <path
        d="M52.8388 48.8389L59.5564 73.2341C59.5564 73.2341 64.5061 73.2341 68.2184 75.1786C71.9307 77.1232 74.052 78.5374 74.052 78.5374L70.8701 81.7194V81.7194C73.6037 84.453 78.0359 84.453 80.7696 81.7194L83.2444 79.2445L85.7193 76.7696C88.453 74.036 88.453 69.6038 85.7193 66.8701V66.8701L82.5373 70.0521C82.5373 70.0521 81.1231 67.9308 79.3553 64.0417C77.5876 60.1526 77.234 55.5564 77.234 55.5564L52.8388 48.8389ZM52.8388 48.8389L64.5061 60.5062"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <circle
        cx="67.3345"
        cy="63.3346"
        r="3"
        transform="rotate(-45 67.3345 63.3346)"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
    </svg>
    <svg
      v-else-if="name === 'browser'"
      width="190"
      height="120"
      viewBox="0 0 190 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="187"
        height="117"
        rx="6.5"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M88 117V47C88 44.7909 86.2091 43 84 43H18C15.7909 43 14 44.7909 14 47V117"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <circle cx="36.5" cy="68.5" r="8" stroke="#A6B5EC" stroke-width="3" />
      <rect
        x="57.5"
        y="68.5"
        width="15"
        height="15"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M38.4067 99.75L47.5 84L56.5933 99.75H38.4067Z"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M13.5 16C13.5 14.6193 14.6193 13.5 16 13.5H173C174.381 13.5 175.5 14.6193 175.5 16V28C175.5 29.3807 174.381 30.5 173 30.5H16C14.6193 30.5 13.5 29.3807 13.5 28V16Z"
        stroke="#4265E3"
        stroke-width="3"
      />
      <rect x="104" y="71" width="30" height="3" fill="#4265E3" />
      <rect x="138" y="71" width="10" height="3" fill="#4265E3" />
      <rect x="148" y="82" width="20" height="3" fill="#4265E3" />
      <rect x="104" y="82" width="40" height="3" fill="#4265E3" />
    </svg>
    <svg
      v-else-if="name === 'button-click'"
      width="135"
      height="64"
      viewBox="0 0 135 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="107"
        height="29"
        rx="2.5"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <rect x="37" y="15" width="30" height="3" fill="#A6B5EC" />
      <rect x="71" y="15" width="12" height="3" fill="#A6B5EC" />
      <path
        d="M109.345 44.0018L115.002 49.6586C116.564 51.2207 119.097 51.2207 120.659 49.6586C122.221 48.0965 122.221 45.5639 120.659 44.0018L115.002 38.3449L123.134 30.2132L90.9602 19.9601L101.213 52.1335L109.345 44.0018Z"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <line
        x1="18.1415"
        y1="20.5054"
        x2="27.5054"
        y2="11.1415"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <line
        x1="19.7022"
        y1="21.0661"
        x2="14.5"
        y2="15.8639"
        stroke="#A6B5EC"
        stroke-width="3"
      />
    </svg>
    <svg
      v-else-if="name === 'cable'"
      width="216"
      height="216"
      viewBox="0 0 216 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.9041 173.064C44.904 150.892 51.896 126.242 70.2486 121.325C88.6012 116.407 93.9764 140.331 111.199 133.128C128.422 125.925 118.984 98.4312 138.897 81.9227"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M158.169 49.172L170.897 61.8999L151.098 81.6989C147.583 85.2136 141.885 85.2136 138.37 81.6989C134.855 78.1842 134.855 72.4857 138.37 68.971L158.169 49.172Z"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M172.311 43.515C173.483 42.3434 175.382 42.3434 176.554 43.515C177.725 44.6866 177.725 46.586 176.554 47.7576L166.654 57.6571L162.411 53.4145L172.311 43.515Z"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
    </svg>
    <svg
      v-else-if="name === 'code-block'"
      width="200"
      height="95"
      viewBox="0 0 200 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="197"
        height="92"
        rx="6.5"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <rect x="16" y="16" width="40" height="3" fill="#4265E3" />
      <rect x="16" y="76" width="20" height="3" fill="#4265E3" />
      <rect x="32" y="31" width="60" height="3" fill="#A6B5EC" />
      <rect x="32" y="46" width="30" height="3" fill="#A6B5EC" />
      <rect x="32" y="61" width="40" height="3" fill="#A6B5EC" />
      <rect x="76" y="61" width="50" height="3" fill="#A6B5EC" />
      <rect x="66" y="46" width="30" height="3" fill="#4265E3" />
      <rect x="130" y="61" width="50" height="3" fill="#4265E3" />
      <rect x="100" y="46" width="50" height="3" fill="#4265E3" />
      <rect x="96" y="31" width="46" height="3" fill="#4265E3" />
      <rect x="146" y="31" width="30" height="3" fill="#4265E3" />
    </svg>
    <svg
      v-else-if="name === 'daw'"
      width="218"
      height="114"
      viewBox="0 0 218 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15.5"
        y="6.5"
        width="187"
        height="106"
        rx="6.5"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M59 12V102"
        stroke="#A6B5EC"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M65.1019 1.5L59.0397 12L52.9775 1.5L65.1019 1.5Z"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M5 69.0001C45.5 69.0001 74 72 109 93.0001C122.5 65.5 150 69 150 69L213 81.0001"
        stroke="#4265E3"
        stroke-width="3"
      />
      <circle
        cx="5"
        cy="69"
        r="3.5"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <circle
        cx="109"
        cy="93"
        r="3.5"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <circle
        cx="150"
        cy="69"
        r="3.5"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <circle
        cx="213"
        cy="81"
        r="3.5"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <rect
        x="1.5"
        y="22.5"
        width="215"
        height="32"
        rx="2.5"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <rect x="6" y="27" width="25" height="3" fill="#A6B5EC" />
      <rect x="33" y="32" width="25" height="3" fill="#A6B5EC" />
      <rect x="60" y="37" width="40" height="3" fill="#A6B5EC" />
      <rect x="102" y="32" width="10" height="3" fill="#A6B5EC" />
      <rect x="114" y="47" width="10" height="3" fill="#A6B5EC" />
      <rect x="126" y="42" width="10" height="3" fill="#A6B5EC" />
      <rect x="138" y="37" width="10" height="3" fill="#A6B5EC" />
      <rect x="150" y="32" width="25" height="3" fill="#A6B5EC" />
      <rect x="177" y="37" width="35" height="3" fill="#A6B5EC" />
    </svg>
    <svg
      v-else-if="name === 'dropdown'"
      width="140"
      height="66"
      viewBox="0 0 140 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="137"
        height="63"
        rx="2.5"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path d="M127 19L121 13L115 19" stroke="#4265E3" stroke-width="3" />
      <rect x="16" y="33" width="60" height="3" fill="#A6B5EC" />
      <rect x="3" y="44" width="134" height="19" fill="#A6B5EC" />
      <rect x="16" y="52" width="36" height="3" fill="#4265E3" />
      <rect x="56" y="52" width="15" height="3" fill="#4265E3" />
      <rect x="16" y="14" width="50" height="3" fill="#A6B5EC" />
    </svg>
    <svg
      v-else-if="name === 'knob'"
      width="67"
      height="78"
      viewBox="0 0 67 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 33.5C0 14.9985 14.9985 0 33.5 0C52.0015 0 67 14.9985 67 33.5V70C67 74.4183 63.4183 78 59 78H8C3.58172 78 0 74.4183 0 70V33.5Z"
        fill="white"
      />
      <rect x="7" y="64" width="20" height="3" fill="#A6B5EC" />
      <rect x="31" y="64" width="30" height="3" fill="#A6B5EC" />
      <path
        d="M7.68362 52C4.39168 47.2485 2.45021 41.679 2.06931 35.8941C1.68842 30.1093 2.8826 24.3295 5.52264 19.1803C8.16267 14.0311 12.148 9.70849 17.0473 6.68037C21.9466 3.65225 27.5734 2.03393 33.3185 2.00053C39.0637 1.96713 44.7085 3.51993 49.6421 6.49089C54.5757 9.46184 58.6101 13.7378 61.3087 18.856C64.0074 23.9742 65.2675 29.7397 64.9527 35.5286C64.6378 41.3174 62.7601 46.9092 59.5226 51.6986"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M7.63284 52C3.60907 46.1398 1.64334 39.0695 2.05325 31.9313C2.46317 24.7932 5.22479 18.0043 9.8919 12.6615C14.559 7.31876 20.859 3.73426 27.7738 2.48721C34.6887 1.24016 41.8146 2.4034 48 5.78897"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path d="M35 29L42 15" stroke="#A6B5EC" stroke-width="3" />
      <circle cx="33.5" cy="33.5" r="21" stroke="#4265E3" stroke-width="3" />
    </svg>
    <svg
      v-else-if="name === 'metronome'"
      width="63"
      height="73"
      viewBox="0 0 63 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.4821 2L2 71H51.2857L32.8036 2H20.4821Z" fill="white" />
      <path d="M26.6428 19.2499V63.607" stroke="#A6B5EC" stroke-width="3" />
      <path d="M19.25 53.75H34.0357" stroke="#A6B5EC" stroke-width="3" />
      <path d="M20.4822 42.6606H32.8036" stroke="#A6B5EC" stroke-width="3" />
      <path d="M21.7144 31.5715H31.5715" stroke="#A6B5EC" stroke-width="3" />
      <path d="M22.9465 20.4822H30.3394" stroke="#A6B5EC" stroke-width="3" />
      <path
        d="M26.6428 63.6071L54.9821 29.1071"
        stroke="#4265E3"
        stroke-width="3"
      />
      <circle
        cx="54.9822"
        cy="29.1072"
        r="5.89286"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M2 71.0001C6.92857 68.1251 15.5536 63.6072 26.6429 63.6072C37.7321 63.6072 46.3571 68.1251 51.2857 71.0001"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M42.0446 36.5L34.3976 7.95093C33.4574 4.44086 30.2767 2 26.6429 2V2C23.009 2 19.8283 4.44086 18.8881 7.95093L2 71H51.2857L45.125 48.2054"
        stroke="#4265E3"
        stroke-width="3"
      />
    </svg>
    <svg
      v-else-if="name === 'phone'"
      width="70"
      height="120"
      viewBox="0 0 70 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="67"
        height="117"
        rx="8.5"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <circle cx="26" cy="86" r="4.5" stroke="#A6B5EC" stroke-width="3" />
      <rect
        x="39.5"
        y="87.5"
        width="9"
        height="9"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M26.7369 105.25L31.5 97L36.2631 105.25H26.7369Z"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <path
        d="M59 117V73.6296C59 71.625 57.375 70 55.3704 70H14.6296C12.625 70 11 71.625 11 73.6296V117"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <rect x="9" y="25" width="30" height="3" fill="#4265E3" />
      <rect x="43" y="25" width="10" height="3" fill="#4265E3" />
      <rect x="9" y="43" width="20" height="3" fill="#4265E3" />
      <rect x="9" y="34" width="40" height="3" fill="#4265E3" />
    </svg>
    <svg
      v-else-if="name === 'piano'"
      width="163"
      height="91"
      viewBox="0 0 163 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.50024"
        y="1.5"
        width="159.663"
        height="88.0002"
        rx="2.5"
        fill="white"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M17.4253 1.5H31.4878V50.6001C31.4878 51.9809 30.3685 53.1001 28.9878 53.1001H19.9253C18.5446 53.1001 17.4253 51.9809 17.4253 50.6001V1.5Z"
        fill="#A6B5EC"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path d="M23.0002 52H26.0002V91H23.0002V52Z" fill="#4265E3" />
      <path d="M46.0002 52H49.0002V91H46.0002V52Z" fill="#4265E3" />
      <path d="M91.0002 52H94.0002V91H91.0002V52Z" fill="#4265E3" />
      <path d="M69.0002 0H72.0002V91H69.0002V0Z" fill="#4265E3" />
      <path d="M114 52H117V91H114V52Z" fill="#4265E3" />
      <path d="M137 52H140V91H137V52Z" fill="#4265E3" />
      <path
        d="M40.1753 1.5H54.2378V50.6001C54.2378 51.9809 53.1185 53.1001 51.7378 53.1001H42.6753C41.2946 53.1001 40.1753 51.9809 40.1753 50.6001V1.5Z"
        fill="#A6B5EC"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M85.6755 1.5H99.7381V50.6001C99.7381 51.9809 98.6188 53.1001 97.2381 53.1001H88.1755C86.7948 53.1001 85.6755 51.9809 85.6755 50.6001V1.5Z"
        fill="#A6B5EC"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M108.426 1.5H122.488V50.6001C122.488 51.9809 121.369 53.1001 119.988 53.1001H110.926C109.545 53.1001 108.426 51.9809 108.426 50.6001V1.5Z"
        fill="#A6B5EC"
        stroke="#4265E3"
        stroke-width="3"
      />
      <path
        d="M131.176 1.5H145.238V50.6001C145.238 51.9809 144.119 53.1001 142.738 53.1001H133.676C132.295 53.1001 131.176 51.9809 131.176 50.6001V1.5Z"
        fill="#A6B5EC"
        stroke="#4265E3"
        stroke-width="3"
      />
    </svg>
    <svg
      v-else-if="name === 'switch'"
      width="47"
      height="24"
      viewBox="0 0 47 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="4.5"
        width="41"
        height="15"
        rx="7.5"
        fill="white"
        stroke="#A6B5EC"
        stroke-width="3"
      />
      <rect
        x="24.5"
        y="1.5"
        width="21"
        height="21"
        rx="10.5"
        fill="white"
        stroke="#4F6FE5"
        stroke-width="3"
      />
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['name'])
</script>

<style lang="scss" scoped></style>
