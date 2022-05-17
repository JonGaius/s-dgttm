import React from 'react';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import AutoEcoleLayout from '../AutoEcoleLayout';

const AgrementHome = ({title}) => {
    return (
        <AutoEcoleLayout title={title} here={'agrements'}>
            <FileDarianne actuel={'Gestion des agréments'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-autoecoles'}>
                    Gestion des auto-écoles
                </OldFileDariane>
            </FileDarianne>
            
        </AutoEcoleLayout>
    );
};

export default AgrementHome;