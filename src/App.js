import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoardPage from "./pages/account/dashboard/DashBoardPage";
import InformationEdit from "./pages/account/setting/modules/InformationEdit";
import PasswordEdit from "./pages/account/setting/modules/PasswordEdit";
import LoginPage from "./pages/auth/login/LoginPage";
import ConfirgurationHome from "./pages/configuration/ConfirgurationHome";
import DecisionList from "./pages/configuration/decision/DecisionList";
import Dossier from "./pages/configuration/dossier/Dossier";
import DRT from "./pages/configuration/drt/DRT";
import DelaisDePassage from "./pages/configuration/exams/DelaisDePassage";
import ExamHome from "./pages/configuration/exams/ExamHome";
import SalleDexamen from "./pages/configuration/exams/SalleDexamen";
import Motif from "./pages/configuration/motifs/Motif";
import Pays from "./pages/configuration/pays/Pays";
import Province from "./pages/configuration/pays/Province";
import Profession from "./pages/configuration/profession/Profession";
import Restriction from "./pages/configuration/restriction/Restriction";
import Utilisateur from "./pages/configuration/users/Utilisateur";
import PageNotFoundPage from "./pages/errors/PageNotFoundPage";
import AgrementHome from "./pages/main/autoecole/agrements/AgrementHome";
import AutoEcoleHome from "./pages/main/autoecole/AutoEcoleHome";
import EcoleHome from "./pages/main/autoecole/ecole/EcoleHome";
import LicenceHome from "./pages/main/autoecole/licence/LicenceHome";
import CandidatHome from "./pages/main/candidats/CandidatHome";
import ConversionDossierValide from "./pages/main/dossiers/views/conversion/ConversionDossierValide";
import ConversionList from "./pages/main/dossiers/views/conversion/ConversionList";
import ConversionModifier from "./pages/main/dossiers/views/conversion/ConversionModifier";
import ConversionValidation from "./pages/main/dossiers/views/conversion/ConversionValidation";
import ConversionValider from "./pages/main/dossiers/views/conversion/ConversionValider";
import ConversionVoir from "./pages/main/dossiers/views/conversion/ConversionVoir";
import ConversionApercu from "./pages/main/dossiers/views/conversion/creer/ConversionApercu";
import ConversionStepOne from "./pages/main/dossiers/views/conversion/creer/ConversionStepOne";
import ConversionStepThree from "./pages/main/dossiers/views/conversion/creer/ConversionStepThree";
import ConversionStepTwo from "./pages/main/dossiers/views/conversion/creer/ConversionStepTwo";
import DossierHome from "./pages/main/dossiers/views/DossierHome";
import DuplicataIdCard from "./pages/main/dossiers/views/duplicataIdcard/DuplicataIdCard";
import DuplicataIdCardCreer from "./pages/main/dossiers/views/duplicataIdcard/DuplicataIdCardCreer";
import DuplicataIdCardDossierValides from "./pages/main/dossiers/views/duplicataIdcard/DuplicataIdCardDossierValides";
import DuplicataIdCardEdit from "./pages/main/dossiers/views/duplicataIdcard/DuplicataIdCardEdit";
import DuplicataIdCardValidation from "./pages/main/dossiers/views/duplicataIdcard/DuplicataIdCardValidation";
import DuplicataIdCardValider from "./pages/main/dossiers/views/duplicataIdcard/DuplicataIdCardValider";
import DuplicataIdCardVoir from "./pages/main/dossiers/views/duplicataIdcard/DuplicataIdCardVoir";
import DuplicataApercu from "./pages/main/dossiers/views/duplicatat/creer/DuplicataApercu";
import DuplicataStepOne from "./pages/main/dossiers/views/duplicatat/creer/DuplicataStepOne";
import DuplicataStepTwo from "./pages/main/dossiers/views/duplicatat/creer/DuplicataStepTwo";
import DuplicataDossierValides from "./pages/main/dossiers/views/duplicatat/DuplicataDossierValides";
import DuplicataEdit from "./pages/main/dossiers/views/duplicatat/DuplicataEdit";
import DuplicataList from "./pages/main/dossiers/views/duplicatat/DuplicataList";
import DuplicataValidation from "./pages/main/dossiers/views/duplicatat/DuplicataValidation";
import DuplicataValider from "./pages/main/dossiers/views/duplicatat/DuplicataValider";
import DuplicataVoir from "./pages/main/dossiers/views/duplicatat/DuplicataVoir";
import EchangeApercu from "./pages/main/dossiers/views/echange/creer/EchangeApercu";
import EchangeStepOne from "./pages/main/dossiers/views/echange/creer/EchangeStepOne";
import EchangeStepThree from "./pages/main/dossiers/views/echange/creer/EchangeStepThree";
import EchangeStepTwo from "./pages/main/dossiers/views/echange/creer/EchangeStepTwo";
import EchangeDossierValides from "./pages/main/dossiers/views/echange/EchangeDossierValides";
import EchangeEdit from "./pages/main/dossiers/views/echange/EchangeEdit";
import EchangeList from "./pages/main/dossiers/views/echange/EchangeList";
import EchangeShow from "./pages/main/dossiers/views/echange/EchangeShow";
import EchangeValidation from "./pages/main/dossiers/views/echange/EchangeValidation";
import EchangeValider from "./pages/main/dossiers/views/echange/EchangeValider";
import ExtensionApercu from "./pages/main/dossiers/views/extensions/creer/ExtensionApercu";
import ExtensionCreerStepOne from "./pages/main/dossiers/views/extensions/creer/ExtensionCreerStepOne";
import ExtensionCreerStepTwo from "./pages/main/dossiers/views/extensions/creer/ExtensionCreerStepTwo";
import ExtensionDossierValide from "./pages/main/dossiers/views/extensions/ExtensionDossierValide";
import ExtensionEdit from "./pages/main/dossiers/views/extensions/ExtensionEdit";
import ExtensionList from "./pages/main/dossiers/views/extensions/ExtensionList";
import ExtensionValidation from "./pages/main/dossiers/views/extensions/ExtensionValidation";
import ExtensionValide from "./pages/main/dossiers/views/extensions/ExtensionValide";
import ExtensionVoir from "./pages/main/dossiers/views/extensions/ExtensionVoir";
import NPApercu from "./pages/main/dossiers/views/nouveau_permis/creer/NPApercu";
import NPStepOne from "./pages/main/dossiers/views/nouveau_permis/creer/NPStepOne";
import NPStepThree from "./pages/main/dossiers/views/nouveau_permis/creer/NPStepThree";
import NPStepTwo from "./pages/main/dossiers/views/nouveau_permis/creer/NPStepTwo";
import DossierValide from "./pages/main/dossiers/views/nouveau_permis/DossierValide";
import NouveauPermisEdit from "./pages/main/dossiers/views/nouveau_permis/NouveauPermisEdit";
import NouveauPermisList from "./pages/main/dossiers/views/nouveau_permis/NouveauPermisList";
import NouveauPermisValider from "./pages/main/dossiers/views/nouveau_permis/NouveauPermisValider";
import NouveauPermisVoir from "./pages/main/dossiers/views/nouveau_permis/NouveauPermisVoir";
import ValidationDossier from "./pages/main/dossiers/views/nouveau_permis/ValidationDossier";
import PermisIntlCreate from "./pages/main/dossiers/views/permis_international/PermisIntlCreate";
import PermisIntlDossierValide from "./pages/main/dossiers/views/permis_international/PermisIntlDossierValide";
import PermisIntlEdit from "./pages/main/dossiers/views/permis_international/PermisIntlEdit";
import PermisIntlList from "./pages/main/dossiers/views/permis_international/PermisIntlList";
import PermisIntlShow from "./pages/main/dossiers/views/permis_international/permisIntlShow";
import PermisIntlValidation from "./pages/main/dossiers/views/permis_international/PermisIntlValidation";
import PermisIntlValider from "./pages/main/dossiers/views/permis_international/PermisIntlValider";
import PlainteDossierValide from "./pages/main/dossiers/views/plaintes/PlainteDossierValide";
import PlainteList from "./pages/main/dossiers/views/plaintes/PlainteList";
import PlaintesCreer from "./pages/main/dossiers/views/plaintes/PlaintesCreer";
import PlaintesEdit from "./pages/main/dossiers/views/plaintes/PlaintesEdit";
import PlainteValidation from "./pages/main/dossiers/views/plaintes/PlainteValidation";
import PlainteValider from "./pages/main/dossiers/views/plaintes/PlainteValider";
import PlainteVoir from "./pages/main/dossiers/views/plaintes/PlainteVoir";
import RemplacementApercu from "./pages/main/dossiers/views/remplacement/creer/RemplacementApercu";
import RemplacementStepOne from "./pages/main/dossiers/views/remplacement/creer/RemplacementStepOne";
import RemplacementStepTwo from "./pages/main/dossiers/views/remplacement/creer/RemplacementStepTwo";
import RemplacementDossierValides from "./pages/main/dossiers/views/remplacement/RemplacementDossierValides";
import RemplacementEdit from "./pages/main/dossiers/views/remplacement/RemplacementEdit";
import RemplacementList from "./pages/main/dossiers/views/remplacement/RemplacementList";
import RemplacementShow from "./pages/main/dossiers/views/remplacement/RemplacementShow";
import RemplacementValidation from "./pages/main/dossiers/views/remplacement/RemplacementValidation";
import RemplacementValider from "./pages/main/dossiers/views/remplacement/RemplacementValider";
import RemplacementIdCardCreer from "./pages/main/dossiers/views/remplacementidCard/RemplacementIdCardCreer";
import RemplacementIdCardDossierValides from "./pages/main/dossiers/views/remplacementidCard/RemplacementIdCardDossierValides";
import RemplacementIdCardEdit from "./pages/main/dossiers/views/remplacementidCard/RemplacementIdCardEdit";
import RemplacementIdCardList from "./pages/main/dossiers/views/remplacementidCard/RemplacementIdCardList";
import RemplacementIdCardValidation from "./pages/main/dossiers/views/remplacementidCard/RemplacementIdCardValidation";
import RemplacementIdCardValider from "./pages/main/dossiers/views/remplacementidCard/RemplacementIdCardValider";
import RemplacementIdCardVoir from "./pages/main/dossiers/views/remplacementidCard/RemplacementIdCardVoir";
import ApercuProgrammation from "./pages/main/examens/views/ApercuProgrammation";
import ApercuResultat from "./pages/main/examens/views/ApercuResultat";
import ChoixDesCandidats from "./pages/main/examens/views/ChoixDesCandidats";
import ProgrammationCirculation from "./pages/main/examens/views/circulation/ProgrammationCirculation";
import ResultatCirculation from "./pages/main/examens/views/circulation/ResultatCirculation";
import ProgrammationCode from "./pages/main/examens/views/code/ProgrammationCode";
import ResultatCode from "./pages/main/examens/views/code/ResultatCode";
import ProgrammationCreneau from "./pages/main/examens/views/creneau/ProgrammationCreneau";
import ResultatCreneau from "./pages/main/examens/views/creneau/ResultatCreneau";
import ExamenHome from "./pages/main/examens/views/ExamenHome";
import ListeDesCandidats from "./pages/main/examens/views/ListeDesCandidats";
import Programmation from "./pages/main/examens/views/Programmation";
import Resultat from "./pages/main/examens/views/Resultat";
import ResultatExam from "./pages/main/examens/views/ResultatExam";
import Sujet from "./pages/main/examens/views/Sujet";
import EtatPreview from "./pages/main/examinateurs/views/EtatPreview";
import Examinateur from "./pages/main/examinateurs/views/Examinateur";
import ExaminateurEtats from "./pages/main/examinateurs/views/ExaminateurEtats";
import ExaminateurHome from "./pages/main/examinateurs/views/ExaminateurHome";
import HelpPage from "./pages/main/help/HelpPage";
import HomePage from "./pages/main/home/HomePage";
import IdCardHome from "./pages/main/idcards/IdCardHome";
import PlainteHome from "./pages/main/plaintes/PlainteHome";
import FormationCreer from "./pages/main/questionnaire/formations/FormationCreer";
import FormationEdit from "./pages/main/questionnaire/formations/FormationEdit";
import FormationView from "./pages/main/questionnaire/formations/FormationView";
import QuestionCreer from "./pages/main/questionnaire/questions/QuestionCreer";
import QuestionEdit from "./pages/main/questionnaire/questions/QuestionEdit";
import QuestionView from "./pages/main/questionnaire/questions/QuestionView";
import Formation from "./pages/main/questionnaire/views/Formation";
import House from "./pages/main/questionnaire/views/House";
import Questionnaire from "./pages/main/questionnaire/views/Questionnaire";

