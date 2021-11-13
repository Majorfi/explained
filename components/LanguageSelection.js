import	React, {Fragment, useRef}		from	'react';
import	{Dialog, Transition}			from	'@headlessui/react';
import	FlagFR							from	'components/FlagFR';
import	FlagEN							from	'components/FlagEN';
import	FlagES							from	'components/FlagES';
import	FlagRU							from	'components/FlagRU';

function	LanguageSelection({open, set_open, language, set_language}) {
	const	ref = useRef();

	let	languageSelectionTitle = 'Language selection';
	if (language === 'fr')
		languageSelectionTitle = 'Sélection de la langue';
	if (language === 'es')
		languageSelectionTitle = 'Selección de idioma';
	if (language === 'ru')
		languageSelectionTitle = 'Выбор языка';


	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as={'div'}
				static
				className={'fixed z-10 inset-0 overflow-y-auto'}
				style={{zIndex: 9999999}}
				initialFocus={ref}
				open={open}
				onClose={set_open}>
				<div className={'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'}>
					<Transition.Child
						as={Fragment}
						enter={'ease-out duration-300'} enterFrom={'opacity-0'} enterTo={'opacity-100'}
						leave={'ease-in duration-200'} leaveFrom={'opacity-100'} leaveTo={'opacity-0'}>
						<Dialog.Overlay className={'fixed inset-0 bg-opacity-50 bg-gray-900 transition-opacity'} />
					</Transition.Child>

					<span className={'hidden sm:inline-block sm:align-middle sm:h-screen'} aria-hidden={'true'}>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter={'ease-out duration-300'}
						enterFrom={'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
						enterTo={'opacity-100 translate-y-0 sm:scale-100'}
						leave={'ease-in duration-200'}
						leaveFrom={'opacity-100 translate-y-0 sm:scale-100'}
						leaveTo={'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}>
						<div className={'inline-block align-bottom bg-dark-400 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:mb-96 font-sans rounded-lg shadow-2xl'}>
							<div className={'mt-2 font-sans font-bold text-lg text-white text-opacity-70 px-6 pt-2 uppercase'}>
								{languageSelectionTitle}
							</div>

							<div className={'flex-wrap p-6 pt-3 grid grid-cols-2'}>
								<div
									onClick={() => {set_language('en'); set_open(false);}}
									className={'bg-dark-600 hover:bg-dark-900 cursor-pointer border border-dark-900 flex flex-col justify-center items-center transition-colors p-6 text-center'}>
									<FlagEN />
									<div className={'mt-4 font-sans font-bold text-xl text-white'}>{'English'}</div>
								</div>
								<div
									onClick={() => {set_language('fr'); set_open(false);}}
									className={'bg-dark-600 hover:bg-dark-900 cursor-pointer border border-dark-900 flex flex-col justify-center items-center transition-colors p-6 text-center'}>
									<FlagFR />
									<div className={'mt-4 font-sans font-bold text-xl text-white'}>{'Français'}</div>
								</div>
								<div
									onClick={() => {set_language('es'); set_open(false);}}
									className={'bg-dark-600 hover:bg-dark-900 cursor-pointer border border-dark-900 flex flex-col justify-center items-center transition-colors p-6 text-center'}>
									<FlagES />
									<div className={'mt-4 font-sans font-bold text-xl text-white'}>{'Español'}</div>
								</div>
								<div
									onClick={() => {set_language('ru'); set_open(false);}}
									className={'bg-dark-600 hover:bg-dark-900 cursor-pointer border border-dark-900 flex flex-col justify-center items-center transition-colors p-6 text-center'}>
									<FlagRU />
									<div className={'mt-4 font-sans font-bold text-xl text-white'}>{'Русский'}</div>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}


export default LanguageSelection;