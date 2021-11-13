import	React				from	'react';
import	LanguageSelection	from	'components/LanguageSelection';
import	FlagFR				from	'components/FlagFR';
import	FlagEN				from	'components/FlagEN';
import	FlagES				from	'components/FlagES';
import	FlagRU				from	'components/FlagRU';
import	SectionsEn			from	'localization/en.json';
import	SectionsFR			from	'localization/fr.json';

function	SectionFooter() {
	return (
		<div className={'max-w-screen-lg mx-auto mt-auto mb-6 md:mb-36'}>
			<svg width={'24'} height={'24'} className={'animate animate-bounce text-dark-200'} viewBox={'0 0 24 24'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
				<path d={'M5.65079 4.24076C5.23147 3.88134 4.60017 3.9299 4.24075 4.34923C3.88132 4.76855 3.92989 5.39985 4.34921 5.75927L11.3492 11.7593C11.7237 12.0803 12.2763 12.0803 12.6508 11.7593L19.6508 5.75927C20.0701 5.39985 20.1187 4.76855 19.7593 4.34923C19.3998 3.9299 18.7685 3.88134 18.3492 4.24076L12 9.68294L5.65079 4.24076Z'} fill={'currentcolor'}/>
				<path d={'M5.65079 11.2408C5.23147 10.8813 4.60017 10.9299 4.24075 11.3492C3.88132 11.7686 3.92989 12.3999 4.34921 12.7593L11.3492 18.7593C11.7237 19.0803 12.2763 19.0803 12.6508 18.7593L19.6508 12.7593C20.0701 12.3999 20.1187 11.7686 19.7593 11.3492C19.3998 10.9299 18.7685 10.8813 18.3492 11.2408L12 16.6829L5.65079 11.2408Z'} fill={'currentcolor'}/>
			</svg>
		</div>
	);
}

function	Index() {
	const	[language, set_language] = React.useState('en');
	const	[modalLanguageOpen, set_modalLanguageOpen] = React.useState(false);

	let	Sections = SectionsEn;
	let	Flag = FlagEN;
	if (language === 'fr') {
		Sections = SectionsFR;
		Flag = FlagFR;
	}
	if (language === 'es') {
		Sections = SectionsEn;
		Flag = FlagES;
	}
	if (language === 'ru') {
		Sections = SectionsEn;
		Flag = FlagRU;
	}

	return (
		<>
			<LanguageSelection
				open={modalLanguageOpen}
				set_open={set_modalLanguageOpen}
				language={language}
				set_language={set_language} />
			<section className={'section flex w-full h-screen px-4 md:px-0 overflow-hidden relative'}>
				<div className={'tmp__home--bg'}><div className={'tmp__home--bg--first'}></div><div className={'tmp__home--bg--second'}></div></div>
				<div
					className={'w-full flex justify-end absolute h-10 top-0 left-0 right-0 p-4 filter cursor-pointer'}
					onClick={() => set_modalLanguageOpen(true)}>
					<Flag width={16} height={12} />
				</div>

				<div className={'h-full max-w-screen-lg mx-auto flex flex-col w-full'}>
					<div className={'w-full h-full mx-auto flex flex-row justify-center items-center'}>
						<div className={'flex flex-col w-full'}>
							<div className={'inline-flex items-center justify-center mx-auto flex-col md:flex-row'}>
								<h1 data-text={'Building with '} className={'font-sans font-bold text-5xl md:text-6xl text-center'}>
									{'Building with'}
								</h1>
								<p className={'hidden md:block'}>&nbsp;&nbsp;&nbsp;</p>
								<h1 data-text={'Yearn'} className={'font-sans font-bold text-5xl md:text-6xl text-center highlighted'}>
									{'Yearn'}
								</h1>
							</div>
							
							<div className={'flex items-center justify-center mx-auto'}>
								<strong className={'mt-8'}>
									<h1 data-text={'EXPLAINED'} className={'font-sans font-bold text-2xl md:text-4xl text-center mt-16 md:mt-24 mb-8 md:mb-0'}>
										{'EXPLAINED'}
									</h1>
								</strong>
							</div>
						</div>
					</div>
					<SectionFooter />
				</div>
			</section>
			{Sections.map((section, i) => (
				<section key={`Section_${i}`} className={'section flex w-full h-screen px-4 md:px-0'}>					
					<div className={'h-full max-w-screen-lg mx-auto flex flex-col w-full'}>
						<div className={'w-full h-full mx-auto flex flex-row justify-center items-center'}>
							<div className={'flex flex-col w-full'}>
								<p className={'text-white font-sans font-bold text-2xl md:text-5xl text-center'}>
									{section.title.map(({text, style}) => {
										if (style === 'highlight') {
											return <span className={'text-pending'}>{text}</span>;
										} else {
											return text;
										}
									})}
								</p>
								<p className={'text-white font-sans font-normal text-base md:text-lg text-center mt-8 md:mt-24'}>
									{section.description.map(({text, style}) => {
										if (style === 'highlight') {
											return <span className={'text-pending'}>{text}</span>;
										} if (style === 'spacing') {
											return <p className={'mt-4 highlight'}/>;
										} else {
											return text;
										
										}
									})}
								</p>
							</div>
						</div>
						{i < Sections.length - 1 ? <SectionFooter /> : null}
					</div>
				</section>
			))}
		</>
	);
}

export default Index;
