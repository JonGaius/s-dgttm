import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddIcon from '../../../../assets/icons/AddIcon';
import FormBtn from '../../../../components/button/FormBtn';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import FileField from '../../../../components/input/FileField';
import NormalTextField from '../../../../components/input/NormalTextField';
import QuestionnaireLayout from '../QuestionnaireLayout';

const FormationEdit = ({title}) => {
    let slug = useParams();
    const [image, setImage] = useState('');
    const [fr, setFr] = useState('');
    const [douala, setDouala] = useState('');
    const [moore, setMoore] = useState('');
    const [foufoulde, setFoulfoude] = useState('');
    const changeFr = (value) => {
        setFr(value)
    }
    const changeDouala = (value) => {
        setDouala(value)
    }
    const changeMoore = (value) => {
        setMoore(value)
    }
    const changeFoulfoude = (value) => {
        setFoulfoude(value)
    }
    const changeImage = (e) => {
        const [file] = e.target.files;
        document.getElementById("imageI").src = URL.createObjectURL(file)
        // console.log(file)
        setImage(e.target.files)
    }
    const handleChangeRadio = (e) => {
        let id = e.target.getAttribute('id');
      
        switch (id) {
            case 'level-1':
                document.querySelector('.sigepec-level__star label#label-level-1').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-2').classList.remove('select');
                document.querySelector('.sigepec-level__star label#label-level-3').classList.remove('select');
                document.querySelector('.sigepec-level__star label#label-level-4').classList.remove('select');
                document.querySelector('.sigepec-level__star label#label-level-5').classList.remove('select');
                break;

            case 'level-2':
                document.querySelector('.sigepec-level__star label#label-level-1').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-2').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-3').classList.remove('select');
                document.querySelector('.sigepec-level__star label#label-level-4').classList.remove('select');
                document.querySelector('.sigepec-level__star label#label-level-5').classList.remove('select');
                break;

            case 'level-3':
                document.querySelector('.sigepec-level__star label#label-level-1').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-2').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-3').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-4').classList.remove('select');
                document.querySelector('.sigepec-level__star label#label-level-5').classList.remove('select');
                break;

            case 'level-4':
                // document.querySelector('.sigepec-level__star label').classList.remove('select');
                document.querySelector('.sigepec-level__star label#label-level-1').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-2').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-3').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-4').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-5').classList.remove('select');
                break;

            case 'level-5':
                document.querySelector('.sigepec-level__star label#label-level-1').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-2').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-3').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-4').classList.add('select');
                document.querySelector('.sigepec-level__star label#label-level-5').classList.add('select');
                break;
        
            default:
                break;
        }
    }

    return (
        
        <QuestionnaireLayout title={title} here='formation'>
            <FileDarianne actuel={'Modification d\'une formation'}>
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
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Modifier une formation</h2>
                </div>
                <form className='is--large'>
                    <div className='sigepec-module-add is--large has--flex_between'>
                        <div className='sigepec-module-add__step2'>
                            <div className="sigepec-module-add-step is--large">
                                <div className='sigepec-field__largefile is--large'>
                                    <div className="sigepec-field-largefile__result">
                                        <img src="#" alt="" id='imageI' />
                                    </div>
                                    <div className="sigepec-field-largefile__action">
                                            <div className="sigepec-field-largefile-actions has--flex">
                                                <div className="sigepec-field-largefile-action">
                                                    <input type="file" id='image' accept='.jpeg,.png,.jpg' required onChange={changeImage}/>
                                                    <label htmlFor="video">
                                                        <AddIcon/>
                                                        <span>Ajouter une image</span>
                                                    </label>
                                                </div>
                                                <div className="sigepec-field-largefile-action">
                                                    <input type="file" id='video' accept='' required/>
                                                    <label htmlFor="video">
                                                        <AddIcon/>
                                                        <span>Ajouter une video</span>
                                                    </label>
                                                </div>
                                            </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="sigepec-module-add-step is--large">
                                <h2>Audio</h2>
                                <div className='sigepec-h-bar'></div>
                                <div className="sigepec-module-add-form__container is--large has--flex">
                                    <FileField id={'french'} dvalue={fr} accept={''} fnc={changeFr}>
                                        Audio Français
                                    </FileField>
                                    <FileField id={'moore'} dvalue={moore} accept={''} fnc={changeMoore}>
                                        Audio Mooré
                                    </FileField>
                                    <FileField id={'douala'} dvalue={douala} accept={''} fnc={changeDouala}>
                                        Audio Douala
                                    </FileField>
                                    <FileField id={'foulfoude'} dvalue={foufoulde} accept={''} fnc={changeFoulfoude}>
                                        Audio Foufouldè
                                    </FileField>
                                </div>
                            </div>
                        </div>
                        <div className='sigepec-module-add__form2'>
                            <h2>La formation</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add__level has--flex_between is--large'>
                                <span>Niveau de difficulté</span>
                                <div>
                                    <div className='sigepec-level has--flex'>
                                        <div className='sigepec-level__star'>
                                            <input type="radio" name='level' id='level-1' onChange={handleChangeRadio}/>
                                            <label className='sigepec-level-star' htmlFor='level-1' id='label-level-1'></label>
                                        </div>
                                        <div className='sigepec-level__star'>
                                            <input type="radio" name='level' id='level-2' onChange={handleChangeRadio}/>
                                            <label className='sigepec-level-star' htmlFor='level-2' id='label-level-2'></label>
                                        </div>
                                        <div className='sigepec-level__star'>
                                            <input type="radio" name='level' id='level-3' onChange={handleChangeRadio}/>
                                            <label className='sigepec-level-star' htmlFor='level-3' id='label-level-3'></label>
                                        </div>
                                        <div className='sigepec-level__star'>
                                            <input type="radio" name='level' id='level-4' onChange={handleChangeRadio}/>
                                            <label className='sigepec-level-star' htmlFor='level-4' id='label-level-4'></label>
                                        </div>
                                        <div className='sigepec-level__star'>
                                            <input type="radio" name='level' id='level-5' onChange={handleChangeRadio}/>
                                            <label className='sigepec-level-star' htmlFor='level-5' id='label-level-5'></label>
                                        </div>
                                    </div>
                                    <div className='sigepec-level__text has--flex_between'>
                                        <span>Facile</span>
                                        <span>Difficile</span>
                                    </div>
                                </div>
                            </div>
                            <div className='sigepec-module-add__questionnaire is--large'>
                                <div className='sigepec-module-add-questionnaire has--flex_between'>
                                    <NormalTextField value={''} id={'titre'} type={'text'} label={'Titre du questionnaire'} tooltip={''} fnc={''}>
                                        Entrer le titre de la formation
                                    </NormalTextField>
                                </div>
                                <div className='sigepec-module-add-questionnaire has--flex_between'>
                                    <NormalTextField value={''} id={'titre'} type={'text'} label={'Tags'} tooltip={''} fnc={''}>
                                        Entrer les tags de la formation
                                    </NormalTextField>
                                </div>
                            </div>

                            <div className='sigepec-module-add-form__action has--flex'>
                                <FormBtn type={'reset'} style={'is--large'}>
                                    Annuler
                                </FormBtn>
                                <FormBtn type={'submit'} style={'is--primary is--large'}>
                                Enrégistrer
                                </FormBtn>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </QuestionnaireLayout>
    );
};

export default FormationEdit;