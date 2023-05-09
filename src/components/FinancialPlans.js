import React from "react";
import './FinancialPlans.scss';

import FinancialPlanCardAdd from './FinancialPlanCardAdd';
import FinancialPlanCard from './FinancialPlanCard';

export default function FinancialPlans(props) {

  return (
    <section className='financial-plans'>
      <h3>Plan financier</h3>      

      <div className='financial-plans__wrapper'>        
        <FinancialPlanCardAdd bookId={props.bookId}/>
        {
          props.plans.map((plan) => {
            return (
              <FinancialPlanCard key={plan.id} bookId={props.bookId} plan={plan}/>
            ); 
          })

        }
      </div>


    </section>    
  );
}