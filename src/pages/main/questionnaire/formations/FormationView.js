import React from 'react';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import QuestionnaireLayout from '../QuestionnaireLayout';

const FormationView = ({title}) => {
    return (
        <QuestionnaireLayout title={title} here='formation'>
            <FileDarianne actuel={'Aperçu d\'une formation'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-questionnaires-et-formations'}>
                    Gestion des formations et questionnaires
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-questionnaires-et-formations/formations'}>
                    Gestion des formations
                </OldFileDariane>
            </FileDarianne>
        </QuestionnaireLayout>
    );
};

export default FormationView;