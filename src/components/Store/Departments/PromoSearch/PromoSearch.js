import React, { useState } from 'react'
import PromoCodeInput from '../../../../styled_components/PromoCode/PromoCodeInput'
import Container from '../../../../styled_components/Container'
import PromoCodeButton from '../../../../styled_components/PromoCode/PromoCodeButton'

export default function PromoSearch({PromoCodeEntered}) {

    let promoCodeInput = React.createRef();

    return (
        <Container>
             <PromoCodeInput  ref={promoCodeInput} placeholder="Enter you Promo Code here"></PromoCodeInput>
             <PromoCodeButton  onClick={() => PromoCodeEntered(promoCodeInput.current.value)}>Get promo</PromoCodeButton>
        </Container>
           

    )
}
