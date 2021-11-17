import	React				from	'react';
import	FlagFR				from	'components/FlagFR';
import	FlagEN				from	'components/FlagEN';
import	FlagES				from	'components/FlagES';
import	FlagRU				from	'components/FlagRU';
import	SectionsEn			from	'localization/en.json';
import	SectionsFr			from	'localization/fr.json';

const	LOCALES = {
	'en-US': {
		'code': 'en-US',
		'name': 'English',
		'selectTitle': 'Language selection',
		'flag-sm': <FlagEN width={16} height={12} />,
		'flag': <FlagEN width={32} height={24} />,
		'section': SectionsEn,
	},
	'fr': {
		'code': 'fr',
		'name': 'Français',
		'selectTitle': 'Sélection de la langue',
		'flag-sm': <FlagFR width={16} height={12} />,
		'flag': <FlagFR width={32} height={24} />,
		'section': SectionsFr,
	},
	'es-es': {
		'code': 'es-es',
		'name': 'Español',
		'selectTitle': 'Selección de idioma',
		'flag-sm': <FlagES width={16} height={12} />,
		'flag': <FlagES width={32} height={24} />,
		'section': SectionsEn,
	},
	'ru': {
		'code': 'ru',
		'name': 'Русский',
		'selectTitle': 'Выбор языка',
		'flag-sm': <FlagRU width={16} height={12} />,
		'flag': <FlagRU width={32} height={24} />,
		'section': SectionsEn,
	},
};

export default LOCALES;