function App() {
  return (
    <div className="sigepec-app">
      <Routes>
        <Route exact path="/connexion" element={
          <LoginPage title={'Connexion'}/>
        }/>
        <Route exact path="/" element={
          <HomePage title={'Accueil'}/>
        }/>
        <Route exact path="/mon-compte/parametres" element={
          <InformationEdit title={'Paramètre du compte'}/>
        }/>
        <Route exact path="/mon-compte/parametres/mot-de-passe" element={
          <PasswordEdit title={'Paramètre du compte'}/>
        }/>
        <Route exact path="/mon-compte" element={
          <DashBoardPage title={'Mon tableau de bord'}/>
        }/>
        <Route exact path="/aidez-moi" element={
          <HelpPage title={'Aide'}/>
        }/>
        <Route exact path="/gestion-des-dossiers" element={
          <DossierHome title={'Gestion des dossiers'}/>
        }/>
        {/* Examinateurs */}
        <Route exact path="/gestion-des-examinateurs" element={
          <Examinateur title={'Gestion des examinateurs'}/>
        }/>
        <Route exact path="/gestion-des-examinateurs/liste" element={
          <ExaminateurHome title={'Liste des examinateurs'}/>
        }/>
        <Route exact path="/gestion-des-examinateurs/etats/:slug" element={
          <ExaminateurEtats title={'Les Etats d\'un examinateur'}/>
        }/>
        <Route exact path="/gestion-des-examinateurs/etats/preview/:slug" element={
          <EtatPreview title={'Prévisualisation de l\'Etat d\'un examinateur'}/>
        }/>
        {/* Candidats */}
        <Route exact path="/gestion-des-candidats" element={
          <CandidatHome title={'Gestion des candidats'}/>
        }/>
        {/* Plaintes */}
        <Route exact path="/gestion-des-plaintes" element={
          <PlainteHome title={'Gestion des plaintes'}/>
        }/>
        {/* Questionnaires et Formations */}
        <Route exact path="/gestion-des-questionnaires-et-formations" element={
          <House title={'Gestion des Questionnaires et des Formations'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/questionnaires" element={
          <Questionnaire title={'Les Questionnaires'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/questionnaires/creer" element={
          <QuestionCreer title={'Créer un Questionnaire'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/questionnaire/:slug" element={
          <QuestionView title={'Le questionnaire'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/questionnaire/modifier/:slug" element={
          <QuestionEdit title={'Modification du questionnaire'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/formations" element={
          <Formation title={'Les Formations'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/formations/creer" element={
          <FormationCreer title={'Créer une formation'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/formation/:slug" element={
          <FormationView title={'La formation'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/formation/modifier/:slug" element={
          <FormationEdit title={'Modifier une formation'}/>
        }/>
        <Route exact path="/gestion-des-questionnaires-et-formations/archives" element={
          <House title={'Les archives - Gestion des Questionnaires et des Formations'}/>
        }/>
        {/* Examens */}
        <Route exact path="/gestion-des-examens" element={
          <ExamenHome title={'Gestion des Examens'}/>
        }/>
        <Route exact path="/gestion-des-examens/programmations" element={
          <Programmation title={'Progammations'}/>
        }/>
        <Route exact path="/gestion-des-examens/programmations/apercu" element={
          <ApercuProgrammation title={'Apercu de la programmation'}/>
        }/>
        <Route exact path="/gestion-des-examens/programmations/liste-des-candidats" element={
          <ChoixDesCandidats title={'Liste des candidats programmés'}/>
        }/>
        <Route exact path="/gestion-des-examens/programmation/camdidats/:slug" element={
          <ListeDesCandidats title={'Liste des candidats programmés'}/>
        }/>
        <Route exact path="/gestion-des-examens/programmations/code" element={
          <ProgrammationCode title={'Code - Progammations'}/>
        }/>
        <Route exact path="/gestion-des-examens/programmations/creneaux" element={
          <ProgrammationCreneau title={'Créneaux - Progammations'}/>
        }/>
        <Route exact path="/gestion-des-examens/programmations/circulation" element={
          <ProgrammationCirculation title={'Circulation - Progammations'}/>
        }/>
        <Route exact path="/gestion-des-examens/resultats" element={
          <Resultat title={'Les resultats'}/>
        }/>
        <Route exact path="/gestion-des-examens/resultats/creer" element={
          <ResultatExam title={'Saisir un resultat'}/>
        }/>
        <Route exact path="/gestion-des-examens/resultats/apercu/:slug" element={
          <ApercuResultat title={'Aperçu du resultat'}/>
        }/>
        <Route exact path="/gestion-des-examens/resultat/code" element={
          <ResultatCode title={'Code - Resultats'}/>
        }/>
        <Route exact path="/gestion-des-examens/resultat/circulation" element={
          <ResultatCirculation title={'Circulation - Resultats'}/>
        }/>
        <Route exact path="/gestion-des-examens/resultat/creneaux" element={
          <ResultatCreneau title={'Circulation - Resultats'}/>
        }/>
        <Route exact path="/gestion-des-examens/sujets" element={
          <Sujet title={'Sujets'}/>
        }/>
        {/* Nouveau permis */}
        <Route exact path="/gestion-des-dossiers/nouveaux-permis" element={
          <NouveauPermisList title={'Liste des nouveaux permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/nouveaux-permis" element={
          <DossierValide title={'Liste des dossiers validés'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/nouveaux-permis" element={
          <NPStepOne title={'Créer un dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/nouveaux-permis/:slug" element={
          <NouveauPermisEdit title={'Modifier un dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/nouveaux-permis/:slug" element={
          <NouveauPermisVoir title={'Voir le dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/nouveaux-permis/:slug" element={
          <NouveauPermisValider title={'Valider le dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/nouveaux-permis" element={
          <ValidationDossier title={'Liste des dossiers en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/nouveaux-permis/etape-2" element={
          <NPStepTwo title={'Créer un nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/nouveaux-permis/etape-3" element={
          <NPStepThree title={'Créer un dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/nouveaux-permis/apercu" element={
          <NPApercu title={'Aperçu du dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/extensions" element={
          <ExtensionList title={'Liste des dossiers d\'extension'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/extensions" element={
          <ExtensionCreerStepOne title={'Ajouter un nouveau dossiers d\'extension'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/extensions/etape-2" element={
          <ExtensionCreerStepTwo title={'Ajouter un nouveau dossiers d\'extension'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/extensions/apercu" element={
          <ExtensionApercu title={'Apercu un nouveau dossiers d\'extension'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/extensions/:slug" element={
          <ExtensionVoir title={'Apercu du dossier d\'extension'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/extensions/:slug" element={
          <ExtensionEdit title={'Modification du dossier d\'extension'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/extensions/:slug" element={
          <ExtensionValide title={'Validation du dossier d\'extension'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/extensions" element={
          <ExtensionDossierValide title={'Dossiers d\'extension validés'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/extensions" element={
          <ExtensionValidation title={'Liste des dossiers extension en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/conversions" element={
          <ConversionList title={'Liste des dossiers de conversion'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/conversions/:slug" element={
          <ConversionVoir title={'Apercu du dossier de conversion'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/conversions/:slug" element={
          <ConversionModifier title={'Modification du dossier de conversion'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/conversions/:slug" element={
          <ConversionValider title={'Validation du dossier de conversion'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/conversions" element={
          <ConversionStepOne title={'Créer un dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/conversions/etape-2" element={
          <ConversionStepTwo title={'Créer un dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/conversions/etape-3" element={
          <ConversionStepThree title={'Créer un dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/conversions/apercu" element={
          <ConversionApercu title={'Créer un dossier nouveau permis'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/conversions" element={
          <ConversionValidation title={'Liste des dossiers conversions en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/conversions" element={
          <ConversionDossierValide title={'Dossiers d\'extension validés'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/permis-internationaux" element={
          <PermisIntlList title={'Liste des permis internationaux'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/permis-internationaux" element={
          <PermisIntlCreate title={'Ajouter un permis international'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/permis-internationaux/:slug" element={
          <PermisIntlEdit title={'Modification  d\'un permis international'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/permis-internationaux/:slug" element={
          <PermisIntlShow title={'Aperçu d\'un permis international'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/permis-internationaux/:slug" element={
          <PermisIntlValidation title={'Validation d\'un permis international'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/permis-internationaux/" element={
          <PermisIntlValider title={'Liste des permis internationaux en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/permis-internationaux/" element={
          <PermisIntlDossierValide title={'Liste des permis internationaux validés'}/>
        }/>

        <Route exact path="/gestion-des-dossiers/remplacement" element={
          <RemplacementList title={'Liste des dossiers remplacement'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/remplacement" element={
          <RemplacementStepOne title={'Ajouter un dossier remplacement'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/remplacement/etape-2" element={
          <RemplacementStepTwo title={'Ajouter un dossier remplacement'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/remplacement/apercu" element={
          <RemplacementApercu title={'Ajouter un dossier remplacement'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/remplacement/:slug" element={
          <RemplacementShow title={'Apercu du dossier remplacement'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/remplacement/:slug" element={
          <RemplacementEdit title={'Modification du dossier remplacement'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/remplacement/:slug" element={
          <RemplacementValider title={'Validation du dossier remplacement'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/remplacement" element={
          <RemplacementValidation title={'Liste des dossiers remplacement en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/remplacement/" element={
          <RemplacementDossierValides title={'Liste des dossiers remplacement validés'}/>
        }/>

        <Route exact path="/gestion-des-dossiers/duplicata" element={
          <DuplicataList title={'Liste des dossiers duplicata'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/duplicata" element={
          <DuplicataStepOne title={'Ajouter un dossier duplicata'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/duplicata/etape-2" element={
          <DuplicataStepTwo title={'Ajouter un dossier duplicata'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/duplicata/apercu" element={
          <DuplicataApercu title={'Ajouter un dossier duplicata'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/duplicata/:slug" element={
          <DuplicataVoir title={'Apercu du dossier duplicata'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/duplicata/:slug" element={
          <DuplicataEdit title={'Modification du dossier duplicata'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/duplicata/:slug" element={
          <DuplicataValider title={'Validation du dossier duplicata'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/duplicata" element={
          <DuplicataValidation title={'Liste des dossiers duplicata en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/duplicata/" element={
          <DuplicataDossierValides title={'Liste des dossiers duplicata validés'}/>
        }/>

        <Route exact path="/gestion-des-dossiers/echange" element={
          <EchangeList title={'Liste des dossiers echange'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/echange" element={
          <EchangeStepOne title={'Ajouter un dossier d\'échange'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/echange/etape-2" element={
          <EchangeStepTwo title={'Ajouter un dossier d\'échange'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/echange/etape-3" element={
          <EchangeStepThree title={'Ajouter un dossier d\'échange'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/echange/apercu" element={
          <EchangeApercu title={'Ajouter un dossier d\'échange'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/echange/:slug" element={
          <EchangeEdit title={'Modification du dossier d\'échange'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/echange/:slug" element={
          <EchangeShow title={'Apercu du dossier d\'échange'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/echange/:slug" element={
          <EchangeValider title={'Validation du dossier d\'échange'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/echange" element={
          <EchangeValidation title={'Liste des dossiers d\'échange en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/echange/" element={
          <EchangeDossierValides title={'Liste des dossiers d\'échange validés'}/>
        }/>

        <Route exact path="/gestion-des-dossiers/plaintes" element={
          <PlainteList title={'Liste des dossiers de plaintes'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/plaintes" element={
          <PlaintesCreer title={'Ajouter un dossier de plainte'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/plaintes/:slug" element={
          <PlaintesEdit title={'Modification du dossier de plainte'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/plaintes/:slug" element={
          <PlainteVoir title={'Apercu du dossier de plainte'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/plaintes/:slug" element={
          <PlainteValider title={'Validation du dossier de plainte'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/plaintes" element={
          <PlainteValidation title={'Liste des dossiers de plaintes en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/plaintes/" element={
          <PlainteDossierValide title={'Liste des dossiers de plaintes validés'}/>
        }/>
  
        <Route exact path="/gestion-des-dossiers/duplicata-idcard" element={
          <DuplicataIdCard title={'Liste des dossiers de duplicata idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/duplicata-idcard" element={
          <DuplicataIdCardCreer title={'Ajouter un dossier de duplicata idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/duplicata-idcard/:slug" element={
          <DuplicataIdCardEdit title={'Modification du dossier de duplicata idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/duplicata-idcard/:slug" element={
          <DuplicataIdCardVoir title={'Aperçu du dossier de duplicata idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/duplicata-idcard/:slug" element={
          <DuplicataIdCardValider title={'Aperçu du dossier de duplicata idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/duplicata-idcard" element={
          <DuplicataIdCardValidation title={'Liste des dossiers de duplicata Idcard en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/duplicata-idcard/" element={
          <DuplicataIdCardDossierValides title={'Liste des dossiers de duplicata idcard validés'}/>
        }/>
  
        <Route exact path="/gestion-des-dossiers/remplacement-idcard" element={
          <RemplacementIdCardList title={'Liste des dossiers de remplacement idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/creer/remplacement-idcard" element={
          <RemplacementIdCardCreer title={'Ajouter un dossier de remplacement idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/modifier/remplacement-idcard/:slug" element={
          <RemplacementIdCardEdit title={'Modification du dossier de remplacement idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/voir/remplacement-idcard/:slug" element={
          <RemplacementIdCardVoir title={'Apercu du dossier de remplacement idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/valider/remplacement-idcard/:slug" element={
          <RemplacementIdCardValider title={'Validation du dossier de remplacement idcard'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/validation-de-dossier/remplacement-idcard" element={
          <RemplacementIdCardValidation title={'Liste des dossiers de remplacement Idcard en attente de validation'}/>
        }/>
        <Route exact path="/gestion-des-dossiers/dossiers-valides/remplacement-idcard/" element={
          <RemplacementIdCardDossierValides title={'Liste des dossiers de remplacement idcard validés'}/>
        }/>

        {/* IdCards */}
        <Route exact path="/gestion-des-idcards" element={
          <IdCardHome title={'Gestions des idCards'}/>
        }/>
        {/* Auto Ecole */}

        <Route exact path="/gestion-des-autoecoles" element={
          <AutoEcoleHome title={'Gestion des AutoEcoles'}/>
        }/>
        <Route exact path="/gestion-des-autoecoles/licences" element={
          <LicenceHome title={'Gestion des Licences'}/>
        }/>
        <Route exact path="/gestion-des-autoecoles/agrements" element={
          <AgrementHome title={'Gestion des Agrements'}/>
        }/>
        <Route exact path="/gestion-des-autoecoles/vtm" element={
          <EcoleHome title={'Gestion des VTM'}/>
        }/>
        {/* Configuration */}
        <Route exact path="/configuration" element={
          <ConfirgurationHome title={'Configuration'}/>
        }/>
        <Route exact path="/configuration/drt" element={
          <DRT title={'Configuration des DRT'}/>
        }/>
        <Route exact path="/configuration/utilisateurs" element={
          <Utilisateur title={'Configuration des Utilisateurs'}/>
        }/>
        <Route exact path="/configuration/decisions" element={
          <DecisionList title={'Configuration des Décisions'}/>
        }/>
        <Route exact path="/configuration/motifs" element={
          <Motif title={'Configuration des Motifs'}/>
        }/>
        <Route exact path="/configuration/restrictions" element={
          <Restriction title={'Configuration des Restrictions'}/>
        }/>
        <Route exact path="/configuration/pays" element={
          <Pays title={'Configuration des Pays'}/>
        }/>
        <Route exact path="/configuration/provinces" element={
          <Province title={'Configuration des Provinces'}/>
        }/>

        <Route exact path="/configuration/professions" element={
          <Profession title={'Configuration des Professions'}/>
        }/>
        <Route exact path="/configuration/examens" element={
          <ExamHome title={'Configuration des Examens'}/>
        }/>
        <Route exact path="/configuration/dossiers" element={
          <Dossier title={'Configuration des Dossiers'}/>
        }/>
        <Route exact path="/configuration/examens/delais-de-passage" element={
          <DelaisDePassage title={'Configuration des Délais de passage'}/>
        }/>
        <Route exact path="/configuration/examens/salles" element={
          <SalleDexamen title={'Configuration des Salles d\'examen'}/>
        }/>

        <Route path="/*" element={<PageNotFoundPage title={'404'}/>} />
      </Routes>
    </div>
  );
}

export default App;
