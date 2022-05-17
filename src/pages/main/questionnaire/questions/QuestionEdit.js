import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddIcon from '../../../../assets/icons/AddIcon';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import FilmIcon from '../../../../assets/icons/FilmIcon';
import ImageIcon from '../../../../assets/icons/ImageIcon';
import TrashIcon from '../../../../assets/icons/TrashIcon';
import FormBtn from '../../../../components/button/FormBtn';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import FileField from '../../../../components/input/FileField';
import MultiSelectField from '../../../../components/input/MultiSelectField';
import NormalTextField from '../../../../components/input/NormalTextField';
import SelectField from '../../../../components/input/SelectField';
import QuestionnaireLayout from '../QuestionnaireLayout';

const QuestionEdit = ({title}) => {
    let slug = useParams();
    const [categories, setCategories] = useState('');
    const [quesC, setQuesC] = useState(false);
    const [quesD, setQuesD] = useState(false);
    const [ques2, setQues2] = useState(false);
    const [intro, setIntro] = useState(true);
    const [titre, setTitre] = useState(true);
    const [level1, setLevel1] = useState(true);

    let optionTheme = [
        {
            label: 'Theme 1',
            value: 'theme-1',
        },
        {
            label: 'Theme 2',
            value: 'theme-2',
        },
        {
            label: 'Theme 3',
            value: 'theme-3',
        },
        {
            label: 'Theme 4',
            value: 'theme-4',
        },
        {
            label: 'Theme 5',
            value: 'theme-5',
        },
        {
            label: 'Theme 6',
            value: 'theme-6',
        },
    ];
    let optionCategorie = [
        {
            label: 'Categorie 1',
            value: 'categorie-1',
        },
        {
            label: 'Categorie 2',
            value: 'categorie-2',
        },
        {
            label: 'Categorie 3',
            value: 'categorie-3',
        },
        {
            label: 'Categorie 4',
            value: 'categorie-4',
        },
        {
            label: 'Categorie 5',
            value: 'categorie-5',
        },
        {
            label: 'Categorie 6',
            value: 'categorie-6',
        },
    ]
    const [theme, setTheme] = useState('');
    const [fr, setFr] = useState('');
    const [douala, setDouala] = useState('');
    const [moore, setMoore] = useState('');
    const [foufoulde, setFoulfoude] = useState('');
    const [image, setImage] = useState('');
    const [response1, setResponse1] = useState('');
    const [response2, setResponse2] = useState('');
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
    const changeTheme = (value) => {
        setTheme(value)
    }

    const changeImage = (e) => {
        const [file] = e.target.files;
        document.getElementById("imageI").src = URL.createObjectURL(file)
        // console.log(file)
        setImage(e.target.files)
    }
    const changeCategories = (value) => {
        setCategories(value)
    }
    const appearChoice = () =>{
        document.querySelector('.sigepec-module-add-questionnaire-mark__type').classList.toggle('appear')
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
    const addQuesC = () => {
        if(quesC){
            setQuesC(false)
        }else{
            setQuesC(true)
        }
    }
    const addIntro = () => {
        if(intro){
            setIntro(false)
        }else{
            setIntro(true)
        }
    }
    const addTitre = () => {
        if(titre){
            setTitre(false)
        }else{
            setTitre(true)
        }
    }
    const addLevel1 = () => {
        if(level1){
            setLevel1(false)
        }else{
            setLevel1(true)
        }
    }
    const addQuesD = () => {
        if(quesD){
            setQuesD(false)
        }else{
            setQuesD(true)
        }
    }
    const addQues2 = () => {
        if(ques2){
            setQues2(false)
            setQuesC(false)
            setQuesD(false)
        }else{
            setQues2(true)
            setQuesC(true)
            setQuesD(true)
        }
    }
    const isResponse1 = (val) => {
        setResponse1(val)
    }
    const isResponse2 = (val) => {
        // if(){}
        setResponse2(val);
    }
    return (
        
        <QuestionnaireLayout title={title} here='question'>
            <FileDarianne actuel={'Modification d\'un questionnaire'}>
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
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Modifier un questionnaire</h2>
                </div>
                <form className='is--large'>

                <div className='sigepec-module-add is--large has--flex_between'>
                    <div className='sigepec-module-add__step2'>
                        <div className="sigepec-module-add-step is--large">
                            <h2>Catégorie du questionnaire</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add-step__checkbox is--large has--flex has--wrap'>
                                <MultiSelectField id={'categorie'} dvalue={categories} label={'Catégories du questionnaire'} options={optionCategorie} tooltip={'Choisir les catégories du questionnaire'} fnc={changeCategories}>
                                    Choisir les catégories du questionnaire
                                </MultiSelectField>
                            </div>
                        </div>
                        <div className="sigepec-module-add-step is--large">
                            <h2>Thème</h2>
                            <div className='sigepec-h-bar'></div>
                            <SelectField id={'theme'} dvalue={theme} label={'Thème du questionnaire'} options={optionTheme} tooltip={'Choisir le thème du questionnairet'} fnc={changeTheme}>
                                Choisir le thème du questionnaire
                            </SelectField>
                        </div>
                        <div className="sigepec-module-add-step is--large">
                           <div className='sigepec-field__largefile is--large'>
                               <div className="sigepec-field-largefile__result">
                                    <img src="#" alt="" id='imageI' />
                               </div>
                               <div className="sigepec-field-largefile__action">
                                    <div className="sigepec-field-largefile-actions has--flex">
                                        <div className="sigepec-field-largefile-action">
                                            <input type="file" id='image' accept='.jpg,.png,.jpeg' onChange={changeImage} required/>
                                            <label htmlFor="video">
                                                <ImageIcon/>
                                                <span>Ajouter une image</span>
                                            </label>
                                        </div>
                                        <div className="sigepec-field-largefile-action">
                                            <input type="file" id='video' accept='' required/>
                                            <label htmlFor="video">
                                                <FilmIcon/>
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
                        <h2>Le questionnaire</h2>
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
                            <h3>Information questionnaire</h3>
                            
                            {
                                titre ? (
                                    <div className='sigepec-module-add-questionnaire has--flex_between'>
                                        <div className='sigepec-module-add-questionnaire__textfield'>
                                            <NormalTextField value={''} id={'titre'} type={'text'} label={'Titre du questionnaire (facultatif)'} facultatif={true} tooltip={''} fnc={''}>
                                                Entrer le titre du questionnaire
                                            </NormalTextField>
                                        </div>
                                        <button className='sigepec-module-add-questionnaire__button' type='button' onClick={() => {addTitre()}}>
                                            <TrashIcon/>
                                        </button>
                                    </div>
                                ) : ("")
                            }
                            {
                                intro ? (
                                    <div className='sigepec-module-add-questionnaire has--flex_between'>
                                        <div className='sigepec-module-add-questionnaire__textfield'>
                                            <NormalTextField value={''} id={'intro'} type={'text'} label={'Introduction générale (facultatif)'} facultatif={true} tooltip={''} fnc={''}>
                                                Entrer l'introduction générale
                                            </NormalTextField>
                                        </div>
                                        <button className='sigepec-module-add-questionnaire__button' type='button'  onClick={() => {addIntro()}}>
                                            <TrashIcon/>
                                        </button>
                                    </div>
                                ) : ("")
                            }
                            <div className='sigepec-module-add-questionnaire has--flex_between'>
                                <div className='sigepec-module-add-questionnaire__textfield'>
                                    <NormalTextField value={''} id={'niveau1'} type={'text'} label={'Texte de Niveau 1'} facultatif={false} tooltip={''} fnc={''}>
                                        Entrer le texte de Niveau 1
                                    </NormalTextField>
                                </div>
                            </div>
                            {
                                level1 ? (
                                    <div className='sigepec-module-add-questionnaire has--flex_between'>
                                        <div className='sigepec-module-add-questionnaire__textfield'>
                                            <NormalTextField value={''} id={'niveau2'} type={'text'} label={'Texte de Niveau 2 (facultatif)'} facultatif={true} tooltip={''} fnc={''}>
                                                Entrer le texte de Niveau 2
                                            </NormalTextField>
                                        </div>
                                        <button className='sigepec-module-add-questionnaire__button' type='button'  onClick={() => {addLevel1()}}>
                                            <TrashIcon/>
                                        </button>
                                    </div>
                                ) : ("")
                            }
                            <div className='sigepec-module-add-questionnaire has--flex_between'>
                                <div className='sigepec-module-add-questionnaire__textfield'>
                                    <NormalTextField value={''} id={'proposition1'} type={'text'} label={'Proposition de reponse A'} tooltip={''} fnc={''}>
                                        Entrer la proposition de reponse A
                                    </NormalTextField>
                                </div>
                                <button className='sigepec-module-add-questionnaire__button is--correct' type='button' onClick={() => {isResponse1('a')}}>
                                    <CheckIcon/>
                                </button>
                            </div>
                            <div className='sigepec-module-add-questionnaire has--flex_between'>
                                <div className='sigepec-module-add-questionnaire__textfield'>
                                    <NormalTextField value={''} id={'proposition2'} type={'text'} label={'Proposition de reponse B'} tooltip={''} fnc={''}>
                                        Entrer la proposition de reponse B
                                    </NormalTextField>
                                </div>
                                <button className='sigepec-module-add-questionnaire__button is--correct' type='button' onClick={() => {isResponse1('b')}}>
                                    <CheckIcon/>
                                </button>
                            </div>
                            {
                                ques2 ? (
                                    <div className='sigepec-module-add-questionnaire has--flex_between'>
                                        <div className='sigepec-module-add-questionnaire__textfield'>
                                            <NormalTextField value={''} id={'niveau3'} type={'text'} label={'Texte de Niveau 2 (facultatif)'} facultatif={true} tooltip={''} fnc={''}>
                                                Entrer le texte de Niveau 2
                                            </NormalTextField>
                                        </div>
                                        <button className='sigepec-module-add-questionnaire__button' type='button' onClick={() => {addQues2()}}>
                                            <TrashIcon/>
                                        </button>
                                    </div>
                                ) : ("")
                            }
                            
                            {
                                quesC ? (
                                    <div className='sigepec-module-add-questionnaire  has--flex_between'>
                                        <div className={`sigepec-module-add-questionnaire__textfield ${(ques2 || quesD) ? "" : "type2"} `}>
                                            <NormalTextField value={''} id={'proposition3'} type={'text'} label={'Proposition de reponse C'} tooltip={''} fnc={''}>
                                                Entrer la proposition de reponse C
                                            </NormalTextField>
                                        </div>
                                        <button className='sigepec-module-add-questionnaire__button is--correct' type='button'>
                                            <CheckIcon/>
                                        </button>
                                        {
                                            (!ques2 && !quesD) ? (

                                                <button className='sigepec-module-add-questionnaire__button' type='button' onClick={() => {addQuesC()}}>
                                                    <TrashIcon/>
                                                </button>
                                            ) : ("")
                                        }
                                    </div>
                                ) : (
                                    ""
                                )
                            }
                            {
                                quesD ? (

                                    <div className='sigepec-module-add-questionnaire  has--flex_between'>
                                        <div className={`sigepec-module-add-questionnaire__textfield ${ques2 ? "" : "type2"} `}>
                                            <NormalTextField value={''} id={'proposition4'} type={'text'} label={'Proposition de reponse D'} tooltip={''} fnc={''}>
                                                Entrer la proposition de reponse D
                                            </NormalTextField>
                                        </div>
                                        <button className='sigepec-module-add-questionnaire__button is--correct' type='button'>
                                            <CheckIcon/>
                                        </button>
                                        {
                                            !ques2 ? (

                                                <button className='sigepec-module-add-questionnaire__button' type='button' onClick={() => {addQuesD()}}>
                                                    <TrashIcon/>
                                                </button>
                                            ) : ("")
                                        }
                                    </div>
                                ) : ("")
                            }
                            {
                                (!ques2 && !quesD) ? (
                                    <div className='sigepec-module-add-questionnaire__mark'>
                                        <div className='sigepec-module-add-questionnaire-mark'>
                                            <button type='button' className='sigepec-module-add-questionnaire-mark' onClick={() => {appearChoice()}}>
                                                <AddIcon/>
                                            </button>
                                        </div>
                                        <div className='sigepec-module-add-questionnaire-mark__type'>
                                            <ul className="sigepec-module-add-questionnaire-mark-list">
                                                {
                                                    !titre ? (
                                                        <li className="sigepec-module-add-questionnaire-mark-item">
                                                            <button type='button' onClick={() => {addTitre()}}>
                                                                Ajouter un titre
                                                            </button>
                                                        </li>
                                                    ) : ("")
                                                }
                                                {
                                                    !intro ? (
                                                        <li className="sigepec-module-add-questionnaire-mark-item">
                                                            <button type='button' onClick={() => {addIntro()}}>
                                                                Ajouter une introduction générale
                                                            </button>
                                                        </li>
                                                    ) : ("")
                                                }
                                                {
                                                    !level1 ? (
                                                        <li className="sigepec-module-add-questionnaire-mark-item">
                                                            <button type='button' onClick={() => {addLevel1()}}>
                                                                Ajouter un niveau à la première question
                                                            </button>
                                                        </li>
                                                    ) : ("")
                                                }
                                                {
                                                    !quesC && !ques2 ? (
                                                        <li className="sigepec-module-add-questionnaire-mark-item">
                                                            <button type='button' onClick={() => {addQuesC()}}>
                                                                Ajouter une reponse (la reponse C)
                                                            </button>
                                                        </li>
                                                    ) : ("")
                                                }
                                            
                                                {
                                                    (quesC && !quesD) ? (
        
                                                        <li className="sigepec-module-add-questionnaire-mark-item">
                                                            <button type='button' onClick={() => {addQuesD()}}>
                                                                Ajouter une reponse (la reponse D)
                                                            </button>
                                                        </li>
                                                    ) : ("")
                                                }
                                                {
                                                    (!quesC && !ques2) ? (
                                                        
                                            
                                                    <li className="sigepec-module-add-questionnaire-mark-item" onClick={() => {addQues2()}}>
                                                        <button type='button'>
                                                            Ajouter une nouvelle question
                                                        </button>
                                                    </li>
                                                    ) : ("")
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ) : ("")
                            }
                        </div>

                        <div className='sigepec-module-add-form__action has--flex'>
                            <FormBtn type={'reset'} style={'is--large'}>
                                Annuler
                            </FormBtn>
                            <button type="button" className='sigepec-btn is--secondary is--large'>
                               Voir un aperçu
                            </button>
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

export default QuestionEdit;