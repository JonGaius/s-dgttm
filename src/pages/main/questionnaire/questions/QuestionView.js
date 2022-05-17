import React from 'react';
import { useParams, Link } from 'react-router-dom';
import QuestionnaireLayout from '../QuestionnaireLayout';
import image from '../../../../assets/images/pexels-ron-lach-9518019.jpg'
import CheckIcon from '../../../../assets/icons/CheckIcon';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import EditIcon from '../../../../assets/icons/EditIcon';
import SavedIcon from '../../../../assets/icons/SavedIcon';
import TrashIcon from '../../../../assets/icons/TrashIcon';

const QuestionView = ({title}) => {
    let slug = useParams();
    
    return (
        <QuestionnaireLayout title={title} here='question'>
            <FileDarianne actuel={'Aperçu d\'un questionnaire'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-questionnaires-et-formations'}>
                    Gestion des formations et questionnaires
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-questionnaires-et-formations/questionnaires'}>
                    Gestion des questionnaires
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                <h2>Voir un questionnaire</h2>
            </div>
                <div className='sigepec-module-add is--large has--flex_between'>
                    <div className='sigepec-module-add__step3'>
                        <div className="sigepec-module-add-step is--large">
                            <div className='sigepec-field__largefile2 is--large'>
                                <img src={image} alt="" />
                            </div> 
                        </div> 
                        <div className="sigepec-module-add-step is--large">
                            <h2>Audio</h2>
                            <div className='sigepec-h-bar'></div>
                        </div>
                    </div>
                    <div className='sigepec-module-add__form3'>
                        <div className="sigepec-module-add-step is--large">
                            <h2>Le questionnaire</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add__level has--flex_between is--large'>
                                <span>Niveau de difficulté</span>
                                <div>
                                    <div className='sigepec-level has--flex'>
                                        <div className='sigepec-level__star'>
                                            <div className='sigepec-level-star select' id='label-level-1'></div>
                                        </div>
                                        <div className='sigepec-level__star'>
                                            <div className='sigepec-level-star select' id='label-level-2'></div>
                                        </div>
                                        <div className='sigepec-level__star'>
                                            <div className='sigepec-level-star select' id='label-level-3'></div>
                                        </div>
                                        <div className='sigepec-level__star'>
                                            <div className='sigepec-level-star select' id='label-level-4'></div>
                                        </div>
                                        <div className='sigepec-level__star'>
                                            <div className='sigepec-level-star' id='label-level-5'></div>
                                        </div>
                                    </div>
                                    <div className='sigepec-level__text has--flex_between'>
                                        <span>Facile</span>
                                        <span>Difficile</span>
                                    </div>
                                </div>
                            </div>
                            <div className='sigepec-module-add-step__checkbox is--large has--flex has--wrap'>
                                <strong>Catégorie 1,</strong>
                                <strong>Catégorie 2,</strong>
                                <strong>Catégorie 3,</strong>
                                <strong>Catégorie 4</strong>
                            </div>
                            <div className='sigepec-module-show-questionnaire'>
                                <h1>Titre de la question</h1> 
                                <strong>Introduction générale</strong> 
                                <div className='sigepec-module-show-questionnaire__question'>
                                    <span>Texte niveau 1</span>
                                    <div className='sigepec-module-show-questionnaire-question'>
                                        <span>Texte niveau 2</span>
                                        <div className='sigepec-module-show-questionnaire-propals is--large has--flex'>
                                            <div className='sigepec-module-show-questionnaire-propal has--flex'>
                                                <strong>A</strong> <span>Propal 1 (correct)</span>
                                            </div>
                                            <div className='sigepec-module-show-questionnaire-propal has--flex'>
                                                <strong>B</strong> <span>Propal 2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sigepec-module-show-questionnaire-question'>
                                        <span>Texte niveau 2</span>
                                        <div className='sigepec-module-show-questionnaire-propals is--large has--flex'>
                                            <div className='sigepec-module-show-questionnaire-propal has--flex'>
                                                <strong>C</strong> <span>Propal 3</span>
                                            </div>
                                            <div className='sigepec-module-show-questionnaire-propal has--flex'>
                                                <strong>D</strong> <span>Propal 4 (correct)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="sigepec-module-add-step is--large">
                            <h2>Actions</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add-files'>
                                <Link to={`/gestion-des-questionnaires-et-formations/questionnaire/modifier/${slug.slug}`} className="sigepec-module-list__action is--large has--flex">
                                    <EditIcon/> <span>Modifier le questionnaire</span>
                                </Link>
                                <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                    <CheckIcon/> <span>Associer le questionnaire à un autre</span>
                                </button>
                                <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                    <CheckIcon/> <span>Valider le questionnaire</span>
                                </button>
                                <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                    <SavedIcon/> <span>Archiver le questionnaire</span>
                                </button>
                                <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                    <TrashIcon/> <span>Supprimer le questionnaire</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </QuestionnaireLayout>
    );
}

export default QuestionView;