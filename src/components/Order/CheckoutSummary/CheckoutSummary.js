import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope that it tastes good!</h1>
            <div>
                <Burger ingredients={props.ingredients} />
                <Button btnType="Danger">Cancel</Button>
                <Button btnType="Success">Continue</Button>
            </div>
        </div>
    )
}

export default checkoutSummary