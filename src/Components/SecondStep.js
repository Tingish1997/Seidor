import React from 'react'
import Card from '@material-ui/core/Card';
import {Grid} from "@material-ui/core";
//Localization
import { useTranslation } from 'react-i18next';

export default function SecondStep() {
  //Localization
  const { t } = useTranslation();

    return (
        <div>
          <Grid container justify="center" alignItems="center" direction="column">
          <h1>{t('SndStepH1.1')}</h1>
          <p>{t('SndStepP1.1')}</p>
          <Card className="mycard" variant="outlined" p="5">
          <Grid container  alignItems="center" direction="column">
          <img src='/img/01.PNG' alt=''/>
          <h1>{t('SndStepH2.1')}</h1>
          <p>{t('SndStepP2.1')}</p>
          <img src='/img/02.PNG' alt=''/>
          </Grid>
          </Card>
          </Grid>
        </div>
    )
}
