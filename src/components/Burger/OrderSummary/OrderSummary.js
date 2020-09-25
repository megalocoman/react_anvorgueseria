import React, {Component} from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render(){

       const traslate= (ingr) =>{
            switch(ingr){
                case 'salad':
                    return 'Lechuga';
                case 'bacon':
                    return 'Salame';
                case 'cheese':
                    return 'Queso de Cabra';
                case 'meat':
                    return 'Waigu Patty';
                default:
                    break;
            }
        }
 

        const ingredientSummary = Object.keys(this.props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{traslate(igKey)}</span>: {this.props.ingredients[igKey]}
                </li> );
        } );

        // const ingredientSummary = []

        return (
            <Auxiliary>
            <h3>Su Orden</h3>
            <p>Una Anvorguesa con los más suculentos ingredientes:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Precio total: {this.props.price}</strong></p>
            <p>Quiere terminar la orden?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUAR</Button>
        </Auxiliary>
        );
    }
} 

export default OrderSummary;