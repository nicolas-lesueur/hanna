import React, {useState, useEffect, useContext} from "react";
import './FinancialPlanModal.scss';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import {PortfolioContext} from '../context/PortfolioContext';

export default function FinancialPlanModal(props) {

  const portfolioContext = useContext(PortfolioContext);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '300px',
    bgcolor: 'white',
    borderRadius:'0.5rem',
    boxShadow: 24,
    p: 3
  };

  const [name, setName] = React.useState('');
  const [legalForm, setLegalForm] = React.useState('');
  const [title, setTitle] = useState('');

  useEffect(
    () => {
      if (portfolioContext.openFinancialPlanModal){
        
        if (portfolioContext.modalPlanId === null && portfolioContext.modalCopyPlanId === null){
          //add
          setTitle("Création d'un nouveau plan");
          setName("");
          setLegalForm("Company");
        }
        else if (portfolioContext.modalPlanId !== null){
          //edit
          setTitle("Edition d'un plan existant");
          setName(props.book.plans.find(el=> el.id ===portfolioContext.modalPlanId).name);
          setLegalForm("Company");
        }
        else{
          //copy
          setTitle("Duplication d'un plan existant");
          setName(props.book.plans.find(el=> el.id ===portfolioContext.modalCopyPlanId).name);
          setLegalForm("Company");
        }
      }
    }
    ,[portfolioContext.openFinancialPlanModal]
  );

  const onCancel = () => {
    portfolioContext.setOpenFinancialPlanModal(false);
  }

  const onSave = () => {
    if (name === ''){
      alert('Please enter a name');
      return;
    }

    if (portfolioContext.modalPlanId === null && portfolioContext.modalCopyPlanId === null){
      //add
      portfolioContext.savePlan(
        props.book.id,
        {
          "name":name,
          "legalForm":legalForm
        }
      );
    }
    else if (portfolioContext.modalPlanId !== null){
      //edit
      portfolioContext.savePlan(
        props.book.id,
        {
          "id":portfolioContext.modalPlanId,
          "name":name,
          "legalForm":legalForm
        }
      );

    }
    else{
      //copy (add new one)
      portfolioContext.savePlan(
        props.book.id,
        {
          "name":name,
          "legalForm":legalForm
        }
      );
    }

    portfolioContext.setOpenFinancialPlanModal(false);
  }

  return (
    <Modal
        aria-labelledby="financial-plan-modal"
        aria-describedby="financial-plan-modal"
        open={portfolioContext.openFinancialPlanModal}
        onClose={()=> {portfolioContext.setOpenFinancialPlanModal(false);}}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={portfolioContext.openFinancialPlanModal}>
          <Box sx={style}>
            <div className='financial-plan-modal__content'>

              <h3>{title}</h3>
              <br/>
              <TextField 
                id="name" 
                label="Financial Plan Name" 
                value={name}
                onChange={(e) => {setName(e.target.value);}}
                variant="outlined" 
              />
              <br/>

              <FormControl fullWidth>
                <InputLabel id="legal-form-label">Legal Form</InputLabel>
                <Select
                  labelId="legal-form-label"
                  id="legal-form"
                  value={legalForm}
                  label="Legal Form"
                  onChange={(e)=> {setLegalForm(e.target.value);}}
                >
                  <MenuItem value={'Company'}>Company</MenuItem>
                  <MenuItem value={'Freelance'}>Freelance</MenuItem>
                  <MenuItem value={'ASBL'}>ASBL</MenuItem>
                </Select>
              </FormControl>
              <br/>
            </div>
            <div className='financial-plan-modal__actions'>
              <Button onClick={onCancel} size="small">Cancel</Button>
              <Button onClick={onSave} size="small">Save</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
  );
}