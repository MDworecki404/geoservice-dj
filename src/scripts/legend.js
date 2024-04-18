import $ from 'jquery'
import UW from '../assets/legenda/rowery/UW.png'
import LKMDT from '../assets/legenda/rowery/LKMDT.png'
import SWW from '../assets/legenda/rowery/SWW.png'
import TPDW from '../assets/legenda/rowery/TPDW.png'
import TR123109 from '../assets/legenda/rowery/TR123109.png'

import TAOW from '../assets/legenda/piesze/TAOW.png'
import TR from '../assets/legenda/piesze/TR.png'
import TW from '../assets/legenda/piesze/TW.png'
import TWWW from '../assets/legenda/piesze/TWWW.png'

const legend = () => {

    //bike routes
    $('.UWimg').attr('src',`${UW}`)
    $('.LKMDTimg').attr('src',`${LKMDT}`)
    $('.SWWimg').attr('src',`${SWW}`)
    $('.TPDWimg').attr('src',`${TPDW}`)
    $('.TR123109img').attr('src',`${TR123109}`)

    //walk routes
    $('.TAOWimg').attr('src',`${TAOW}`)
    $('.TRimg').attr('src',`${TR}`)
    $('.TWimg').attr('src',`${TW}`)
    $('.TWWWimg').attr('src',`${TWWW}`)

    $('.legendimg').css('transform', 'translate(0px,25%)')
}

export default legend
