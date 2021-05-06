import React from 'react'
import {TextField} from '@material-ui/core';
import {Grid} from "@material-ui/core";
//create validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
//Localization
import { useTranslation } from 'react-i18next';



export default function FirstStep() {  
  //Localization
  const { t } = useTranslation();
  
  //create validation
  const schema = yup.object().shape({
  Nombre: yup.string().required("Invalid"),
  Apellidos: yup.string().required(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  //Below is the failing code with validation
  // onSubmit={handleSubmit(submitForm)} <p> {errors.Nombre?.message} </p>
  //main body  
  return (
        <div >
        <h1>{t('FirstStepH1.1')}</h1>
          <p>{t('FirstStepP.1')}</p>          
              <div >
              <Grid  container justify="center" alignItems="center" direction="column">          
              <TextField
                id="Nombre"
                label={t('Firstname.1')}
                placeholder={t('Firstname.1')}
                name={t('Firstname.1')}
                margin={t('Firstname.1')}
                variant="outlined"
              />
              
              <TextField
                id="Apellidos"
                label="Apellidos"
                placeholder="Apellidos"
                name="Apellidos"
                margin="normal"
                variant="outlined"
              />               
              </Grid>
              
              </div>             
          </div>          
    );  
}
