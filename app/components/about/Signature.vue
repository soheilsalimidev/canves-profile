<script setup lang="ts">
const sgin = ref<SVGElement | null>()
onMounted(() => {
  setTimeout(() => {
    sgin.value?.classList.add('active')
  }, 500)
})
</script>

<template>
  <svg
    class="w-50"
    viewBox="0 0 512 324.405"
    style="stroke-width: 0px"
    ref="sgin"
  >
    <g
      id="g3"
      transform="matrix(0.54431189,0,0,0.54967581,-22.918353,-142.45398)"
      style="stroke: var(--color-purple-400); stroke-opacity: 1"
    >
      <path
        d="m 373.72695,409.27992 c 4.7379,-27.02563 -64.52917,-33.8558 -88.89125,-24.24239 -77.56267,30.60664 37.61919,79.9439 47.47575,121.46832 13.35319,56.25527 -21.39905,132.52086 -82.59338,140.01441 -35.18483,-50.65096 20.88155,-110.19371 47.49135,-152.92481 35.04505,-56.2768 59.2499,-118.40024 92.71193,-175.62108 6.71878,-24.46226 45.06235,-86.64091 19.87176,-26.78514 C 364.19128,399.54445 308.80666,505.37758 234.84503,596.25942 180.2127,663.39 130.07424,733.31132 75.98906,801.46676 c -21.288338,26.8265 -47.107616,74.81018 -5.30252,23.4847 89.10368,-71.87174 197.96617,-113.01613 303.48475,-155.34997 173.95735,-69.79134 356.45598,-127.68881 543.51459,-138.09437 35.57825,-1.97912 -14.19572,-0.24776 -23.98986,-0.25257"
        fill="none"
        stroke-opacity="1"
        stroke-width="8.94897"
        stroke-linecap="round"
        id="path1"
        style="stroke: var(--color-purple-400); stroke-width: 8.949px; stroke-opacity: 1; fill: transparent"
        class="svg-elem-1"
      ></path>
      <path
        d="m 415.64762,493.62761 c 20.47673,2.12393 -22.0049,114.87312 7.56048,50.14343 14.10565,-30.88256 102.54051,-106.04261 76.02934,-26.65873 -23.3186,69.82419 28.82253,-63.34017 -31.26741,-14.93095 -39.9401,10.23828 -45.95378,91.08958 4.30879,47.80848 22.12057,-19.04802 48.75444,-53.63567 23.42275,-3.58264 46.30722,2.52447 84.87934,-71.85633 106.42745,-115.09296 13.99593,-28.08306 49.6626,-96.51295 15.54591,-29.86247 -21.98907,42.95792 -65.36458,101.45965 -83.33603,130.56047 27.87205,-26.6672 92.39978,-122.89034 121.46944,-71.9719 -11.20276,22.8021 -92.13043,92.66664 -31.0616,39.14235 22.26059,-19.51048 81.02022,-58.90166 99.49763,-39.39489 -19.96542,25.87525 -88.73787,58.39959 -22.47446,21.21282 63.14592,-52.85766 -37.09561,-17.69665 -35.86033,26.01035 1.81627,64.26365 74.41454,-24.47976 101.2658,-34.09237 56.99337,-79.40454 -67.93405,65.78651 -9.84892,43.68859 60.51374,-47.84366 118.76576,-98.68866 173.99675,-152.2773 8.31482,-54.3137 -67.99924,62.11081 -78.19897,79.42746 -37.29562,38.62577 0.96345,66.76139 36.78332,35.98046 25.58806,-14.04627 139.02234,-61.13435 57.57713,-83.08344"
        fill="none"
        stroke-opacity="1"
        stroke-width="8.94897"
        stroke-linecap="round"
        id="path2"
        style="stroke: var(--color-purple-400); stroke-width: 8.949px; stroke-opacity: 1; fill: transparent"
        class="svg-elem-2"
      ></path>
      <path
        d="m 811.36899,386.30031 c 31.23734,-8.72476 -30.73208,26.36877 3.28331,-3.03073"
        fill="none"
        stroke-opacity="1"
        stroke-width="8.94897"
        stroke-linecap="round"
        id="path3"
        style="stroke: var(--color-purple-400); stroke-width: 8.949px; stroke-opacity: 1; fill: transparent"
        class="svg-elem-3"
      ></path>
    </g>
  </svg>
</template>

<style scoped>
svg .svg-elem-1 {
  stroke-dashoffset: 2557.98486328125px;
  stroke-dasharray: 2557.98486328125px;
  -webkit-transition:
    stroke-dashoffset 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    fill 2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s;
  transition:
    stroke-dashoffset 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    fill 2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
}

svg .svg-elem-2 {
  stroke-dashoffset: 2409.34716796875px;
  stroke-dasharray: 2409.34716796875px;
  -webkit-transition:
    stroke-dashoffset 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.12s,
    fill 2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s;
  transition:
    stroke-dashoffset 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.12s,
    fill 2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s;
}

svg.active .svg-elem-2 {
  stroke-dashoffset: 0;
}

svg .svg-elem-3 {
  stroke-dashoffset: 47.182411193847656px;
  stroke-dasharray: 47.182411193847656px;
  -webkit-transition:
    stroke-dashoffset 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.24s,
    fill 2s cubic-bezier(0.215, 0.61, 0.355, 1) 1s;
  transition:
    stroke-dashoffset 2s cubic-bezier(0.645, 0.045, 0.355, 1) 0.24s,
    fill 2s cubic-bezier(0.215, 0.61, 0.355, 1) 1s;
}

svg.active .svg-elem-3 {
  stroke-dashoffset: 0;
}
</style>
