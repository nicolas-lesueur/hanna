import React, {createContext, useState} from "react";
import _ from 'lodash';

// create context
const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {

  // the value that will be given to the context
  const [portfolio, setPortfolio] = useState([]);

  const [openFinancialPlanModal, setOpenFinancialPlanModal] = React.useState(false);
  const [modalPlanId, setModalPlanId] = React.useState(null);
  const [modalCopyPlanId, setModalCopyPlanId] = React.useState(null);


  const savePlan = (bookId, plan) => {
    var bookIndex = portfolio.findIndex(el => el.id === bookId);    
    if (bookIndex > -1){
      var pf = _.cloneDeep(portfolio);
      var planIndex = portfolio[bookIndex].plans.findIndex(el => el.id === plan.id);
      if (planIndex > -1){
        //update existing one 
        pf[bookIndex].plans[planIndex] = plan;
        setPortfolio(pf);
      }
      else{
        //add new one 
        plan.id = pf[bookIndex].plans.length+1; // this is an hack for demo purpose, the id should be returned by the api 
        pf[bookIndex].plans.push(plan);
        setPortfolio(pf);
      }
    }
  }


  const addPlan = (bookId) => {
    var bookIndex = portfolio.findIndex(el => el.id === bookId);
    if (bookIndex > -1){
      setModalPlanId(null);
      setModalCopyPlanId(null);
      setOpenFinancialPlanModal(true);
    }
  }

  const editPlan = (bookId, planId) => {
    var bookIndex = portfolio.findIndex(el => el.id === bookId);
    if (bookIndex > -1){
      var planIndex = portfolio[bookIndex].plans.findIndex(el => el.id === planId);
      if (planIndex > -1){
        setModalPlanId(planId);
        setModalCopyPlanId(null);
        setOpenFinancialPlanModal(true);
      }
    }
  }

  const copyPlan = (bookId, planId) => {
    var bookIndex = portfolio.findIndex(el => el.id === bookId);
    if (bookIndex > -1){
      setModalPlanId(null);
      setModalCopyPlanId(planId);
      setOpenFinancialPlanModal(true);
    }
  }

  const deletePlan = (bookId, planId) => {
    var bookIndex = portfolio.findIndex(el => el.id === bookId);
    if (bookIndex > -1){
      var planIndex = portfolio[bookIndex].plans.findIndex(el => el.id === planId);
      if (planIndex > -1){
        var pf = _.cloneDeep(portfolio);
        pf[bookIndex].plans.splice(planIndex,1);
        setPortfolio(pf);
      }
    }
  }

  return (
    // the Provider gives access to the context to its children
    <PortfolioContext.Provider 
      value={
        { 
          portfolio, setPortfolio, 
          addPlan, editPlan, copyPlan, deletePlan,
          openFinancialPlanModal, setOpenFinancialPlanModal, modalPlanId, modalCopyPlanId, savePlan
        }
      }>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioContextProvider };