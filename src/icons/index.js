/**
 * Created by SongCQ on 2018/8/24.
 */
// import pie from './svg/pie'
// import beer from './svg/beer'
// import record from './svg/record-head'
// import classify from './svg/classify'
// import logout from './svg/logout'
// import logout2 from './svg/logout2'
// import home from './svg/home'
// import homeallfill from './svg/homeallfill'
// import logoutallfill from './svg/logoutallfill'
// import fullscreen from './svg/fullscreen'
// import outfullscreen from './svg/outfullscreen'
// import logo from './svg/logo'
// import humen from './svg/humen'
// import humenpic from './svg/humenpic'

import Vue from 'vue'
import IconSvg from '@/components/icon-svg'

Vue.component('IconSvg', IconSvg)

const svgFiles = require.context('./svg', true, /\.svg$/)
const iconList = svgFiles.keys().map(item => svgFiles(item))

export default {
  getNameList () {
    return iconList.map(item =>{
        console.log(item)
        item.default.id
    })
  }
}
