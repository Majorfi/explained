import	React				from	'react';
import	LanguageSelection	from	'components/LanguageSelection';
import	FlagFR				from	'components/FlagFR';
import	FlagEN				from	'components/FlagEN';
import	FlagES				from	'components/FlagES';
import	FlagRU				from	'components/FlagRU';
import	SectionsEn			from	'localization/en.json';
import	SectionsFR			from	'localization/fr.json';
import	useWindowScroll		from	'hooks/useWindowScroll';

const range = (min, max) => [...Array(max - min + 1).keys()].map((i) => i + min);

function	YearnLogo() {
	return (
		<svg width={'32'} height={'32'} viewBox={'0 0 32 32'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
			<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M32 16C32 13.9059 31.5834 11.8118 30.7821 9.87712C29.9808 7.9424 28.7946 6.16704 27.3136 4.6864C25.833 3.20544 24.0576 2.0192 22.1229 1.21792C20.1882 0.41664 18.0941 0 16 0C13.9059 0 11.8118 0.41664 9.87712 1.21792C7.9424 2.0192 6.16704 3.20544 4.6864 4.6864C3.20544 6.16704 2.0192 7.9424 1.21792 9.87712C0.41664 11.8118 0 13.9059 0 16C0 18.0941 0.41664 20.1882 1.21792 22.1229C2.0192 24.0576 3.20544 25.833 4.6864 27.3136C6.16704 28.7946 7.9424 29.9808 9.87712 30.7821C11.8118 31.5834 13.9059 32 16 32C18.0941 32 20.1882 31.5834 22.1229 30.7821C24.0576 29.9808 25.833 28.7946 27.3136 27.3136C28.7946 25.833 29.9808 24.0576 30.7821 22.1229C31.5834 20.1882 32 18.0941 32 16Z'} fill={'#0657F9'}/>
			<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M15.1731 8.776H16.8269V23.2246H15.1731V8.776Z'} fill={'white'}/>
			<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M14.2346 15.5728V13.8461C12.9082 13.1936 11.9949 11.8285 11.9949 10.2502C11.9949 8.03903 13.7882 6.24575 16 6.24575C18.4835 6.24575 20.2768 8.03903 20.2768 10.2502C20.2768 10.8077 20.1622 11.3385 19.8874 11.9693L19.1811 9.67327L17.7654 10.1158L19.0208 14.8941L23.8944 13.1011L23.3021 11.7037L21.4845 12.3257C21.8134 11.6125 21.8781 11.088 21.8781 10.2502C21.8781 7.15391 19.368 4.64383 16 4.64383C12.9037 4.64383 10.3936 7.15391 10.3936 10.2502C10.3936 12.7296 12.0035 14.8329 14.2346 15.5728Z'} fill={'white'}/>
			<path fillRule={'evenodd'} clipRule={'evenodd'} d={'M17.7654 16.4278V18.1545C19.0918 18.8073 20.0051 20.1721 20.0051 21.7504C20.0051 23.9616 18.2118 25.7549 16 25.7549C13.5165 25.7549 11.7232 23.9616 11.7232 21.7504C11.7232 21.1929 11.8378 20.6621 12.1126 20.0313L12.8189 22.3273L14.2346 21.8848L12.9792 17.1065L8.1056 18.8998L8.69792 20.2969L10.5155 19.6749C10.1866 20.3881 10.1219 20.9126 10.1219 21.7504C10.1219 24.8467 12.632 27.3568 16 27.3568C19.0963 27.3568 21.6064 24.8467 21.6064 21.7504C21.6064 19.271 19.9965 17.1677 17.7654 16.4278Z'} fill={'white'}/>
		</svg>

	);
}
function	SectionFooter({currentPage, pagesCount, slideSize}) {
	return (
		<div className={'max-w-screen-lg mx-auto flex flex-col justify-center items-center'}>
			<div className={'mb-11 flex flex-row space-x-8'}>
				{range(0, pagesCount).map((e) => (
					<div
						key={e}
						onClick={() => currentPage !== e && window.scroll({top: e === 0 ? 0 : (slideSize * e), behavior: 'smooth'})}
						className={`w-2 h-2 transition-colors ${currentPage === e ? 'bg-white' : 'bg-dark-500 cursor-pointer'} rounded-full`} />
				))}
			</div>
			<svg width={'24'} height={'24'} className={`animate animate-bounce text-dark-500 transition-opacity ${currentPage !== pagesCount ? 'opacity-100' : 'opacity-0'}`} viewBox={'0 0 24 24'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
				<path d={'M5.65079 4.24076C5.23147 3.88134 4.60017 3.9299 4.24075 4.34923C3.88132 4.76855 3.92989 5.39985 4.34921 5.75927L11.3492 11.7593C11.7237 12.0803 12.2763 12.0803 12.6508 11.7593L19.6508 5.75927C20.0701 5.39985 20.1187 4.76855 19.7593 4.34923C19.3998 3.9299 18.7685 3.88134 18.3492 4.24076L12 9.68294L5.65079 4.24076Z'} fill={'currentcolor'}/>
				<path d={'M5.65079 11.2408C5.23147 10.8813 4.60017 10.9299 4.24075 11.3492C3.88132 11.7686 3.92989 12.3999 4.34921 12.7593L11.3492 18.7593C11.7237 19.0803 12.2763 19.0803 12.6508 18.7593L19.6508 12.7593C20.0701 12.3999 20.1187 11.7686 19.7593 11.3492C19.3998 10.9299 18.7685 10.8813 18.3492 11.2408L12 16.6829L5.65079 11.2408Z'} fill={'currentcolor'}/>
			</svg>
		</div>
	);
}

function	SectionTitle({currentPage, pagesCount, slideSize, language, set_language}) {
	const	[modalLanguageOpen, set_modalLanguageOpen] = React.useState(false);

	let	Flag = FlagEN;
	if (language === 'fr')
		Flag = FlagFR;
	if (language === 'es')
		Flag = FlagES;
	if (language === 'ru')
		Flag = FlagRU;

	return (
		<>
			<div className={'fixed top-0 pt-10 pb-28 w-full flex justify-center items-center with-top-gradient'}>
				<YearnLogo />
			</div>
			<div
				className={'w-full flex justify-end absolute h-10 top-0 left-0 right-0 p-4 filter cursor-pointer'}
				onClick={() => set_modalLanguageOpen(true)}>
				<Flag width={16} height={12} />
			</div>
			<div className={'h-full max-w-screen-lg mx-auto flex flex-col w-full'}>
				<div className={'w-full h-full mx-auto flex flex-row justify-center items-center'}>
					<div className={'flex flex-col w-full'}>
						<div className={'flex flex-col items-center justify-center mx-auto space-y-2'}>
							<p className={'font-rubik font-light text-4xl text-center lowercase text-white'}>
								{'Building with'}
							</p>
							<h1 className={'font-rubik font-black text-xxl text-center text-highlight uppercase'}>
								{'YEARN'}
							</h1>
							<p className={'font-rubik font-light text-4xl text-center lowercase text-white'}>
								{'Explained'}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={'fixed bottom-0 pb-10 pt-16 w-full flex justify-center items-center with-bottom-gradient'}>
				<SectionFooter
					slideSize={slideSize}
					currentPage={currentPage}
					pagesCount={pagesCount} />
			</div>
			<LanguageSelection
				open={modalLanguageOpen}
				set_open={set_modalLanguageOpen}
				language={language}
				set_language={set_language} />
		</>
	);
}

function	Index() {
	const	ref = React.useRef();
	const	headerRef = React.useRef();
	const	[currentPage, set_currentPage] = React.useState(0);
	const	[slideSize, set_slideSize] = React.useState(0);
	const	[language, set_language] = React.useState('en');
	const	{y} = useWindowScroll();

	let	sections = SectionsEn;
	if (language === 'fr')
		sections = SectionsFR;
	if (language === 'es')
		sections = SectionsEn;
	if (language === 'ru')
		sections = SectionsEn;

	React.useEffect(() => {
		const	sectionHeight = headerRef?.current?.getBoundingClientRect()?.height || 0;
		const	positionFromTop = ref?.current?.getBoundingClientRect()?.top || 0;
		set_currentPage(positionFromTop > 0 ? 0 : Math.round((Math.abs(positionFromTop / sectionHeight) + 1)));
		set_slideSize(sectionHeight);
	}, [y, headerRef, ref]);

	return (
		<>
			<section
				ref={headerRef}
				className={'section flex w-full h-screen px-4 md:px-0 overflow-hidden relative'}>
				<SectionTitle
					language={language}
					set_language={set_language}
					slideSize={slideSize}
					currentPage={currentPage}
					pagesCount={sections.length} />
			</section>
			<div ref={ref}>
				{sections.map((section, i) => (
					<section key={`Section_${i}`} className={'section flex w-full h-screen px-4 md:px-0'}>					
						<div className={'h-full max-w-screen-lg mx-auto flex flex-col justify-center items-center w-full whitespace-pre-line'}>
							<p className={'text-white font-rubik font-bold text-4xl text-center'}>
								{section.title.map(({text, style}, index) => {
									if (style === 'highlight') {
										return <span key={`title${index}`}className={'text-highlight'}>{text}</span>;
									} else {
										return text;
									}
								})}
							</p>
							<p className={'text-dark-100 font-rubik font-light text-2xl text-center m-10 p-0.5'}>
								{section.description.map(({text, style}, index) => {
									if (style === 'highlight') {
										return <span key={index} className={'text-highlight'}>{text}</span>;
									} if (style === 'spacing') {
										return <p key={index} />;
									} else {
										return text;
										
									}
								})}
							</p>
						</div>
					</section>
				))}
			</div>
		</>
	);
}

export default Index;
