var WaJsVariable = {};
WaJsVariable.form_post_url="wa_php/comp/{{waId}}/form_post.php";
WaJsVariable.search_index_filename="wa_js/waSearchIndex_{{lang}}.js";
var WaPageContext = {};
var WaContext = {};
var WaTranslator = {};
var WaIdContext = 10044622;
WaTranslator.tr = function(key) 
{ 
    return (this.messages[key]!=undefined)?this.messages[key]:'*'+key+'*';
}; 
WaTranslator.messages={
"Feature no available in preview":"Fonctionnalité non disponible en test !",
"Untitled page":"Sans titre",
"Form:Label my form":"Mon formulaire",
"Form:Firstname field":"Prénom",
"Form:Lastname field":"Nom",
"Form:My choices":"Mes choix",
"Form:Sample choice value":"Choix",
"label button Send form":"Envoyer",
"This field is mandatory":"Ce champ est obligatoire",
"Form successfully sent !":"Formulaire envoyé avec succès !",
"Recaptcha not validated !":"La vérification reCAPTCHA a échouée !",
"No email":"Aucun email n'a été défini !",
"Form:upload - Select file":"Sélection de fichier(s)",
"Search placeholder":"Rechercher",
"%1 result found !":"%1 résultat(s) trouvé(s)",
"Page under construction":"Page en construction",
};

//Selectors
var waImageGalleryClassSelector = "wa-image-gallery-tobind";
var waImageGalleryNoIndicatior = "wa-image-gallery-no-thumbs";
var waImageGalleryIdLinkSelectorPattern = "wa-gal-link";
var waCarouselIdLinkSelectorPattern = "wa-compcarousel-link";
var waCarouselIdSelectorPattern = "wa-compcarousel";
