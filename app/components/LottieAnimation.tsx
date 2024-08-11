import React from 'react'
import Lottie from 'lottie-react'

function LottieAnimation({
    json,
    divclassName = '',
    classes
}: any) {
    return (
        <div className={`${divclassName}`}>
            <Lottie color='white' animationData={json} loop={true} className={classes} />
        </div>
    )
}

export default LottieAnimation
